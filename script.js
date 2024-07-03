const dateCont = document.querySelector('.date-cont')
const timeCont = document.querySelector('.time-cont')

function initialize () {
    const date = new Date()
    const timeVal = date.toLocaleTimeString()
    const dateVal = date.toLocaleDateString()
    timeCont.textContent = timeVal
    dateCont.textContent = dateVal
}

setInterval(initialize, 1000)
