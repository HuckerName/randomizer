const min_num = 1
const max_num = 100

function random(min, max) {
  return (
    Math.floor(Math.random() * ((max > min ? max - min : min - max) + 1)) +
    Math.min(min, max)
  )
}

const interval = setInterval(() => console.log(random(min_num, max_num)), 500)
setTimeout(() => clearInterval(interval), 5000)
