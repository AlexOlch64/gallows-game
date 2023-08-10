function oclock(){
    let date = new Date();

    let hours = (date.getHours() < 10)? '0' + date.getHours(): date.getHours();
    let minutes = (date.getMinutes() < 10)? '0' + date.getMinutes(): date.getMinutes();
    let seconds = (date.getSeconds() < 10)? '0' + date.getSeconds(): date.getSeconds();
    let dayOfWeek = date.getDay();
    switch (dayOfWeek){
        case 0:
            dayOfWeek = 'Воскресение';
            break;
        case 1:
            dayOfWeek = 'Понедельник';
            break;
        case 2:
            dayOfWeek = 'Вторник';
            break;
        case 3:
            dayOfWeek = 'Среда';
            break;
        case 4:
            dayOfWeek = 'Четверг';
            break;
        case 5:
            dayOfWeek = 'Пятница';
            break;
        case 6:
            dayOfWeek = 'Суббота';
            break;
    }
    document.getElementById('oclock').innerHTML = hours + ':' + minutes + ':' + seconds;
    document.getElementById('date').innerHTML = dayOfWeek;
}
setInterval(oclock,10);
oclock();