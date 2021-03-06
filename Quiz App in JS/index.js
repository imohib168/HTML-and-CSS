let quizQuestions = [
    {
        id: 1,
        question: "What is 2 + 2",
        answer: "2",
        options: [
            "5",
            "4",
            "22",
            "3"
        ]
    },
    {
        id: 2,
        question: "What is 3 * 3",
        answer: "1",
        options: [
            "9",
            "6",
            "33",
            "27"
        ]
    },
    {
        id: 3,
        question: "Who is the founder of Pakistan",
        answer: "1",
        options: [
            "Muhammad Ali Jinnah",
            "Allama Iqbal",
            "Chaudhry Brothers",
            "None of above"
        ]
    }
];

const question = document.getElementById("question");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");

let score = 0;
let questionCount = 0;

function showQuestion(count) {
    question.innerHTML = quizQuestions[count].question;
    option1.innerHTML = quizQuestions[count].options[0];
    option2.innerHTML = quizQuestions[count].options[1];
    option3.innerHTML = quizQuestions[count].options[2];
    option4.innerHTML = quizQuestions[count].options[3];
}

showQuestion(questionCount);

function againStartQuiz() {
    questionCount = 0;
    location.reload(showQuestion(questionCount));
}

function nextQuestion() {

    const userSelectedAnswer = document.querySelector('input[type=radio]:checked');
    // if (!userSelectedAnswer) {
    //     alert("Please Select Answer");
    //     return;
    // }

    var answer = userSelectedAnswer.value;

    if (quizQuestions[questionCount].answer == answer) {
        console.log("Answer Matched");
        score++;
    }

    userSelectedAnswer.checked = false;

    questionCount++;

    if (questionCount < quizQuestions.length)
        showQuestion(questionCount);
    else {
        document.getElementById('score').innerHTML = `
        ${score}
        <button onClick="againStartQuiz()">Start Again</button>
        `;
    }
}