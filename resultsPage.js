document.addEventListener('DOMContentLoaded', function () {
    const resultsContainer = document.querySelector('#results-container');
    const quizResults = JSON.parse(localStorage.getItem('quizResults'));

    if (!quizResults) {
        resultsContainer.innerHTML = '<tr><td colspan="4">No results found. Please take the quiz first.</td></tr>';
        return;
    }

    quizResults.forEach((result, index) => {
        const resultRow = document.createElement('tr');

        const questionCell = document.createElement('td');
        questionCell.innerHTML = `Question ${index + 1}: ${result.question}`;
        resultRow.appendChild(questionCell);

        const chosenAnswerCell = document.createElement('td');
        chosenAnswerCell.innerHTML = result.selectedAnswer;
        resultRow.appendChild(chosenAnswerCell);

        const correctAnswerCell = document.createElement('td');
        correctAnswerCell.innerHTML = result.correctAnswer;
        resultRow.appendChild(correctAnswerCell);

        const resultIconCell = document.createElement('td');
        const icon = document.createElement('i');
        if (result.isCorrect) {
            icon.classList.add('fas', 'fa-check', 'correct');
        } else {
            icon.classList.add('fas', 'fa-times', 'incorrect');
        }
        resultIconCell.appendChild(icon);
        resultRow.appendChild(resultIconCell);

        resultsContainer.appendChild(resultRow);
    });
});