const isString = str => typeof str === 'string';

export const isHiragana = (str = '') => {
  return isString(str) ? /^[ぁ-ん|ー]+$/.test(str) : false;
};

export const isKatakana = (str = '') => /^[ァ-ロワヲンー ｧ-ﾝﾞﾟ|^　|]*$/.test(str);

export const isEmail = str => {
  return isString(str) ?
      /^[a-zA-Z0-9!$&*.=^`|~#%'+\/?_{}-]+@([a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,4}$/.test(str) :
      false;
};

export const isMultiByte = str => {
  return /[^\x00-\x7E]+/g.test(str);
};

export const hasHalfWidthAlphaNumeric = str => str.match(/[^A-Za-z0-9]+/);
