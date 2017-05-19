// pages/emptyRoom/emptyRoom.js
var util = require('../../utils/util')
Page({
  data: {
    rooms: '',
    week: 1
  },
  handleWeek1() {
    this.setData({
      week: 1,
      rooms: util.formatEmptyRoom(0)[0]
    })
  },
  handleWeek2() {
    this.setData({
      week: 2,
      rooms: util.formatEmptyRoom(1)[1]
    })
  },
  handleWeek3() {
    this.setData({
      week: 3,
      rooms: util.formatEmptyRoom(2)[2]
    })
  },
  handleWeek5() {
    this.setData({
      week: 5,
      rooms: util.formatEmptyRoom(4)[4]
    })
  },
  handleWeek4() {
    this.setData({
      week: 4,
      rooms: util.formatEmptyRoom(3)[3]
    })
  },
  onLoad: function (options) {
    var day = new Date()
    var week = day.getDay()
    if (week == 0 || week == 6) {
      this.setData({
        rooms: util.formatEmptyRoom(0)[0]
      })
    } else {
      this.setData({
        week,
        rooms: util.formatEmptyRoom(week-1)[week - 1]
      })
    }
  },
})