const questions = document.querySelectorAll('.question');

questions.forEach(item => {
    item.addEventListener('click', () => {
        const isRight = item.classList.contains('right-question');

        if (isRight) {
            item.style.backgroundColor = "#90ee90";  
        } 
    })
})