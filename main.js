let categories = [];

async function getCategories(dom){
    let url = `https://opentdb.com/api_category.php`;
    let response;
    try{
        response = await fetch(url);
        if(response.ok){
            const categoriesJson = await response.json();
            categories.push(...categoriesJson.trivia_categories);
            renderCategories(dom);
        } 
    }
    catch{
        throw Error(`Error: ${response.status}`)
    }
}

function renderCategories(dom){
    let asd = "";
    categories.forEach(category=>{    
        const categoryOptions = `<option value="${category.id}">${category.name}</option>`;
        asd += categoryOptions;        
    });
    dom.selectCategory.innerHTML += asd;
}

function loadQuizPage(dom){
    let amount = dom.selectQuestionsAmount.value;
    let category = dom.selectCategory.value;
    let difficulty = dom.selectDifficulty.value;

    window.location.href = `quizPage.html?amount=${amount}&category=${category}&difficulty=${difficulty}`;
}

document.addEventListener('DOMContentLoaded', () => {

    const dom = {
        startBtn: document.querySelector('.btnStart'),
        selectCategory: document.querySelector('#triviaCategory'),
        selectDifficulty: document.querySelector('#triviaDifficulty'),
        selectQuestionsAmount: document.querySelector('#triviaQuestionAmount')
    }

    getCategories(dom);


    dom.startBtn.addEventListener('click', function(){
        loadQuizPage(dom);
    });

});



