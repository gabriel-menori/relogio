const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')


const calcularRelogio = () => {
    let dataAtual = new Date()

    let hr = dataAtual.getHours()
    let min = dataAtual.getMinutes()
    let seg = dataAtual.getSeconds()

    horas.textContent = (hr >= 10) ? hr : '0' + hr
    minutos.textContent = (min >= 10) ? min : '0' + min
    segundos.textContent = (seg >= 10) ? seg : '0'+ seg
}

calcularRelogio()

setInterval(calcularRelogio, 125)
