// const btns = document.querySelectorAll('.question-btn');

// btns.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         // console.log(e.currentTarget.parentElement.parentElement);
//         const question = e.currentTarget.parentElement.parentElement.classList.toggle('show-text');
//     });
// });

const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    // console.log(question);
    const btn = question.querySelector('.question-btn');
    // console.log(btn);
    btn.addEventListener('click', () => {
        questions.forEach((item) => {
            // console.log(item)
            if(item !== question){
                item.classList.remove('show-text');
            }
        });
        question.classList.toggle('show-text');
    });
});