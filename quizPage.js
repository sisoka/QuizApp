//document.addEventListener('DOMContentLoaded', function(){
    const questions = JSON.parse(localStorage.getItem('questions')); //Here we get the questions from the local storage
    const totalQuestions = questions.length;
    let currentQuestionIndex = 0;

    
    const dom = {
        questionNumber: document.querySelector('#question-number'),
        
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

    function loadOptions(options, correctAnswer){
        let randomNumber = Math.floor(Math.random() * 4); //here we get random number between 0 and 3
        options.splice(randomNumber, 0, correctAnswer); //Here we push the correct answer to a random position

        dom.firstLabel.innerHTML = options[0];
        dom.secondLabel.innerHTML = options[1];
        dom.thirdLabel.innerHTML = options[2];
        dom.fourthLabel.innerHTML = options[3];
    }

    function loadQuestion(){
        let currentQuestion = questions[currentQuestionIndex];
        dom.questionNumber.innerHTML = currentQuestionIndex + 1;
        dom.title.innerHTML = currentQuestion.question;
        let answerOptions = currentQuestion.incorrect_answers;
        loadOptions(answerOptions, currentQuestion.correct_answer);
    }

    function nextButtonClick(){
        const selectedOption = document.querySelector('input:checked');
        if (selectedOption){

            if(currentQuestionIndex < totalQuestions - 1){
                currentQuestionIndex++;
                loadQuestion();
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

    loadQuestion();
    dom.nextBtn.addEventListener('click', nextButtonClick);
//})