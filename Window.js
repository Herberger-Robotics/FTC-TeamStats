'use strict'

const {browserWindow} = require('electron')

const defaultProps = {
  width: 500,
  height: 800,
  show: false
}

class Window extends browserWindow {
  constructor ({file, ...windowSettings}){
    super({ ...defaultProps, ...windowSettings})

    this.loadFile(file)
    this.webContents.openDevTools()

    this.once('ready-to-show', () => {
      this.show()
    })
  }
}

module.exports = Window