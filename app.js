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
let currentIndex = 0;
const auto = () => {
  if(timer){
    console.warn('already started');
    return null;
  }
  let srcs = fetchSrcs();
  setSrc(srcs[(currentIndex % srcs.length)]);
  timer = window.setInterval(()=>{
    currentIndex++;
    setSrc(srcs[(currentIndex % srcs.length)]);
  }, interval);
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
