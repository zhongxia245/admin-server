module.exports = {
  formatResult(data: any) {
    return {
      status: 0,
      msg: 'ok',
      data,
    };
  },
};
