## Допишите функцию валидации имени пользователя? ##

Необходимо, чтобы на сайте можно было поприветствовать только пользователей,
которые удовлетворяют следующему условию - *имя не пустое, без пробелов, минимум 4 символа*.

```js
/**
 * Эту функцию трогать не нужно
 */
function print (text) {
    alert(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid (name) {
    return !(name == null ||name ==""||name.indexOf(" ") !=-1||name.length<=3);
}

function sayHello () {
    let userName = prompt('Введите ваше имя');

    if (isValid(userName)) {
        print('Welcome back, ' + userName + '!');
    } else {
        print('Некорректное имя');
    }
}

sayHello();
```


