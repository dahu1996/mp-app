const { storeBindingsBehavior } = require('mobx-miniprogram-bindings');
const store = require('../store/index');

const wxp = wx.p;

Component({
  options: {
    styleIsolation: 'shared'
  },
  behaviors: [ storeBindingsBehavior ],
  data: {},
  storeBindings: {
    store,
    fields: {
      tabbarList: 'tabbarList',
      active: 'active'
    },
    actions: {
      updateActive: 'updateActive'
    }
  },
  methods: {
    onChange(event) {
      const { tabbarList } = this.data;
      const { detail } = event;
      // this.setData({ active: detail });
      this.updateActive(detail);
      wxp.switchTab({ url: tabbarList[detail].pagePath });
    }
  }
})
