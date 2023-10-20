const input = document.querySelector('input')
const btn = document.querySelector('button')
const li = document.querySelector('li')

btn.addEventListener('click' ,()=>{
    const list = document.createElement('li')
    list.innerText = input.value
    const ul = document.querySelector('ul')
    const button = document.createElement('button')
    button.innerText = 'Delete'
    list.append(button)

    button.addEventListener('click', (e)=>{
        const parent = e.target.parentElement
        ul.removeChild(parent)
    })

    ul.append(list)
})
// console.table([input , btn]);