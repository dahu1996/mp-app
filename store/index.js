// 创建store实例对象

const { observable, action } = require('mobx-miniprogram');

// 同action方法，修改store中的数据

const store = observable({
  tabbarList: [
    {
      name: 'home',
      text: '首页',
      pagePath: '/pages/home/home',
      iconPath: '../assets/home.png',
      selectedIconPath: '../assets/home-active.png',
    },
    {
      name: 'message',
      pagePath: '/pages/message/message',
      text: '消息',
      iconPath: '/assets/message.png',
      selectedIconPath: '/assets/message-active.png'
    },
    {
      name: 'contant',
      pagePath: '/pages/contact/contact',
      text: '联系我们',
      iconPath: '/assets/contact.png',
      selectedIconPath: '/assets/contact-active.png'
    }
  ],
  active: 0,
  updateActive: action(function(active) {
    this.active = active;
  })
});

module.exports = store;