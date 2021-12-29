const wxp = wx.p;

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
    wxp.request({
      url: 'https://www.escook.cn/api/api/slides',
      method: 'GET',
    }).then(({data}) => {
      this.setData({ 'swiperList': data });
    });
  },
  getGridList() {
    // 使用promise化好的函数
    wxp.request({
      url: 'https://www.escook.cn/categories',
      method: 'GET',
      success: ({ data }) => {
        this.setData({ 'gridList': data });
      }
    })
  }
})