// pages/message/message.js
Page({
  data: {
    loading: false,
    colorList: [],
  },
  onLoad() {
    this.getColorList();
  },
  getColorList() {
    const { loading } = this.data;
    if (loading) return false;
    this.setData({ 'loading': true });
    wx.showLoading({ title: 'loading...' });
    wx.request({
      url: 'https://www.escook.cn/api/color',
      method: 'GET',
      success: ({ data: { data } }) => {
        this.setData({
          'colorList': [...this.data.colorList, ...data]
        });
      },
      complete: () => {
        wx.hideLoading();
        this.setData({'loading': false});
      }
    })
  },
  onReachBottom() {
    this.getColorList();
  }
})