# HLS Player

실시간 영상 스트림을 HLS를 사용하여 html에서 렌더링 하기 위한 코드입니다.

# 사용법

```tsx=
const obj = await window.Video.Init(getVideoSrc);
obj.setVideoTag(videoTag);
```

```
const getVideoSrc = () => {
  const dummySrc = "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8";

  return Promise.resolve(dummySrc);
}

const videoTag = document.getElementById("video");
```

# Todo

- [ ] 타입 장착
- [ ] 번들러 정착
- [ ] 바벨 장착
- [ ] 접근성 장착
- [ ] react 확장
