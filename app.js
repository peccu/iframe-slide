const key = 'iframe-slide';
let interval = 10 * 60 * 1000;
const fetchSrcs = () => {
  return JSON.parse(window.localStorage.getItem(key));
};
const showSrcs = () => {
  console.log(fetchSrcs());
};
const storeSrcs = (srcs) => {
  return window.localStorage.setItem(key, JSON.stringify(srcs));
};
const addSrc = (src) => {
  let srcs = fetchSrcs();
  if(!srcs){
    srcs = [];
  }
  srcs.push(src);
  storeSrcs(srcs);
};
const getFrame = () => {
  return document.getElementById(key);
};
const setSrc = (src) => {
  getFrame().src = src;
};
let timer = null;
let currentIndex = 1;
const auto = () => {
  if(timer){
    console.warn('already started');
    return null;
  }
  let srcs = fetchSrcs();
  setSrc(srcs[(srcs.length % currentIndex)]);
  timer = window.setInterval(()=>{
    currentIndex++;
    setSrc(srcs[(srcs.length % currentIndex)]);
  }, interval);
  return timer;
};
const stop = () => {
  window.clearInterval(timer);
  timer = null;
};
const help = () => {
  console.log(`interval: refresh interval. default: 10min
assSrc(url): add url
showSrcs(): show stored urls
fetchSrcs(): return srcs (Array)
storeSrcs(srcs): store srcs (Array)
setSrc(src): sets src into iframe.src
auto(): start interval
stop(): stop interval
help(): show this messages
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
