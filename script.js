const container = document.querySelectorAll('.container');

container.forEach(container => {
    const icon = container.querySelector('.icon');
    const answers = container.querySelector('.answers');

    container.addEventListener('click', ()=> {
        icon.classList.toggle('active');
        answers.classList.toggle('active');
    })
})
