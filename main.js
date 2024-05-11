function loadQuizPage(){
    //let apiUrl = generateApiUrl();
    let amount = dom.selectQuestionsAmount.value;
    let category = dom.selectCategory.value ;
    let difficulty = dom.selectDifficulty.value;

    window.location.href = `quizPage.html?amount=${amount}&category=${category}&difficulty=${difficulty}`;
    //getQuestionsInitially();    
}

// function generateApiUrl(){
//     let amount = dom.selectQuestionsAmount.value;
//     let category = dom.selectCategory.value ;
//     let difficulty = dom.selectDifficulty.value;

//     let url = `https://opentdb.com/api.php?type=multiple&amount=${amount}`;
//     if (category != "any"){
//         url += `&category=${category}`;
//     }
//     if (difficulty != "any"){
//         url += `&difficulty=${difficulty}`;
//     }

//     return url;
// }

// async function getQuestionsInitially(apiUrl) {
//     let amount = dom.selectQuestionsAmount.value;
//     let category = dom.selectCategory.value ;
//     let difficulty = dom.selectDifficulty.value;

//     const response = await fetch(apiUrl);
//     if (response.ok){
//         const questions = await response.json();
//         localStorage.setItem('questions', JSON.stringify(questions.results));
//     }

//     window.location.href = `quizPage.html?amount=${amount}&category=${category}&difficulty=${difficulty}`;
// }


const dom ={
    startBtn : document.querySelector('.btnStart'),
    selectCategory: document.querySelector('#triviaCategory'),
    selectDifficulty: document.querySelector('#triviaDifficulty'),
    selectQuestionsAmount: document.querySelector('#triviaQuestionAmount')
}

let questions = [];

dom.startBtn.addEventListener('click',loadQuizPage);




