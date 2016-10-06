var pageBar = new Vue({
  el: '#vuetable',
  data: {
    offSet: 0,
    all: 4, //总页数
    cur: 1, //当前页码
    column: [{
      name: 'name'
    }, {
      name: 'age'
    }, {
      name: 'height'
    }, {
      name: 'weight'
    }, {
      name: 'sex'
    }],
    users: [{
      name: '小王',
      age: '25',
      height: '170',
      weight: '70',
      sex: '男'
    }, {
      name: '小王',
      age: '25',
      height: '170',
      weight: '70',
      sex: '男'
    }, {
      name: '小王',
      age: '25',
      height: '170',
      weight: '70',
      sex: '男'
    }, {
      name: '小王',
      age: '25',
      height: '170',
      weight: '70',
      sex: '男'
    }, {
      name: '小王',
      age: '25',
      height: '170',
      weight: '70',
      sex: '男'
    }, {
      name: '小张',
      age: '21',
      height: '165',
      weight: '50',
      sex: '女'
    }, {
      name: '小张',
      age: '21',
      height: '165',
      weight: '50',
      sex: '女'
    }, {
      name: '小张',
      age: '21',
      height: '165',
      weight: '50',
      sex: '女'
    }, {
      name: '小张',
      age: '21',
      height: '165',
      weight: '50',
      sex: '女'
    }, {
      name: '小张',
      age: '21',
      height: '165',
      weight: '50',
      sex: '女'
    }, {
      name: '小周',
      age: '50',
      height: '176',
      weight: '80',
      sex: '男'
    }, {
      name: '小周',
      age: '50',
      height: '176',
      weight: '80',
      sex: '男'
    }, {
      name: '小周',
      age: '50',
      height: '176',
      weight: '80',
      sex: '男'
    }, {
      name: '小周',
      age: '50',
      height: '176',
      weight: '80',
      sex: '男'
    }, {
      name: '小周',
      age: '50',
      height: '176',
      weight: '80',
      sex: '男'
    }, {
      name: '小吴',
      age: '12',
      height: '70',
      weight: '25',
      sex: '女'
    }, {
      name: '小吴',
      age: '12',
      height: '70',
      weight: '25',
      sex: '女'
    }, {
      name: '小吴',
      age: '12',
      height: '70',
      weight: '25',
      sex: '女'
    }, {
      name: '小吴',
      age: '12',
      height: '70',
      weight: '25',
      sex: '女'
    }, {
      name: '小吴',
      age: '12',
      height: '70',
      weight: '25',
      sex: '女'
    }]
  },
  computed: {
    offSet: function() {
      return (this.cur - 1) * 5
    },
    indexs: function() {
      var left = 1
      var right = this.all
      var ar = []
      if (this.all >= 11) {
        if (this.cur > 5 && this.cur < this.all - 4) {
          left = this.cur - 5
          right = this.cur + 4
        } else {
          if (this.cur <= 5) {
            left = 1
            right = 10
          } else {
            right = this.all
            left = this.all - 9
          }
        }
      }
      while (left <= right) {
        ar.push(left)
        left++
      }
      return ar
    }
  },
  methods: {
    btnClick: function(data) { //页码点击事件
      if (data != this.cur) {
        this.cur = data
      }
    }
  }
});
/* title:vue-table
*  author: Vic
* date: 2016-10-06
*/
