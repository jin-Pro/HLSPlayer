const { setVideoTag } = await Video.Init(() => {
  const dummySrc =
    "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8";
  return Promise.resolve(dummySrc);
});

setVideoTag(document.getElementById("video"));
