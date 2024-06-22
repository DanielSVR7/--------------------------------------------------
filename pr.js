function p1task0() {
    let variable = 5;
    let type = typeof variable;

    if (type === 'number') {
        alert('Переменная является числом');
    } 
    else {
        alert('Переменная не является числом');
    }
}


function p1task1() {
    let userInput = prompt("Введите ваш любимый цвет:").toLowerCase();

    switch(userInput) {
        case "красный":
            alert("Привет! Красный - это цвет страсти и силы!");
            break;
        case "синий":
            alert("Привет! Синий - это цвет спокойствия и гармонии.");
            break;
        case "зеленый":
            alert("Привет! Зеленый - цвет природы и свежести.");
            break;
        default:
            alert("Привет! Цвет " + userInput + " очень красивый!");
    }
}

function p1task2() {
    let str = 'Цикл for:\n';
    for (let i = 1; i <= 40; i++) {
    str += i + ' ';
    }
    alert(str);

    str = 'Цикл while:\n';
    let j = 1;
    while (j <= 40) {
        str += j + ' ';
        j++;
    }
    alert(str);

    str = 'Цикл do-while:\n';
    let k = 1;
    do {
        str += k + ' ';
        k++;
    } 
    while (k <= 40);
    alert(str);
}

function p1task3() {
    while (true) {
        alert('273 УК РФ. Создание, использование и распространение вредоносных компьютерных программ')
    }
}

function p1task4() {
    let number;
    let isValid = false;

    while (!isValid) {
        number = prompt("Введите любое число больше 5:");

        if (number === null) {
            alert('Не нажимайте "Отмена"! ');
            break; 
        }
        if (!isNaN(number) && parseInt(number) > 5) {
            isValid = true;
        } 
    }

    if (isValid) {
        alert("Поздравляем! Вы ввели число больше 5: " + number);
    } else {
        alert("Вы ввели некорректное число. Пожалуйста, попробуйте снова.");
    }
}

function p1task5() {
    let str = '';
    for (let i = 8; i <= 20; i++) {
        if (i % 2 === 0) {
            str += i + ' ';
        }
    }
    alert(str);
}

function p1task6() {
    let str = '';
    for (let i = 1; i <= 7; i++) {
        if (i !== 5 && i % 2 !== 0) {
            str += i + ' ';
        }  
    }
    alert(str);
}

let array1;

function p2task0() {
    alert(array1);
}

function p2task1() {
    array1 = [1, 2, 3, 4, 5];
    let array2 = new Array(1, 2, 3, 4, 5);
    let array3 = [];
    array3.push(1);
    array3.push(2);
    array3.push(3);
    array3.push(4);
    array3.push(5);
    alert('Массив создан, см. код');
}

function p2task2() {
    alert(array1[4]); 
    array1[4] = 10; 
    alert(array1);
}

function p2task3() {
    let arrayLength = array1.length;
    let button = document.getElementById('p2task3');
    button.addEventListener('mouseover', function() {
        alert('Длина массива: ' + arrayLength);
    });
}

function p2task4() {
    for (let i = 0; i < array1.length; i++) {
        alert('Элемент ' + (i+1) + ': ' + array1[i]);
    }
}

function p2task5() {
    let array2 = [4, 5, 6];
    let mergedArray = array1.concat(array2);
    alert(mergedArray);
}

function p2task6() {
    let lastElement = array1.pop();
    alert(lastElement); 
    alert(array1); 
}

function p2task7() {
    p2task6()
}

function p2task8() {
    let newElement = 0;
    array1.unshift(newElement);
    alert(array1);
}
function p2task9() {
    let currentDate = new Date();
    alert(currentDate);
}
function p2task10() {
    let options = { day: 'numeric', month: 'long', year: 'numeric' };
    let currentDate = new Date().toLocaleDateString('ru-RU', options);
    alert(currentDate);
}
function p2task11() {
    const randomNumber1 = Math.floor(Math.random() * 51);
    const randomNumber2 = Math.floor(Math.random() * 51);
    const product = randomNumber1 * randomNumber2;
    alert(randomNumber1 + ' * ' + randomNumber2 + ' = ' + product);
}

function welcome() {
    let userName = localStorage.getItem('userName');
    if(userName) {
        let text = document.getElementById('wc').innerText = "Добрый день, " + userName + '!';
    } else {
        userName = prompt('Представьтесь, пожалуйста:');
        localStorage.setItem('userName', userName);
        alert('Приятно познакомиться, ' + userName);
    }
}




const questions = [
    {
    question: "Что означает HTML?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    answer: "Hyper Text Markup Language"
    },
    {
    question: "Какой метод используется для вывода данных в консоль в JavaScript?",
    options: ["log()", "print()", "console.log()"],
    answer: "console.log()"
    },
    {
    question: "Что будет результатом '5' + 2 в JavaScript?",
    options: ["52", "7", "5+2"],
    answer: "52"
    },
    {
    question: "Какой символ используется для комментариев в JavaScript?",
    options: ["//", "--", "/* */"],
    answer: "//"
    },
    {
    question: "Как объявить переменную в JavaScript?",
    options: ["const myVar", "Variable myVar", "let myVar"],
    answer: "let myVar"
    },
    {
    question: "Какой будет результат 2+2+'2' в JavaScript?",
    options: ["422", "6", "4"],
    answer: "42"
    },
    {
    question: "Что означает CSS?",
    options: ["Cascading Style Sheets", "Colorful Style Sheets", "Creative Style Sheets"],
    answer: "Cascading Style Sheets"
    },
    {
    question: "Какой метод используется для добавления новых элементов в начало массива в JavaScript?",
    options: ["unshift()", "push()", "append()"],
    answer: "unshift()"
    },
    {
    question: "Что будет результатом 10 === '10' в JavaScript?",
    options: ["true", "false", "10"],
    answer: "false"
    }
];
    
    const testContainer = document.getElementById("test");
    const resultContainer = document.getElementById('result');
    
    questions.forEach((q, index) => {
        const questionElem = document.createElement("div");
        questionElem.classList.add("question");
        questionElem.innerHTML = `<strong>Вопрос ${index + 1}:</strong> ${q.question}<br>`;
        
        q.options.forEach(option => {
            questionElem.innerHTML += `<label><input type="radio" name="q${index}" value="${option}" class="cb">${option}<br></label>`;
        });
        
        testContainer.appendChild(questionElem);
    });
    
    function submitTest() {

        let score = 0;
        let userAnswers = [];
        
        questions.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
            if (selectedOption) {
                userAnswers.push({ question: q.question, answer: selectedOption.value });
                if (selectedOption.value === q.answer) {
                    score++;
                }
            }
        });
    
        resultContainer.innerHTML = `Ваш результат: ${score} из ${questions.length}`;
        
        if (userAnswers.length > 0) {
            resultContainer.innerHTML += "<br><br>Ваши ответы:";
            userAnswers.forEach(userAnswer => {
                const isCorrect = userAnswer.answer === questions.find(q => q.question === userAnswer.question).answer;
                resultContainer.innerHTML += `<br><strong>${userAnswer.question}:</strong> ${userAnswer.answer} <strong style="color:${isCorrect ? "green" : "red"}">(${isCorrect ? "Верно" : "Неверно"})</strong>`;
            });
        }
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    }
    