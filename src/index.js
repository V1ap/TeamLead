const swiper = new Swiper('.swiper',{
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 100,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

const changeInput = e => {
    e.value = e.value.replace(/\D/g,'')
}

const timer = document.querySelector('.timer')
let time = 30 * 60
let intervalId = 0


document.addEventListener('DOMContentLoaded', () => {
    timer.textContent = `00:${Math.floor(time/60) > 9 ? Math.floor(time/60) : '0'+Math.floor(time/60)}:${time%60 > 9 ? time%60 : '0'+time%60}`
    intervalId = setInterval(function(){
        time--
        timer.textContent = `00:${Math.floor(time/60) > 9 ? Math.floor(time/60) : '0'+Math.floor(time/60)}:${time%60 > 9 ? time%60 : '0'+time%60}`
        if(time === 0)  clearInterval(intervalId) 
    }, 1000)

    document.querySelectorAll('.form__block').forEach(formBlock => {
        formBlock.querySelector('.form__input').addEventListener('focus', () => formBlock.querySelector('.form__example').style.display = 'inline-block')
        formBlock.querySelector('.form__input').addEventListener('focusout', () => formBlock.querySelector('.form__example').style.display = 'none')
    })
})