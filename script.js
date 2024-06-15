let currentQuestion = 1;

function checkAnswer(question, answer) {
    const correctAnswers = {
        1: 'R2-D2',
        2: 'Tudo em todo lugar ao mesmo tempo',
        3: '1999'
    };
    
    if (correctAnswers[question] === answer) {
        document.getElementById(`question${question}`).style.display = 'none';
        
        if (question < 3) {
            document.getElementById(`question${question + 1}`).style.display = 'block';
        } else {
            document.getElementById('card-image').style.display = 'none';
            document.getElementById('congratulations').style.display = 'block';
        }
    } else {
        alert('Resposta incorreta. Tente novamente!');
    }
}

function checkDate() {
    const inputDate = document.getElementById('date').value;
    if (inputDate === '1994-06-17') {
        document.getElementById('date-image').style.display = 'block';
    } else {
        alert('Data incorreta. Tente novamente!');
    }
}
