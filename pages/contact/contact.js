/**
 * 将Store绑定至页面中
 * 
 * 1. 引入相关依赖
 * 2. onLoad生命周期中 - 绑定相关依赖
 * 3. onUnload生命周期中 - 卸载相关依赖
 */

const { createStoreBindings } = require('mobx-miniprogram-bindings');

const store = require('../../store/index');

Page({
  onLoad() {
    this.storeBindings = createStoreBindings(this, {
      store,
      fields: ['foo', 'bar'],
      actions: ['updateFoo']
    });
  },
  onShow() {
    this.updateFoo('baz');
    console.log(this.data);
  },
  onUnload() {
    this.storeBindings.destroyStoreBindings();
  }
})