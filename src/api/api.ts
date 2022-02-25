export const apiLogin = (data: {
  login: string,
  password: string
}) => new Promise((res, rej) => {
  const { login, password } = data;
  if (login === 'steve.jobs@example.com' && password === 'password') return setTimeout(() => res('ok'), 2000);
  return setTimeout(() => rej('Ошибка. Такого пользователя нет'), 2000);
})