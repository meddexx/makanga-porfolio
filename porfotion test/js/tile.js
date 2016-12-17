const COUNT = 30
const TRANSITION_SPEED = 1500

function repeat(fn) {
  const results = []
  for(let i=0; i < COUNT; i++) {
    results.push(fn(i))
  }
  return results
}

function addStyleSheet (text) {
  const style = document.createElement('style')
  style.innerHTML = text
  document.body.appendChild(style)
}

function createDomNodes() {
  const container = document.createElement('div')
  container.className = 'loading'
  document.body.appendChild(container)

  repeat(() => {
    const div = document.createElement('div')
    container.appendChild(div)
  })
  return container
}

function createStyle () {
  addStyleSheet(`
    .loading {
      display: flex;
      justify-content: center;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      align-items: center;
      background-color: hsl(7, 51%, 51%);
      transition: opacity ${TRANSITION_SPEED}ms;
      opacity: 1;
      z-index: 1000;
    }
    .loading.loaded {
      opacity: 0;
      pointer-events: none;
    }

    .loading div {
      width: ${75 / COUNT}%;
      height: 100px;
      margin: 0 3px;
      animation-duration: 1s;
      animation-name: slidein;
      animation-iteration-count: infinite;
      background-color: hsl(300, 50%, 100%);
      opacity: 0;
    }

    ${repeat(i => `
      .loading div:nth-child(${i + 1}) {
          animation-delay: ${i * 0.1 - 0.1 * COUNT}s;
        filter: hue-rotate(${i * 6}deg);
        width: ${Math.sin(Math.PI * i / COUNT) * 75 / COUNT}%;
      }
    `).join("\n")}

    @keyframes slidein {
      0% {
        opacity: 0;
        transform: scaleY(1);
        animation-timing-function: ease-in-out;
      }

      20% {
        opacity: 1;
        transform: scaleY(0.5) rotate(10deg);
        animation-timing-function: cubic-bezier(0.4, 0, 0, 1);
      }

      100% {
        opacity: 0;
        transform: scaleY(1);
        animation-timing-function: ease-in-out;
      }
    }
  `)
}

;(function createLoader() {
  const container = createDomNodes()
  createStyle()

  window.globalHideLoader = () => {
    container.className += " loaded"
    setTimeout(() => container.remove(), TRANSITION_SPEED)
  }
})()
