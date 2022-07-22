window.onload = (e) => {
  const screen = document.querySelector('.screen')

  document.querySelector('button.up').onclick = handleInput(screen, 'up')
  document.querySelector('button.down').onclick = handleInput(screen, 'down')
  document.querySelector('button.left').onclick = handleInput(screen, 'left')
  document.querySelector('button.right').onclick = handleInput(screen, 'right')
  document.querySelector('button.a').onclick = handleInput(screen, 'a')
  document.querySelector('button.b').onclick = handleInput(screen, 'b')
}

function handleInput(system, button) {
  return (e) => {
    switch (button) {
      default:
        return null
      case 'up':
      case 'down':
      case 'left':
      case 'right':
      case 'a':
      case 'b':
        return console.log(`Pressed ${button.toUpperCase()} button`)
    }
  }
}
