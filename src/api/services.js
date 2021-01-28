import _ from 'lodash';
const host = 'http://localhost:9000/api/';

const dirs = {
  itemsSearch: '/api/items?q=​::query',
  item: 'items/:id',

  
};

const replaceParams = (url, params) => {
  _.forIn(params, (value, key) => {
    url = url.replace(`:${key}`, value);
  });
  return url;
};
const getFrom = async (url, urlParams, token) => {
  if (urlParams) {
    url = replaceParams(url, urlParams);
  }
  url = `${host}${url}`;
    let res = await await fetch(url, {
                  method: 'GET',
                  headers: {
                    'x-auth-token': token,
                  },
                });
  return res;
};


export {dirs, getFrom};
