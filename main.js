function loadQuizPage(){
        window.location.href = "quizPage.html";
}    

const dom ={
    startBtn : document.querySelector('.btnStart')
}

dom.startBtn.addEventListener('click',loadQuizPage);

