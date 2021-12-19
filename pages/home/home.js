Page({
  data: {
    swiperList: [],
    gridList: [],
  },
  onLoad() {
    this.getSwiperList();
    this.getGridList();
  },
  getSwiperList() {
    wx.request({
      url: 'https://www.escook.cn/api/api/slides',
      method: 'GET',
      success: ({ data }) => {
        this.setData({ 'swiperList': data });
      }
    })
  },
  getGridList() {
    wx.request({
      url: 'https://www.escook.cn/categories',
      method: 'GET',
      success: ({ data }) => {
        this.setData({ 'gridList': data });
      }
    })
  }
})