// components/Search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    key:'',
    lidata: []
  },

  /**
   * 组件的方法列表
   */

  methods: {
    changevalue :function(e){
      this.setData({
        key:e.detail.value
      })
    },
    search: function (){
      var _this =this
      wx.request({
        url: 'https://www.easy-mock.com/mock/5d4a3449ec75c44faeef1eec/near',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          _this.setData({
            lidata:res.data
          })
        }
      })
    }
  }
})
