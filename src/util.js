export default () => {
  return {
    upper: (string = '') => {
      let result = '';
      if ( typeof string === 'string' ) {
        result = string.toUpperCase();
      }
      return result;
    }
  }
}
