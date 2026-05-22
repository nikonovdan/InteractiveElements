'use strict'
const accordeonQuestions = document.querySelectorAll('.acordeon-question');

for(let accordeonQuestion of accordeonQuestions) {
    accordeonQuestion.addEventListener("click", function () {
    const clickedAnswer = accordeonQuestion.parentElement.querySelector(".acordeon-answer");

    accordeonQuestion.classList.toggle('accordion-question-active');
    clickedAnswer.classList.toggle('accordion-answer-visble');

    if(clickedAnswer.classList.contains('accordion-answer-visble')) {
        clickedAnswer.style.maxHeight = clickedAnswer.scrollHeight + "px";
    }
    else {
        clickedAnswer.style.maxHeight = null;
    }
});
}
