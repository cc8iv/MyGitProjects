const questionCountText = document.querySelector('.question-counter');
const questionPoint = document.querySelector('.points');
const questionText = document.querySelector('.question-body');
const options = Array.from(document.querySelectorAll('[name="option"]'));
const input = Array.from(document.querySelectorAll('input'));
const next = document.querySelector('#next');
const quit = document.querySelector('#quit');

let availableQuesions = [];
let currentQuestion = {};
let questionCounter = 0;
let acceptingAnswers = false;
let score = 0;



questions = [
    {
        question: 'What is the right HTML root element?',
        choice1: '<html>',
        choice2: '<body>',
        choice3: '<head>',
        answer: 1
    },
    {
        question: 'What is the right Paragraph element?',
        choice1: '<div>',
        choice2: '<nav>',
        choice3: '<p>',
        answer: 3
    },
    {
        question: 'In internal css, the css rules should go in ..?',
        choice1: '<style>',
        choice2: '<link>',
        choice3: '<script>',
        answer: 1
    }
]

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];

    getNewQuestion();
    next.addEventListener('click', () => {
    getNewQuestion();
    })
    
};

getNewQuestion = () => {
    if(availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS)
    {
        return window.location.assign('/end.html');
    }
    questionCounter++;
    let questionIndex = Math.floor(Math.random() * availableQuesions.length);
    
    currentQuestion = availableQuesions[questionIndex];

    questionText.innerText = currentQuestion.question;

    options.forEach(option => {
        const number = option.dataset['number'];
        option.innerText = `${currentQuestion["choice" + number]}`;
    })

    questionCountText.textContent = `Question ${questionCounter}/${MAX_QUESTIONS}`;

    // questionIndex++;
    availableQuesions.splice(questionIndex, 1);
    console.log(availableQuesions);
    console.log(questionCounter);
    console.log(questionIndex);
}



startGame();
