<h1 align="center">Test Authorization (React)</h1>
<h3 align="center">Тестовое по авторизации пользователя</h3>
<h3 align="center"><a  href="https://stanislavponomarev93.github.io/test_authorization/">Live Demo</a></h3>
<p>

![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=flat&logo=styled-components&logoColor=white)
![React-hook-form](https://img.shields.io/badge/react_hook_form-f06cd3?style=flat&logo=react-hook-form)
</p>

___


<h1>Описание ТЗ</h1>

Требуется написать приложение в соответствии с макетом. Все запросы к серверу нужно имитировать на стороне фронта.
1) На странице "Авторизация" пользователь вводит данные (логин: steve.jobs@example.com , пароль: password), в случае ошибки выводить сообщение в соответствии с дизайном. В момент отправки запроса на сервер (имитация), следует отключать кнопку.
2) После того, как пользователь успешно авторизовался, его должно перенести на страницу "Профиль" (/profile), где отображается почта под которой он авторизовался.
3) При нажатии на кнопку "Выйти", необходимо произвести выход из системы с возвращением на страницу "Авторизация" (/login)
Стек - react, typescript, react-router, styled-components, react-hook-form.

<h2>Технологии</h2>

* Проект создан через Create React App (CRA)
* Валидация форм настроена через React Hook Form
* Данные авторизованного пользователя хранятся в localStorage
* Стилизация styled-components

<h2>Локальный запуск проекта</h2>

```
git clone https://stanislavponomarev93.github.io/test_authorization

npm install

npm start
```

Для входа используется логин и пароль

```
логин: steve.jobs@example.com
пароль: password