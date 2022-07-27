/* ANIMAÇÃO */

const icon = document.querySelectorAll('.bi-heart')
const post = document.querySelectorAll('.post')

icon.forEach(element => {
    element.addEventListener('click', () => {
        if(element.classList.contains('bi-heart')){
            element.classList.replace('bi-heart', 'bi-heart-fill')
        } else{
            element.classList.replace('bi-heart-fill', 'bi-heart')
        }
    });
});

numberPost = 0
post.forEach(element => {
    element.classList.add(`post${numberPost += 1}`)
})



const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    reset: true
  })


  scrollReveal.reveal(
    `.post
    `,
    { interval: 100 }
  )

  const backTop = document.querySelector('.backToTop');

function backToTop() {
    if(window.scrollY >= 500) {
        backTop.classList.add('show');
    } else {
        backTop.classList.remove('show');
    }
}

window.addEventListener('scroll', () => {
    backToTop();
});