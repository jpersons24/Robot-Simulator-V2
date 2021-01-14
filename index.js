document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();


  document.addEventListener('keydown', function(event) {
    const movesUl = document.querySelector('#moves-container')
    // console.log(event.key)
    if (event.key === 'ArrowDown') {
      downLi = document.createElement('li')
      downLi.id = 'downBtn'
      downLi.innerText = 'down'
      movesUl.append(downLi)
    } else if (event.key === 'ArrowRight') {
      rightLi = document.createElement('li')
      rightLi.id = 'rightBtn'
      rightLi.innerText = 'right'
      movesUl.append(rightLi)
    } else if (event.key === 'ArrowUp') {
      upLi = document.createElement('li')
      upLi.id = 'upBtn'
      upLi.innerText = 'up'
      movesUl.append(upLi)
    } else if (event.key === 'ArrowLeft') {
      leftLi = document.createElement('li')
      leftLi.id = 'leftBtn'
      leftLi.innerText = 'left'
      movesUl.append(leftLi)
    }
  })
  
  const moveBtn = document.querySelector('#move-button')
  const movesUl = document.querySelector('#moves-container')
  
  moveBtn.addEventListener('click', function() {
    // let firstLi = movesUl.querySelector('li')
    // move(firstLi.innerText)
    // firstLi.remove()
    autoMoveRobot()
  })

  function autoMoveRobot () {
    let moveTime = setInterval(addRobot, 500);
    
    function addRobot() {
      if (movesUl.children.length === 0) {
        clearInterval(moveTime)
      } else {
        let firstLi = movesUl.querySelector('li')
        move(firstLi.innerText)
        firstLi.remove()
      }
    }
  }

  movesUl.addEventListener('click', function(event) {
    if (event.target.matches('#downBtn')) {
      event.target.remove()
    } else if (event.target.matches('#rightBtn')) {
      event.target.remove()
    } else if (event.target.matches('#upBtn')) {
      event.target.remove()
    } else if (event.target.matches('#leftBtn')) {
      event.target.remove()
    }
  })


});



