let cardOverlay = document.querySelectorAll('.card')

cardOverlay.forEach(button => {
    button.addEventListener('click',() => {
        let modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click',() => {
        let modal = button.closest('.accModal')
        closeModal(modal)
    })
})

function openModal(modal){
    if(modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}