const key = 'iframe-slide';
let interval = 10 * 60 * 1000;
const setIntervalDuration = (ms) => {
  if(!ms){
    return;
  }
  interval = ms;
};
const getInterval = () => {
  return interval;
};
const fetchSrcs = () => {
  let srcs = JSON.parse(window.localStorage.getItem(key));
  if(!srcs){
    srcs = [];
  }
  return srcs;
};
const showSrcs = () => {
  console.log(fetchSrcs());
};
const storeSrcs = (srcs) => {
  return window.localStorage.setItem(key, JSON.stringify(srcs));
};
const addSrc = (src) => {
  let srcs = fetchSrcs();
  srcs.push(src);
  storeSrcs(srcs);
};
const getFrame = () => {
  return document.getElementById(key);
};
const setSrc = (src) => {
  if(!src){
    return;
  }
  getFrame().src = src;
};
const getCurrensSrc = () => {
  return getFrame().src;
};
let timer = null;
let currentIndex = 0;
const next = () => {
  console.log('current', [currentIndex, getCurrensSrc()]);
  let srcs = fetchSrcs();
  setSrc(srcs[(currentIndex % srcs.length)]);
  currentIndex++;
};
const auto = () => {
  if(timer){
    console.warn('already started');
    return null;
  }
  next();
  timer = window.setInterval(next, getInterval());
  return timer;
};
const stop = () => {
  if(!timer){
    return;
  }
  window.clearInterval(timer);
  timer = null;
};
const help = () => {
  console.log(`
setIntervalDuration(interval): set refresh interval (ms). default: 10min
getInterval(): get current refresh interval (ms).
addSrc(url): add url
showSrcs(): show stored urls
fetchSrcs(): return srcs (Array)
storeSrcs(srcs): store srcs (Array)
setSrc(src): sets src into iframe.src
getCurrensSrc(): get current src
next(): set next url
auto(): start interval
stop(): stop interval
help(): show this messages
`);
};
window.setIntervalDuration = setIntervalDuration;
window.getInterval = getInterval;
window.fetchSrcs = fetchSrcs;
window.showSrcs = showSrcs;
window.storeSrcs = storeSrcs;
window.addSrc = addSrc;
window.getFrame = getFrame;
window.setSrc = setSrc;
window.getCurrensSrc = getCurrensSrc;
window.next = next;
window.auto = auto;
window.stop = stop;
window.help = help;

auto();
