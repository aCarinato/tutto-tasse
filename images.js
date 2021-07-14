// const modal = document.getElementById('visura-modal')

// // get the image and insert it inside the modal - use its 'alt' text as a caption
// const img = document.getElementById('myimg')
// const modalImg = document.getElementById('modal01')
// const captionText = document.getElementById('modal-caption')

// img.onclick = function() {
//     modal.style.display = 'block'
//     modalImg.src = this.src
//     captionText.innerHTML = this.alt
// }

// // get the <span> element that closes the modal
// const span = document.getElementsByClassName('close')[0]

// span.onclick = function() {
//     modal.style.display = 'none'
// }



const modals = document.querySelectorAll('.modal')

const imgs = document.querySelectorAll('.image')
const modalImgs = document.querySelectorAll('.modal-content')
// const captionsText = document.querySelectorAll('.modal-caption')

const spans = document.querySelectorAll('.close')

imgs.forEach((img, index) => {
    img.addEventListener('click', e => {
        modals[index].style.display = 'block'
        modalImgs[index].src = img.src
    })
})

spans.forEach((span, index) => {
    span.addEventListener('click', e => {
        modals[index].style.display = 'none'
    })
})