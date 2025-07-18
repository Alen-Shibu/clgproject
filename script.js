const about = document.querySelector(".about-section")
const aboutbtn = document.querySelector("#about")

const product = document.querySelector(".product-section")
const productbtn = document.querySelector("#products")

const support = document.querySelector(".support-section")
const supportbtn = document.querySelector("#support")

aboutbtn.addEventListener('click',()=>{
    about.scrollIntoView({behavior:"smooth"})
})

productbtn.addEventListener('click',()=>{
    product.scrollIntoView({behavior:"smooth"})
})

supportbtn.addEventListener('click',()=>{
    support.scrollIntoView({behavior:"smooth"})
})