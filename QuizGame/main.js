function initializeQuiz() {
    let quizContainer = document.getElementById('quiz-container');
    let result = document.getElementById('result');
    quizContainer.innerHTML = '';
    let btn = document.getElementById('submit-quiz');
    btn.addEventListener('click', displayResult);
    displayQuestions()

}

function displayQuestions() {
    let questions = [
        "What is the capital of France?",
        "Which language is used for Front-end Web development?",
        "What does CSS stand for?"
    ];

    let options = [
        ["Berlin", "Madrid", "Paris", "Lisbon"],
        ["Python", "JavaScript", "C++", "Java"],
        ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheets", "Colorful Style Sheets"]
    ];
    let quizContainer = document.getElementById('quiz-container');
    for (let i = 0; i < questions.length; i++) {
        let questionHTML = `
    <div class="question">
        <h2>${questions[i]}</h2>
        <ul>`
        for (let j = 0; j < options[i].length; j++) {
            questionHTML += `<li>
            <label> 
            <input type = 'radio' name='question${i}' value='${options[i][j]} '>
               ${options[i][j]}
                </label> 
                    </li>
            `;
        }
        questionHTML += `
        </ul>
    </div>
`;

        quizContainer.innerHTML += questionHTML;
    }
}
function displayResult() {
    let questions = [
        "What is the capital of France?",
        "Which language is used for Front-end Web development?",
        "What does CSS stand for?"
    ];
    let answers = [
        "Paris",
        "JavaScript",
        "Cascading Style Sheets"
    ];
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        let selectedOption = document.querySelector(`input[name="question${i}"]:checked`);

        result.innerHTML = `Your score is ${score} out of ${questions.length}.`
        if (selectedOption && selectedOption.value.trim() === answers[i]) {
            score++;
        }
        result.innerHTML = `Your score is ${score} out of ${questions.length}.`
    }
}
initializeQuiz()