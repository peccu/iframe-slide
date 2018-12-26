// based on https://dev.to/marvindanig/fullscreen-web-apps-on-ipad-safari--3p9b
const userAgent = window.navigator.userAgent;

const iPadSafari =
      !!userAgent.match(/iPad/i) &&       // Detect iPad first.
  !!userAgent.match(/WebKit/i) &&     // Filter browsers with webkit engine only
  !userAgent.match(/CriOS/i) &&       // Eliminate Chrome & Brave
  !userAgent.match(/OPiOS/i) &&       // Rule out Opera
  !userAgent.match(/FxiOS/i) &&       // Rule out Firefox
  !userAgent.match(/FocusiOS/i);      // Eliminate Firefox Focus as well!

const iOS = () => {
  if(!userAgent.match(/ipad|iphone|ipod/i)){
    return null;
  }
  const iOS = {};
  iOS.majorReleaseNumber = +userAgent.match(/OS (\d)?\d_\d(_\d)?/i)[0].split('_')[0].replace('OS ', '');
  return iOS;
};

const isFullscreenSupports = () => {
  return !(userAgent.match(/iPhone/i) || userAgent.match(/iPod/i) ||
           (userAgent.match(/iPad/i) && iOS().majorReleaseNumber < 12) ||
           (userAgent.match(/iPad/i) && !iPadSafari));
};
export default isFullscreenSupports;
