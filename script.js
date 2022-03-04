const quizData = [
    {
        question: "What is Earth's largest continent?",
        a: "Asia",
        b: "Africa",
        c: "Europe",
        d: "Antarctica",
        correct: 'a'
    }, {
        question: "What's the smallest country in the world?",
        a: "San Marino",
        b: "Vatican",
        c: "Tuvalu",
        d: "Monaco",
        correct: "b"
    }, {
        question: "What's the city with the most diversity in terms of language?",
        a: "Tokyo",
        b: "Mexico City",
        c: "Shanghai",
        d: "New York",
        correct: "d"
    }, {
        question: "Havana is the capital of what country?",
        a: "Ecuador",
        b: "Chile",
        c: "Cuba",
        d: "Peru",
        correct: "c"
    }, {
        question: "What country has the most natural lakes?",
        a: "Canada",
        b: "USA",
        c: "Brazil",
        d: "Poland",
        correct: "a"
    }
]
// arrow with quiz data

const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const c_text = document.getElementById("c_text")
const b_text = document.getElementById("b_text")
const d_text = document.getElementById("d_text")
const button = document.getElementById("submit")


let currentQuiz = 0
let score = 0



function loadQuiz() {
    const currentQuizData = quizData[currentQuiz] //присваиваем переменной значение в виде объекта с индексом 0 и т.д

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    c_text.innerText = currentQuizData.c
    b_text.innerText = currentQuizData.b
    d_text.innerText = currentQuizData.d
}

loadQuiz()
//вызываем функцию, чтобы при первой загрузке стр сразу подгрузился первый вопрос



function getSelected() {
    let answer = undefined;
    const answerEls = document.querySelectorAll("answer")
    // Метод querySelectorAll() Document возвращает статический (не динамический) NodeList, 
    // содержащий все найденные элементы документа, которые соответствуют указанному селектору.

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}





button.addEventListener("click", () => {
    //check to see the answer
    // const answer = getSelected()

    // if (answer) {
        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            alert("You finished! Take a spoon of ice-cream")
        }
    // }
})

