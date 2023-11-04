import utils from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})

// Objects
class Object {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
  }

  update() {
    this.draw()
  }
}

// Implementation
let objects
function init() {
  objects = []

  for (let i = 0; i < 400; i++) {
    // objects.push()
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)

 // green rectangle
 c.fillStyle = 'lightgreen';

  if (mouse.x + 100 >= canvas.width / 2 - 50 && 
    mouse.x <= 100 + canvas.width / 2 - 50 &&
    mouse.y + 100 >= canvas.height / 2 - 50 &&
    mouse.y <= canvas.height / 2 - 50 + 100
    ) {
    c.fillStyle = 'red'
  }
  
  c.fillRect(mouse.x, mouse.y, 100, 100);

  //blue rectangle
  c.fillStyle = 'lightblue';
  c.fillRect(canvas.width / 2 - 50, canvas.height / 2 - 50, 100, 100);

  // objects.forEach(object => {
  //  object.update()
  // })
}

init()
animate()
