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
  window.clearInterval(timer);
  timer = null;
};
const help = () => {
  console.log(`
app.interval: refresh interval. default: 10min
app.addSrc(url): add url
app.showSrcs(): show stored urls
app.fetchSrcs(): return srcs (Array)
app.storeSrcs(srcs): store srcs (Array)
app.setSrc(src): sets src into iframe.src
app.auto(): start interval
app.stop(): stop interval
app.help(): show this messages
`);
};
window.app = {
  interval,
  fetchSrcs,
  showSrcs,
  storeSrcs,
  addSrc,
  getFrame,
  setSrc,
  auto,
  stop,
  help
};
auto();
