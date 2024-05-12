function loadOptions(options, correctAnswer, dom){
    let randomNumber = Math.floor(Math.random() * 4); //here we get random number between 0 and 3
    options.splice(randomNumber, 0, correctAnswer); //Here we push the correct answer to a random position

    dom.firstLabel.innerHTML = options[0];
    dom.secondLabel.innerHTML = options[1];
    dom.thirdLabel.innerHTML = options[2];
    dom.fourthLabel.innerHTML = options[3];
}

function loadQuestion(currentQuestionIndex, dom){
    let currentQuestion = questions[currentQuestionIndex];
    dom.questionNumber.innerHTML = currentQuestionIndex + 1;
    dom.totalQuestions.innerHTML = questions.length;
    dom.title.innerHTML = currentQuestion.question;
    let answerOptions = currentQuestion.incorrect_answers;
    loadOptions(answerOptions, currentQuestion.correct_answer, dom);
}

function generateApiUrl(){
    const queryParams = new URLSearchParams(window.location.search);
    let amount = queryParams.get('amount');
    let category = queryParams.get('category') ;
    let difficulty = queryParams.get('difficulty');

    let url = `https://opentdb.com/api.php?type=multiple&amount=${amount}`;
    if (category != "any"){
        url += `&category=${category}`;
    }
    if (difficulty != "any"){
        url += `&difficulty=${difficulty}`;
    }

    return url;
}
const questions = [];
async function getQuestionsInitially(currentQuestionIndex, dom) {
    let apiUrl = generateApiUrl();

    const response = await fetch(apiUrl);
    if (response.ok){
        const questionsJson = await response.json();
        questions.push(...questionsJson.results);
        loadQuestion(currentQuestionIndex, dom);
    }
}

document.addEventListener('DOMContentLoaded', () =>{
    const dom = {
        questionNumber: document.querySelector('#question-number'),
        totalQuestions: document.querySelector('#total-questions'),

        title: document.querySelector('.question-title'),
        nextBtn: document.querySelector('.next-button'),
        optionsForm: document.querySelector('#options-form'),
        
        firstLabel: document.querySelector('#label-option1'),
        secondLabel: document.querySelector('#label-option2'),
        thirdLabel: document.querySelector('#label-option3'),
        fourthLabel: document.querySelector('#label-option4')
    }
    
    dom.optionsForm.addEventListener('change', function(event){//only one answer could be chosen
        const selectedRadioButton = event.target;
        dom.optionsForm.querySelectorAll('input[type=radio]').forEach(radioBtn=>{
            if (radioBtn != selectedRadioButton){
                radioBtn.checked = false;
            }
        })
    })
    
    function nextButtonClick(){
        const selectedOption = document.querySelector('input:checked');
        if (selectedOption){

            if(currentQuestionIndex < questions.length - 1){
                currentQuestionIndex++;
                loadQuestion(currentQuestionIndex, dom);
                dom.optionsForm.reset();
            }
            else{
                alert('This was the last question.');
            }
        }
        else{
            alert('Please select an answer first!')
        }
    }
    getQuestionsInitially(currentQuestionIndex, dom);
    dom.nextBtn.addEventListener('click', nextButtonClick);
},currentQuestionIndex=0);