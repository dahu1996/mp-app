const { storeBindingsBehavior } = require('mobx-miniprogram-bindings');
const store = require('../../store/index');

const typeMap = {
  r: 0,
  g: 1,
  b: 2
};
Component({
  behaviors: [ storeBindingsBehavior ],
  storeBindings: {
    store,
    fields: { // 自定绑定字段
      foo: () => store.foo,
      bar: (store) => store.bar,
      bar1: 'bar'
    },
    actions: {
      updateFoo: 'updateFoo'
    }
  },
  options: {
    styleIsolation: 'apply-shared',
    // 纯数据字段（以下划线开头的字段）
    pureDataPattern: /^_/
  },
  properties: {
    title: {
      type: String,
      value: "Card Title"
    }
  },
  data: {
    _rgb: [0, 0, 0],
    rgbStr: 'rgb(0, 0, 0)'
  },
  observers: {
    // "字段1, 字段2": function(字段1, 字段2) {}
    // "对象1.属性, 对象2.属性": function(字段1, 字段2) {}
    "_rgb[0], _rgb[1], _rgb[2]": function() {
      const { _rgb:rgb } = this.data;
      this.setData({ rgbStr: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})` });
      console.log(this.data);
    }
  },
  pageLifetimes: {
    show() {
      this.updateFoo('bbb');
    },
    hide() {},
    resize() {}
  },
  lifetimes: {
    created() {
      console.log(this.data);
      console.log('created');
    },
    attached() {
      console.log('attach');
    }
  },
  methods: {
    share() {},
    addColor(event) {
      const { _rgb: rgb } = this.data;
      const { type } = event.currentTarget.dataset;
      const idx = typeMap[type];
      rgb[idx] = rgb[idx] + 1;
      this.setData({ _rgb: rgb });
    }
  }
});
