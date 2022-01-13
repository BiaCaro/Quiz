window.alert('Olá, Bem vindo ao meu Quiz!')
var nome = window.prompt('Qual o seu nome?')
window.confirm(`${nome}, esteja preparado(a) pois o quiz engloba perguntas de Javascript!!`)
var peg = window.prompt('Está pronto?')
if (peg.toUpperCase() !== 'SIM') {
  window.alert('Volte depois de estudar um pouco mais!')
  location.reload()
} else { window.alert('Então vamos lá') }


const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Fazemos os estilos uma página pelo:',
    answers: [
      { text: 'JavaScript', correct: false },
      { text: 'CSS', correct: true }
    ]
  },
  {
    question: 'Podemos abrir o prompt de comando pelo',
    answers: [
      { text: 'CMD', correct: true },
      { text: 'DIR', correct: false },
    ]
  },
  {
    question: 'Outbound Packing SP é o melhor time?',
    answers: [
      { text: 'SIMM!!', correct: true },
      { text: 'Com certeza!!', correct: true }
    ]
  },
  {
    question: 'O React JS é mais usado para:',
    answers: [
      { text: 'Front End', correct: true },
      { text: 'Back End', correct: false },
      { text: 'NADA', correct: false },
      { text: 'Python', correct: false },
    ]
  },
  {
    question: 'É considerado boas práticas no Javascript usar:',
    answers: [
      { text: 'var', correct: false },
      { text: 'const', correct: true },
      { text: 'let', correct: true },
      { text: 'Depende do caso', correct: true },
    ]
  },
  {
    question: 'O sinal de conjunção é:',
    answers: [
      { text: '!', correct: false },
      { text: '=+', correct: false },
      { text: '&&', correct: true },
      { text: '||', correct: false },
    ]
  },
  {
    question: 'O operador ternário pode ser definido como:',
    answers: [
      { text: 'If (condição) {} else {}', correct: false },
      { text: 'Teste? True : False', correct: true },
      { text: 'Switch (expressão) { case valores: ... }', correct: false },
    ]
  },
  {
    question: 'O sinal de (%) significa divisão na linguagem Javascript.',
    answers: [
      { text: 'Verdadeiro', correct: false },
      { text: 'Falso', correct: true },
    ]
  },
  {
    question: 'É obrigatório finalizar linhas com (;) no:',
    answers: [
      { text: 'Javacript', correct: false },
      { text: 'HTML', correct: false },
      { text: 'CSS', correct: true },
      { text: 'Nenhum', correct: false },
    ]
  }
]

