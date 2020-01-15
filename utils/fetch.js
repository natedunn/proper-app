import axios from 'axios';
import Fuse from 'fuse.js';
// import _ from 'lodash';

export async function getData (term, origin) {
  if (!term.length) return [];
  // Composer
  if (origin.toLowerCase() === 'composer'.toLowerCase()) {
    const response = axios
      .get(`https://packagist.org/search.json?q=${term}`)
      .then(res => res.data.results)
      .catch(err => {
        console.log(err);
      });

    return response.then(data => {
      const filtered = [];
      data.forEach(item => {
        filtered.push({
          name: item.name,
          id: item.name,
          desc: item.description,
          repo: item.repository,
          ver: null, // not directly available
          origin: 'composer',
        });
      });
      return filtered;
    });
  }
  // NPM
  if (origin.toLowerCase() === 'npm'.toLowerCase()) {
    const response = axios
      .get(`https://api.npms.io/v2/search/suggestions?q=${term}`)
      .then(res => res.data)
      .catch(err => {
        console.log(err);
      });

    return response.then(data => {
      const filtered = [];
      data.forEach(item => {
        filtered.push({
          name: item.package.name,
          id: item.package.name,
          desc: item.package.description,
          repo: item.package.links.repository,
          ver: item.package.version,
          origin: 'npm',
        });
      });
      return filtered;
    });
  }
  if (origin.toLowerCase() === 'cask'.toLowerCase()) {
    const response = axios
      .get(`https://formulae.brew.sh/api/cask.json`)
      .then(res => {
        const fuse = new Fuse(res.data, {
          shouldSort: true,
          threshold: 0.6,
          location: 0,
          distance: 100,
          maxPatternLength: 32,
          minMatchCharLength: 1,
          keys: [
            "name",
          ]
        });
        return fuse.search(term);
      })
      .catch(err => {
        console.log(err);
      });

    return response.then(data => {
      const filtered = [];
      data.forEach(item => {
        filtered.push({
          name: item.name[0],
          id: item.name[0],
          desc: null,
          repo: null,
          ver: item.version,
          origin: 'cask',
        });
      });
      return filtered;
    });
  }
  if (origin.toLowerCase() === 'homebrew'.toLowerCase()) {
    const response = axios
      .get(`https://formulae.brew.sh/api/formula.json`)
      .then(res => {
        const fuse = new Fuse(res.data, {
          shouldSort: true,
          threshold: 0.6,
          location: 0,
          distance: 100,
          maxPatternLength: 32,
          minMatchCharLength: 1,
          keys: [
            "name",
          ]
        });
        return fuse.search(term);
      })
      .catch(err => {
        console.log(err);
      });

    return response.then(data => {
      const filtered = [];
      data.forEach(item => {
        filtered.push({
          name: item.name,
          id: item.name,
          desc: null,
          repo: null,
          ver: null,
          origin: 'homebrew',
        });
      });
      return filtered;
    });
  }
  // MAS
  if (origin.toLowerCase() === 'mas'.toLowerCase()) {
    const response = axios
      .get(`http://itunes.apple.com/search?entity=macSoftware&term=${term}`)
      .then(res => res.data.results)
      .catch(err => {
        console.log(err);
      });

    return response.then(data => {
      const filtered = [];
      data.forEach(item => {
        filtered.push({
          name: item.trackName,
          id: item.trackId,
          desc: item.description,
          repo: null, // not directly available
          ver: item.version,
          origin: 'mas',
        });
      });
      return filtered;
    });
  }
  return [];
}
