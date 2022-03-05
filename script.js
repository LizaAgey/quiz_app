const quizData = [{
    question: "1. What is Earth's largest continent?",
    a: "Asia",
    b: "Africa",
    c: "Europe",
    d: "Antarctica",
    correct: "a"
}, {
    question: "2. What's the smallest country in the world?",
    a: "San Marino",
    b: "Vatican",
    c: "Tuvalu",
    d: "Monaco",
    correct: "b"
}, {
    question: "3. What's the city with the most diversity in terms of language?",
    a: "Tokyo",
    b: "Mexico City",
    c: "Shanghai",
    d: "New York",
    correct: "d"
}, {
    question: "4. Havana is the capital of what country?",
    a: "Ecuador",
    b: "Chile",
    c: "Cuba",
    d: "Peru",
    correct: "c"
}, {
    question: "5. What country has the most natural lakes?",
    a: "Canada",
    b: "USA",
    c: "Brazil",
    d: "Poland",
    correct: "a"
}]

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const c_text = document.getElementById("c_text")
const b_text = document.getElementById("b_text")
const d_text = document.getElementById("d_text")
const button = document.getElementById("submit")
//находим нужные нам элементы в HTML

let currentQuiz = 0

let currentQuizData;
function loadQuiz() {
    //функция для помещения в элементы HTML данных квиза
    currentQuizData = quizData[currentQuiz] //присваиваем переменной значение в виде объекта с индексом 0 и т.д

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    c_text.innerText = currentQuizData.c
    b_text.innerText = currentQuizData.b
    d_text.innerText = currentQuizData.d 
}

loadQuiz()
//вызываем функцию, чтобы при первой загрузке стр сразу подгрузился первый вопрос
let correctAnswersQty = 0

const btn = document.querySelector('#submit');
const radioButtons = document.querySelectorAll('input[name="answer"]'); //возвращает статический (не динамический) NodeList, содержащий все найденные элементы документа, которые соответствуют указанному селектору.
btn.addEventListener("click", () => {
    for (const radioButton of radioButtons) {

        if (radioButton.checked) {
            if (radioButton.id == currentQuizData.correct) {
                ++correctAnswersQty

            }

            radioButton.checked = false
            currentQuiz++
            console.log(currentQuiz)
            if (currentQuiz == quizData.length) {
                quiz.innerHTML = `
            <h2>You answered correctly at ${correctAnswersQty} of ${quizData.length} questions.</h2>
            <p>It's time to have a rest!</p>
            
            <button onclick="location.reload()">One more time</button>`

                return
            }
            loadQuiz()

            return
        }

    }
    // show the output:
    alert(`You haven't selected any answer`)

});
















































// function getSelected() {
 //функция берет все эдементы с вариантами ответа, перебирает их: если он зачекан, то возвращает его
//     let answer = undefined;
//     const answerEls = document.querySelectorAll("answer")
 // Метод querySelectorAll() Document возвращает статический (не динамический) NodeList, содержащий все найденные элементы документа, которые соответствуют указанному селектору.

//     answerEls.forEach((answerEl) => {
//         if (answerEl.checked) {
//             answer = answerEl.id
//         }
//     })
//     console.log(answer)
//     return answer
// }


// button.addEventListener("click", () => {
//check to see the answer
//     let answer = getSelected()
//     console.log(answer)
//     if (answer) {
//         currentQuiz++
//         if (currentQuiz < quizData.length) {
//             loadQuiz()
//         } else {
//             alert("You finished! Take a spoon of ice-cream")
//         }
//     } else {
//         alert('Choose any variant')
//     }
// })




