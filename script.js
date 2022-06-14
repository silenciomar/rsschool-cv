console.log("Оценка - 130 баллов\nCV, задеплоенное на gh-pages +10\nвёрстка валидная +10\nвёрстка семантическая +20\nв footer есть ссылка на гитхаб автора работы, год создания приложения, логотип курса со ссылкой на курс +10\nдля оформления СV используются css-стили +10\nпри уменьшении масштаба страницы браузера вёрстка размещается по центру по горизонтали, а не сдвигается в сторону +10\nа странице СV есть фото или аватарка автора, пропорции изображения не искажены, у изображения есть атрибут alt +10\nнавигация, контакты для связи и перечень навыков оформлены в виде списка ul > li или ul > li > a +10\nСодержание CV +30\nCV выполнено на английском языке +10\n")


const contents = document.querySelectorAll('.q-line__content')

contents.forEach((elem) => {
    const title = elem.querySelector('.q-line__title')
    const descr = elem.querySelector('.q-line__descr')

    title.addEventListener('click', () => {
        descr.classList.toggle('active')
    })
})