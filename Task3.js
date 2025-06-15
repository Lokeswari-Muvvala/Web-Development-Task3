// quiz
const questions = [
    {
        question:"Which country has the most pyramids in the world?",
        answers:[
            {text:" Egypt",correct:"false"},
            {text:"  Mexico",correct:"false"},
            {text:" Sudan",correct:"true"},
            {text:"Peru",correct:"false"},
        ]
    },

    {
        question:"Which animal is known to have the strongest bite force?",
        answers:[
            {text:" Lion",correct:"false"},
            {text:" Crocodile",correct:"true"},
            {text:" Shark",correct:"false"},
            {text:"Hyena",correct:"false"},
        ]
    },
     {
        question:"Which country is made up of more than 17,000 islands?",
        answers:[
            {text:" Indonesia",correct:"true"},
            {text:"Japan",correct:"false"},
            {text:" Philippines",correct:"false"},
            {text:"Maldives",correct:"false"},
        ]
    },
     {
        question:"What’s the only food that doesn’t spoil?",
        answers:[
            {text:"  Salt",correct:"false"},
            {text:" Honey",correct:"true"},
            {text:"Vinegar",correct:"false"},
            {text:" Sugar",correct:"false"},
        ]
    },
   
     {
        question:"Who was the first person to reach the South Pole?",
        answers:[
            {text:"Robert Scott",correct:"false"},
            {text:"Roald Amundsen",correct:"true"},
            {text:"Ernest Shackleton",correct:"false"},
            {text:" Edmund Hillary",correct:"false"},
        ]
    },
];

const questionElement = document.getElementById("question");
const optionbtn = document.getElementById("options");
const next = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz()
{
    currentQuestionIndex = 0;
    score = 0;
    next.innerHTML = "next";
    showQuestion();
}
function  showQuestion()
{
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." +currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        optionbtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    } );
}


function resetState(){
    next.style.display = "none";
    while(optionbtn.firstChild){
        optionbtn.removeChild(optionbtn.firstChild);
    }
}

function selectAnswer(e)
{
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect)
    {
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(optionbtn.children).forEach(button =>
    {
        if(button.dataset.correct === "true")
        {
            button.classList.add("correct");
        }
        button.disabled = true;
    }
    );
    next.style.display = "block"; 
}
    function showScore()
    {
        resetState();
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
        next.innerHTML = "play Again";
        next.style.display = "block";
    }

    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length)
        {
            showQuestion();
        }
        else{
            showScore();
        }
    }
next.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length)
    {
        handleNextButton();
    }
    else{
        startQuiz();
    }
       
});

startQuiz();

//joke generator
document.getElementById('button').addEventListener('click',joke)

async function joke() {
    let config = {
        headers:{
            Accept:"application/json",
        },
    };

    let a = await fetch("https://icanhazdadjoke.com/",config);
    let b = await a.json()
    document.getElementById('joke').innerHTML = b.joke;
}