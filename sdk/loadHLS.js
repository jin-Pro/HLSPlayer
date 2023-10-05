const loadHLS = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/hls.js@alpha";
    script.onload = () => resolve(true);
    document.head.appendChild(script);
  }).catch(() => false);
};

export default loadHLS;
