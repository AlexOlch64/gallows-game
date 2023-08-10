let massWord = ['Указатель', 'Радуга', 'Мармелад', 'Поиск', 'Прятки', 'Сторож', 'Копейка', 'Леопард', 'Аттракцион', 'Дрессировка', 'Ошейник',
  'Карамель', 'Водолаз', 'Защита', 'Батарея', 'Решётка', 'Квартира', 'Дельфинарий', 'Непогода', 'Вход', 'Полиция', 'Перекрёсток', 'Башня', 'Стрелка',
  'Градусник', 'Бутылка', 'Щипцы', 'Наволочка', 'Павлин', 'Карточка', 'Записка', 'Лестница', 'Переулок', 'Сенокос', 'Рассол', 'Закат', 'Сигнализация',
  'Журнал', 'Заставка', 'Тиранозавр', 'Микрофон', 'Прохожий', 'Квитанция', 'Пауза', 'Новости', 'Скарабей', 'Серебро', 'Творог', 'Осадок', 'Песня', 'Корзина', 'Сдача', 'Овчарка', 'Хлопья', 'Телескоп', 'Микроб', 'Угощение', 'Экскаватор', 'Письмо', 'Пришелец', 'Айсберг', 'Пластик', 'Доставка', 'Полка', 'Билет', 'Вторник', 'Льдина', 'Интерес', 'Троллейбус', 'Футболист', 'Лисёнок', 'Пример', 'Баклажан', 'Лягушка', 'Джокер', 'Котлета', 'Накидка', 'Дикобраз', 'Барбарис', 'Работник', 'Кристалл', 'Доспехи', 'Халва', 'Велосипед', 'Крючок', 'Кочка', 'Черепаха', 'Петля', 'Осень', 'Яйцо']

let alphavite = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ъ', 'Ы', 'Ь', 'Ш', 'Щ', 'Э', 'Ю', 'Я'];

let keyWord = massWord[Math.floor(Math.random() * massWord.length)].toUpperCase();
var canvas = document.getElementById('graph');
var ctx = canvas.getContext('2d');
let start = false;
const addBtn = document.querySelector('.start');
const gameField = document.querySelector('.word-alphavite');
addBtn.onclick = () => {
  if (!start) {
    start = true;
    addBtn.textContent = "Закончить игру";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(50, 350);
    ctx.lineTo(50, 10);
    ctx.lineTo(450, 10);
    ctx.stroke();

    for (let i = 0; i < keyWord.length; i++) {
      const createBlock = document.createElement('div');
      createBlock.className = `page-block${i}`;
      createBlock.innerText = keyWord[i];
      myWord.append(createBlock);
      let myWords = document.querySelector('#myWord');
      myWords.style.cssText = "margin: 15px 0;"
      let elem = document.querySelector(`.page-block${i}`);
      elem.style.cssText = "border-bottom : 5px solid red; margin-right: 5px; font-size:50px; font-family: Andale Mono, monospace; text-align : center; width : 60px; height : 60px; display : inline-block; color : white; background-color: white;";
    }    
  }
  else {
    start = false;
    location.reload();
  }
}

function getListIdx(str, substr) {
  let listIdx = []
  let lastIndex = -1
  while ((lastIndex = str.indexOf(substr, lastIndex + 1)) !== -1) {
    listIdx.push(lastIndex)
  }
  return listIdx
}
let error = 0;
let notError = 0;
document.querySelector('.word-alphavite').onclick = (event) => {
  let key = event.target.textContent;
  if (keyWord.indexOf(key) + 1) {
    let index = (getListIdx(keyWord, key));
    for (let i = 0; i < index.length; i++) {
      let elem2 = document.querySelector(`.page-block${index[i]}`);
      elem2.style.cssText = "border-bottom : 5px solid red; margin-right: 5px; font-size:50px; font-family: Andale Mono, monospace; text-align:center; width : 60px; height : 60px; display : inline-block; color : black; background-color: white;";
      notError++;
    }
    let right = document.querySelector(`.word${alphavite.indexOf(key)}`);
    right.style.cssText = "background-color: green";

    function cancel() {
      alert('Поздравляю, вы победили!!!');
      location.reload();
    }

    if (notError == keyWord.length) {
      setTimeout(() => cancel(), 200);
    }
  }

  if (keyWord.indexOf(key) == -1) {
    switch (error) {
      case 0:
        ctx.moveTo(250, 10);
        ctx.lineTo(250, 110);
        break;
      case 1:
        ctx.arc(250, 130, 20, 4.71, Math.PI * 1.5, true);
        break;
      case 2:
        ctx.moveTo(250, 150);
        ctx.lineTo(250, 260);
        break;
      case 3:
        ctx.moveTo(250, 180);
        ctx.lineTo(220, 190);
        break;
      case 4:
        ctx.moveTo(250, 180);
        ctx.lineTo(280, 190);
        break;
      case 5:
        ctx.moveTo(250, 260);
        ctx.lineTo(260, 310);
        break;
      case 6:
        ctx.moveTo(250, 260);
        ctx.lineTo(240, 310);
        break;
    }
    ctx.stroke();
    error++;
    let notRight = document.querySelector(`.word${alphavite.indexOf(key)}`);
    notRight.style.cssText = "background-color: red";
    if (error == 8) {
      alert("Вы проиграли, начните игру заново");
      location.reload();
    }
  }
}
