let flag = false;

const initFlag = {
  isInit: () => flag,
  initTrue: () => {
    flag = true;
  },
  initFalse: () => {
    flag = false;
  },
};

export default initFlag;
