import { saveAs, FileSaver } from 'file-saver';
import axios from 'axios';

const JSZip = require('jszip');

function setManifestData(name, data, zip) {
  if (data.length) {
    const names = [];
    data.forEach(item => {
      names.push(item.name);
    });
    zip.file(`proper/manifest/${name}`, names.join('\n'));
  }
}

export function generateZip(queue) {
  // New Zip
  const zip = new JSZip();
  // Create folders
  zip.folder('proper');
  zip.folder('proper/lib');
  zip.folder('proper/manifest');

  // Set Presets
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

  // Start!
  presets.forEach((preset, index) => {
    axios
      .get(preset.file)
      .then(function(response) {
        // Load presets

        zip.file(
          !preset.dir
            ? `proper/${preset.name}`
            : `proper/${preset.dir}/${preset.name}`,
          response.data
        );

        // After final preset is loaded...
        if (index === presets.length - 1) {
          // Get Zip Data
          const npmItems = queue.filter(
            item => item.origin.id.toLowerCase() === 'npm'
          );
          const composerItems = queue.filter(
            item => item.origin.id.toLowerCase() === 'composer'
          );
          setManifestData('npm', npmItems, zip);
          setManifestData('composer', composerItems, zip);

          // Generate!
          zip.generateAsync({ type: 'blob' }).then(function(content) {
            saveAs(content, 'proper.zip');
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  });
}
