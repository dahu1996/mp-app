// 创建store实例对象

const { observable, action } = require('mobx-miniprogram');

// 同action方法，修改store中的数据

const store = observable({
  foo: 'bar',
  get bar() {
    // 计算属性
    return this.foo;
  },
  updateFoo: action(function(arg) {
    this.foo = arg;
  })
});

module.exports = store;