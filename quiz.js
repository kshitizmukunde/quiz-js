const form = document.querySelector('.quiz-form');
const correctAnswer = ['script', 'At the end of body section', 'Object-Based', 'alert("Hello World")', '=']
const result = document.querySelector('.result');
const questions = document.querySelectorAll('.question');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let score = 0;
    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
    userAnswer.forEach((answer, index) => {
        if(answer === correctAnswer[index]) {
            score += 1;
            questions[index].classList.add('correct');
        } else {
            questions[index].classList.add('wrong');
        }
    })

    result.classList.remove("hide");
    result.querySelector('p').textContent = `You Scored ${score}/${correctAnswer.length} !!!! Hurray!!`;
    scrollTo(0, 0)
})


// 