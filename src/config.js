const serverUri = 'http://192.168.0.105:5000';

const fetchOpt = Object.freeze({
  method: 'POST',
  headers: Object.freeze({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }),
});

module.exports = Object.freeze({
  serverUri,
  fetchOpt,
});
