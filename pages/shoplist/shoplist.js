Page({
  data: {
    id: 0,
    title: '',
    page: 1,
    pageSize: 10,
    total: 100000,
    shopList: []
  },
  onLoad(options) {
    options.title = decodeURIComponent(options.title);
    this.setData(options);
    this.getShopList();
  },
  onReady() {
    const { title } = this.data;
    wx.setNavigationBarTitle({ title });
  },
  getShopList() {
    const { id, page, pageSize, total, shopList } = this.data;
    if (shopList.length >= total) return false;
    wx.request({
      url: `https://www.escook.cn/categories/${id}/shops`,
      method: 'GET',
      data: {
        _page: page,
        _limit: pageSize
      },
      success:({data: resData, header: { 'X-Total-Count': total }}) => {
        this.setData({
          page: pageSize,
          total,
          shopList: [...shopList, ...resData]
        });
      }
    })
  }
})