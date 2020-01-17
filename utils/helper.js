import { saveAs, FileSaver } from 'file-saver';
import axios from 'axios';

const JSZip = require('jszip');


function slugify (str) {
  str = str.replace(/^\s+|\s+$/g, '');

  // Make the string lowercase
  str = str.toLowerCase();

  // Remove accents, swap ñ for n, etc
  var from = "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;";
  var to = "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  // Remove invalid chars
  str = str.replace(/[^a-z0-9 -]/g, '')
    // Collapse whitespace and replace by -
    .replace(/\s+/g, '-')
    // Collapse dashes
    .replace(/-+/g, '-');

  return str;
}

function createManifestFile (name, data, zip) {
  if (data.length) {
    const names = [];
    data.forEach(item => {
      if (item.origin.id.toLowerCase() === 'mas') {
        names.push(`${item.id}::${slugify(item.name)}`);
      } else {
        names.push(item.id);
      }
    });
    zip.file(`proper/manifest/${name}`, names.join('\n'));
  }
}

async function generateFolders (zip) {
  zip.folder('proper');
  zip.folder('proper/lib');
  zip.folder('proper/manifest');
}

async function generatePresets (zip) {
  // Presets
  const presets = [
    {
      name: 'proper',
      dir: false,
      file: 'https://raw.githubusercontent.com/natedunn/proper/master/proper',
    },
    {
      name: 'functions',
      dir: false,
      file:
        'https://raw.githubusercontent.com/natedunn/proper/master/functions',
    },
    {
      name: 'checks',
      dir: 'lib',
      file:
        'https://raw.githubusercontent.com/natedunn/proper/master/lib/checks',
    },
    {
      name: 'dotfiles',
      dir: 'lib',
      file:
        'https://raw.githubusercontent.com/natedunn/proper/master/lib/dotfiles',
    },
    {
      name: 'installs',
      dir: 'lib',
      file:
        'https://raw.githubusercontent.com/natedunn/proper/master/lib/installs',
    },
    {
      name: 'process',
      dir: 'lib',
      file:
        'https://raw.githubusercontent.com/natedunn/proper/master/lib/process',
    },
    {
      name: 'prompts',
      dir: 'lib',
      file:
        'https://raw.githubusercontent.com/natedunn/proper/master/lib/prompts',
    },
    {
      name: 'text',
      dir: 'lib',
      file: 'https://raw.githubusercontent.com/natedunn/proper/master/lib/text',
    },
    {
      name: 'utilities',
      dir: 'lib',
      file:
        'https://raw.githubusercontent.com/natedunn/proper/master/lib/utilities',
    },
    {
      name: 'variables',
      dir: 'lib',
      file:
        'https://raw.githubusercontent.com/natedunn/proper/master/lib/variables',
    },
  ];

  for (const preset of presets) {
    await axios.get(preset.file).then(res => {
      // Load presets
      zip.file(
        !preset.dir
          ? `proper/${preset.name}`
          : `proper/${preset.dir}/${preset.name}`,
        res.data
      );
    })
  }
}

async function generateManifests (queue, zip) {
  // Get Zip Data
  const npmItems = queue.filter(
    item => item.origin.id.toLowerCase() === 'npm'
  );
  const composerItems = queue.filter(
    item => item.origin.id.toLowerCase() === 'composer'
  );
  const masItems = queue.filter(
    item => item.origin.id.toLowerCase() === 'mas'
  );
  const caskItems = queue.filter(
    item => item.origin.id.toLowerCase() === 'cask'
  );
  const brewItems = queue.filter(
    item => item.origin.id.toLowerCase() === 'homebrew'
  );
  createManifestFile('npm', npmItems, zip);
  createManifestFile('composer', composerItems, zip);
  createManifestFile('apps', masItems, zip);
  createManifestFile('casks', caskItems, zip);
  createManifestFile('brews', brewItems, zip);
}

async function compileZip (zip) {
  zip.generateAsync({ type: 'blob' }).then(function (content) {
    saveAs(content, 'proper.zip');
  });
}

export async function generateZip (queue) {
  // New Zip
  const zip = new JSZip();

  try {
    await generateFolders(zip);
    await generatePresets(zip);
    await generateManifests(queue, zip);
    await compileZip(zip);
  } catch (error) {
    console.log(error);
  }
}
