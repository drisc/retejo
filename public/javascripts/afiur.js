'use strict'

function afiur () {
  const origin = Date.UTC(1994,10,3)
  const current = new Date().getTime()
  const trueDays = ((current - origin + 4.32e7) / 8.64e7).toFixed(0)

  const decimalStandard = (trueDays / 400).toFixed(4)

  return decimalStandard
}

function Afiur (a = afiur()) {

  this.a  = a.match(/([-0-9])\d+/g) ? a : '00-00-00'
  this.y  = parseInt(a.substr(0, 2))
  this.m  = parseInt(a.substr(3, 1)) + 1
  this.d  = parseInt(a.substr(4) / 25 + 1)
  this.td = a * 400

  this.date = function () {
    return `${this.y}-${`${this.m}`.padStart(2, '0')}-${`${this.d}`.padStart(2, '0')}`
  }

  this.days = function () {
    return `${this.td}`
  }
}
