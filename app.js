const { promisifyAll } = require('miniprogram-api-promise');

wx.cloud.init();

// 将promise化的api挂载到wx.p对象上
const wxp = wx.p = {};
promisifyAll(wx, wxp);

App({});
