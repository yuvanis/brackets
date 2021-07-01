module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0) {
    return false;
  }
  for (let i = 0; i < bracketsConfig.length; i++) {
    let bracket = bracketsConfig[i].join('');
    if (str.includes(bracket)) {
      str = str.replace(bracket, '');
      i = -1;
    }
  }
  if (str == '') {
    return true;
  } else {
    return false;
  }
}
