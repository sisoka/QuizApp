function loadQuizPage(){
        window.location.href = "quizPage.html";
        let apiUrl = generateApiUrl();
        console.log(apiUrl);
        getQuestionsInitially(apiUrl);
}

function generateApiUrl(){
    let amount = dom.selectQuestionsAmount.value;
    let category = dom.selectCategory.value;
    let difficulty = dom.selectDifficulty.value;
    return `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`;
}

async function getQuestionsInitially(apiUrl) {
    const response = await fetch(apiUrl);
    const qustions = await response.json();
    console.log(qustions);
}


const dom ={
    startBtn : document.querySelector('.btnStart'),
    selectCategory: document.querySelector('#triviaCategory'),
    selectDifficulty: document.querySelector('#triviaDifficulty'),
    selectQuestionsAmount: document.querySelector('#triviaQuestionAmount')
}

let qustions = [];

dom.startBtn.addEventListener('click',loadQuizPage);




