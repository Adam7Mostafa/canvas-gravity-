let canvas = document.querySelector("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let c = canvas.getContext("2d")
let ax = window.innerWidth
let ay = window.innerHeight
let gravity = 1
let fri = 0.99
let colors = [
  '#fb2f0ae5',
  '#0ea6e4d3',
  '#C7CCD9',
  '#0CF25D',
  '#91F2E9',
  '#D96941',
]
document.addEventListener('resize', function () {
  c.width = window.innerWidth
  c.height = window.innerHeight
   more()
})
function intnum(max, min) {
  Math.floor(Math.random()* (max-min+2)+min)
}
class Ball {
  constructor(x, y, r, dx, dy) {
    this.x = x
    this.y = y
    this.r = r
    this.dx = dx
    this.dy = dy
    this.color = colors[Math.floor(Math.random() *colors.length)]
  }
  drawball() {
    c.beginPath()
    c.arc(this.x, this.y, this.r, 0, Math.PI*2)
    c.fillStyle = this.color
    c.fill()
    c.stroke()
  }
  update() {
    if (this.x+this.r > ax || this.x-this.r < 0) {
      this.dx=-this.dx
    }
    if (this.y+this.r+this.dy > canvas.height || this.y-this.r < 0) {
      this.dy=-this.dy*fri
    } else {
      this.dy += gravity
    }
    this.y += this.dy
    this.x += this.dx
    this.drawball()
  }
}
//let circle = new Ball(200, 200, 20)
let xp;
let yp;
let random;
let dx;
let dy;
let arr = [];
function more() {
  for (i = 0; i < 1000; i++) {
    xp = Math.random() * ax
    if (xp < 30) {
      xp += 40
    }
    if (xp < canvas.width) {
      xp -= 20
    }
    yp = Math.random() * ay
    if (yp < canvas.height) {
      yp -= 20
    }
    if (yp < 40) {
      yp += 50
    }
    dx = Math.random() *2
    dy = Math.random() *2
    random = Math.random() *26
    cir = new Ball(xp, yp, random, dy, dx)
    arr.push(cir)
    yp++
  }
}
more()
function myball() {
  requestAnimationFrame(myball)
  c.clearRect(0, 0, ax, ay)
  for (i = 0; i < 100; i++) {
    arr[i].update()
  }
}
myball()
