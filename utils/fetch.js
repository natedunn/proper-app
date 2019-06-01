import axios from 'axios';
import _ from 'lodash';

export async function getData(term, origin) {
  // Composer
  if (origin === 'composer') {
    console.log(`https://packagist.org/search.json?q=${term}`);
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
  if (origin === 'npm') {
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
          desc: item.package.description,
          repo: item.package.links.repository,
          ver: item.package.version,
          origin: 'npm',
        });
      });
      return filtered;
    });
  }
}
