const quizDB = [
    {
        question: "Javascript is an _______ language?",
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Procedural",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        a: "var",
        b: "let",
        c: "Both A and B",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        a: "getElementbyid()",
        b: "getElementByClassName()",
        c: "Both A and B",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question: "4. Upon encountering empty statements, what does the Javascript Interpreter do?",
        a: "Throws an error",
        b: "Ignores the statements",
        c: "Giving a Warning",
        d: "None of the above",
        ans: "ans2"
    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        a: "document.write()",
        b: "console.log()",
        c: "window.alert()",
        d: "All of the above",
        ans: "ans4"
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        a: "const",
        b: "var",
        c: "let",
        d: "constant",
        ans: "ans1"
    },
    {
        question: "What keyword is used to check whether a given property is valid or not?",
        a: "in",
        b: "is in",
        c: "exists",
        d: "lies",
        ans: "ans1"
    },
    {
        question: "What is the use of the <noscript> tag in Javascript?",
        a: "The content are displayed by non-JS-based browsers",
        b: "Clears all the cookies and cache",
        c: "Both A and B",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
        a: "Boolean",
        b: "Undefined",
        c: "Object",
        d: "Integer",
        ans: "ans3"
    },
    {
        question: "Which of the following are closures in Javascript?",
        a: "Variables",
        b: "Functions",
        c: "Objects",
        d: "All of the above",
        ans: "ans4"
    },
]


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}


loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};


const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    };
    questionCount++;

    deselectAll();

    if (questionCount < quizDB.length) {
        loadQuestion();
    }
    else {
        showScore.innerHTML = `
        <h3> You Scored ${score}/${quizDB.length} 🏆 </h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;

        showScore.classList.remove('scoreArea');
    }
});














