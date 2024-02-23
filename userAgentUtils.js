const UAParser = require('ua-parser-js');

const parser = new UAParser();

const isMobile = () => {
  const userAgent = window.navigator.userAgent;
  parser.setUA(userAgent);
  const deviceType = parser.getDevice().type;
  return deviceType === 'mobile';
};

module.exports = {
  isMobile,
};
