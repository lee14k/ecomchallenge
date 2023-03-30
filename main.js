import data from './productdata.json' assert {type:'json'}
const dataArr = data
const store = document.getElementById('store')
const button = document.getElementById('showproducts')
const productCard = document.createElement('div')
const total = document.getElementById('numbertot')
let sum = 0

dataArr.forEach(item => {
    let newDiv = document.createElement('div')
    let newDivImg = document.createElement('img')
     newDiv.innerText = `${item.title} ${item.price}`
     newDivImg.setAttribute ("src", `${item.image}`)
     newDiv.appendChild(newDivImg)
    store.appendChild(newDiv)
    newDiv.classList.add('flexy')
    newDivImg.classList.add('images')
    let newButton = document.createElement('button')
    newButton.innerText = `${item.price}`
    newButton.value = `${item.price}`
    newDiv.appendChild(newButton)
    newButton.addEventListener('click', addPrices)
   function addPrices () {
        console.log(newButton.value)
        sum+=parseFloat(newButton.value)
        console.log(sum)
        total.innerText=sum
    }
  
})

console.log(dataArr)

//do the math and then print to total 



