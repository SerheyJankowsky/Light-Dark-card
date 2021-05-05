window.addEventListener('load',()=>{
    const sec = document.querySelector('.sec')
    const toogle = document.querySelector('.card__switch')
    toogle.addEventListener('click',()=>{
        sec.classList.toggle('dark')
    })
})