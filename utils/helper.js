import { saveAs } from 'file-saver';

const JSZip = require('jszip');

export function makeZipFile(file, text) {
  const zip = new JSZip();

  zip.file(`manifest/${file}.txt`, text);
  zip.file('test.txt', 'here lies nate');

  zip.generateAsync({ type: 'blob' }).then(function(content) {
    // see FileSaver.js
    saveAs(content, 'proper.zip');
  });
}
