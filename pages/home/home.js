Page({
  data: {
    value: 'foo',
    img: 'https://th.bing.com/th/id/R.c5091f0a67c7ff712fc81f9296468764?rik=bT%2fUeCjG1E06yg&riu=http%3a%2f%2fpic.616pic.com%2fys_bnew_img%2f00%2f17%2f66%2fTE2BbvrCFC.jpg&ehk=x%2bZaNC9Xfw0y9fRReIcoy18IWT92Q%2bhpuRHo8oEK4D4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
    count: 0,
    flag: false
  },
  clickMe(event) {
    this.setData({
      count: this.data.count + 1
    })
    console.log(event);
  },
  onInupt(event) {
    this.setData({
      count: event.detail.value
    });
  }
})