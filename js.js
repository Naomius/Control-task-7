let clients = [
    {
        firstName: 'Александр',
        lastName: 'Иванчук',
        date: '11.29.1990',
        phone: '8(929)9889009',
        amounts: [2546, 2098, 764, 7266]
    },
    {
        firstName: 'Анатолий',
        lastName: 'Стаценко',
        date: '02.12.1987',
        phone: null,
        amounts: [563, 8287, 889]
    },
    {
        firstName: 'Марина',
        lastName: 'Петрова',
        date: '07.26.1997',
        phone: '8(899)5460908',
        amounts: [6525, 837, 1283, 392]
    },
    {
        firstName: 'Иван',
        lastName: 'Караванов',
        date: '09.12.1999',
        phone: null,
        amounts: [7634, 283, 9823, 3902]
    },
    {
        firstName: 'Оксана',
        lastName: 'Абрамова',
        date: '01.24.2002',
        phone: '8(952)7469922',
        amounts: [342, 766, 362]
    },
];

let newClient = {
    amounts: [],
};

// Закоментил нижний код, для удобства обработки в консоле функций со 2-й Части.

// newClient.firstName = prompt('Укажите ваше имя');
// newClient.lastName = prompt('Укажите вашу фамилию');
// newClient.date = prompt('Укажите вашу дату рождения: мм-дд-гггг');
// newClient.phone = prompt('Укажите вашу номер телефона');
//
//
// while (true) {
//  let value = +prompt('Добавить покупку для клиента ' + newClient.firstName);
//  if (!value) break;
//
//  newClient.amounts.push(+value);
// }
//
// clients.push(newClient);
// console.log(newClient);

//Часть 2

function fullName(object) {
    return (object.firstName + ' ' + object.lastName);
}

console.log(fullName(clients[0]));


//Пункт 2

function getBirthday(string) {
    const options = {
        day: 'numeric',
        month: 'long',
    };

    let userDate = new Date(string.date).toLocaleString('ru-Ru', options);
    let today = new Date().toLocaleString('ru-Ru', options);

    return userDate === today ? `${userDate} - (сегодня)` : userDate;

}

console.log(getBirthday(clients[0]));

// Пункт 3

// function getAllAmount(amounts) {
//     let userAmounts = amounts.amounts;
//     let sum = 0;
//     for (let i = 0; i < userAmounts.length; i++) {
//         sum += userAmounts[i];
//     }
//     return sum;
// }
//
// console.log(getAllAmount(clients[0]));

//Сделаем рефакторинг кода сверху

function getAllAmount(client) {
    return client.amounts.reduce((num, acc) => num + acc);
}

console.log(getAllAmount(clients[0]));

// Пункт 4

// function getAverageAmount(client) {
//     for (let i = 0; i < clients[i].amounts.length; i++) ;
//     let purchaseAmount = clients[0].amounts;
//     let sum = 0
//     for (let i = 0; i < purchaseAmount.length; i++) {
//         sum += purchaseAmount[i] / purchaseAmount.length;
//     }
//     return sum.toFixed(1);
// }
//
// console.log(getAverageAmount(clients[3]));

//Делаем рефакторинг п.4

function getAverageAmount(clientik) {
    return getAllAmount(clientik) / clientik.amounts.length;
}

console.log(getAverageAmount(clients[0]));

// Пункт 6


arrClients = () => {
    console.log('Клиент ' + fullName(clients[0]) + ' имеет среднюю сумму чека ' + getAverageAmount(clients[0]) + '.' + ' День рождения клиента: ' + getBirthday(clients[0]));
}

arrClients();

// Пункт 7

showClients = (clients) => {
    for (let i = 0; i < clients.length; i++)
        console.log('Клиент ' + fullName(clients[i]) + ' имеет среднюю сумму чека ' + getAverageAmount(clients[i]) + '.' + ' День рождения клиента: ' + getBirthday(clients[i]));
}

showClients(clients);

// Пункт 8 

try {
    showClients();
} catch (e) {
    console.log('Вызвана функция без параметров' + e.message);
}

// Пункт 9

const bestClients = [
    {
        firstName: 'Педро',
        lastName: 'Ивански',
        date: '11.30.1995',
        phone: '8(929)9889009',
        amounts: [1146, 2068, 1, 7266]
    },
    {
        firstName: 'Анатолио',
        lastName: 'Васерман',
        date: '05.12.1986',
        phone: null,
        amounts: [563, 10, 889]
    },
    {
        firstName: 'Рианна',
        lastName: 'Петровна',
        date: '07.26.1991',
        phone: '8(899)5460908',
        amounts: [6525, 10, 66, 392]
    },
]

showClients(bestClients);

// Пункт 10

setTimeout(function () {
    showClients(bestClients);
}, 3000);


// Пункт 11


function whoSpentMore(clients) {
    let maxSum = 0;
    let maxClient = {};

    for (let client of clients) {
        let allAmount = getAllAmount(client);
        if(allAmount > maxSum) {
            maxSum = allAmount;
            maxClient = client
        }
    }
    console.log(`Больше всех потратил ${fullName(maxClient)}, сумма: ${maxSum}`)

}
