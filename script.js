let price;
let a = prompt('Введите страну:');
let hot = confirm("Тур горячий?");
switch (a) {
    case 'Турция':
        price = 200;
        price = hot ? price - (0.2 * price) : price;
        break;
    case 'Греция':
        price = 300;
        price = hot ? price - (0.2 * price) : price;
        break;
    case 'Япония':
        price = 3000;
        price = hot ? price - (0.2 * price) : price;
        break;
    case 'Великобритания':
        price = 2500;
        price = hot ? price - (0.2 * price) : price;
        break;
    case 'Мексика':
        price = 2000;
        price = hot ? price - (0.2 * price) : price;
        break;
    case 'Италия':
        price = 1000;
        price = hot ? price - (0.2 * price) : price;
        break;
    case 'США':
        price = 4000;
        price = hot ? price - (0.2 * price) : price;
        break;
    default:
        price = 'У нас нет такого тура'
}
alert(price);