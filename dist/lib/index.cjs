'use strict';

const axios = require('axios');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e.default : e; }

const axios__default = /*#__PURE__*/_interopDefaultCompat(axios);

const get = (url) => {
  return axios__default.get(url);
};

exports.get = get;
