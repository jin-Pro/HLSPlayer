import loadHLS from "./loadHLS.js";
import initFlag from "./initFlag.js";

const Init = async (getVideoSrcCallback) => {
  const loadFlag = await loadHLS();
  if (!loadFlag) throw new Error("HLS Load Error");

  const videoSrc = await getVideoSrcCallback();
  initFlag.initTrue();

  return {
    setVideoTag: setVideoTag(videoSrc),
  };
};

export default Init;

/**
 *
 * @description videoSrc는 우리가 넣어주고
 * @description videoTag는 사용자가 넣기
 */
const setVideoTag = (videoSrc) => async (videoTag) => {
  if (initFlag.isInit() === false) throw new Error("not init");
  setVideoSrc(videoTag, videoSrc);
};

const setVideoSrc = (video, videoSrc) => {
  if (video.canPlayType("application/vnd.apple.mpegurl")) {
    video.src = videoSrc;
  } else if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
  }
};
