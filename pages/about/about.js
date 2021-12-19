Page({
  onRequest() {
    wx.cloud.callFunction({
      name: 'hello'
    })
    .then(console.log)
    .catch(console.error)
  }
});