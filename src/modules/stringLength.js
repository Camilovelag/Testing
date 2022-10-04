function stringLength(string) {
  try {
    if (string.length < 1) {
      throw new Error('String is empty');
    }
    if (string.length > 10) {
      throw new Error('String is too long');
    }
  }
  catch (e) {
    return e.message;
  }

  return string.length;
};



module.exports = stringLength;