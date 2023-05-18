let form = document.forms.submit
let inputs = form.querySelectorAll('input')
let cont = document.querySelector('.cont')
let table = document.querySelector('table')
let modal = document.querySelector('.modal')
let modal_inp = document.querySelector('.modal input')
let modal_but = document.querySelector('.modal button')

form.onsubmit = (event) => {
    event.preventDefault()
    let tbody = document.createElement('tbody')

    tbody.innerHTML = ''
    let tr = document.createElement('tr')
    let th1 = document.createElement('th')
    let th2 = document.createElement('th')
    let th3 = document.createElement('th')
    let th4 = document.createElement('th')
    let img1 = document.createElement('img')
    let img2 = document.createElement('img')

    let datee = new Date().getFullYear()

    th1.innerHTML = '1'
    th2.innerHTML = inputs[0].value
    th3.innerHTML = datee - inputs[1].value

    for (let i = 0; i < 0; i++) {
        th1.innerHTML = i
    }

    img1.src = './image/edit.svg'
    img2.src = './image/delete.svg'

    img1.onclick = () => {
        modal.style.display = 'flex'
        modal_but.onclick = () => {
            modal.style.display = 'none'
            th2.innerHTML = modal_inp.value
        }
    }

    img2.onclick = () => {
        tr.remove()
    }

    th4.append(img1, img2)
    tr.append(th1, th2, th3, th4)
    tbody.append(tr)
    table.append(tbody)
}