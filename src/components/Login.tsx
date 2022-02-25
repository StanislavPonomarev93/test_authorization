import { useContext, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { apiLogin } from '../api/api';
import { Auth } from '../contexts/AuthContext';
import { LoginType } from '../types/LoginType';
import Checkbox from './Checkbox';

function Login() {
  const [check, setCheck] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [auth, setAuth] = useContext(Auth);
  const [button, setButton] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<LoginType>({ mode: 'onChange' });
  const onSubmit: SubmitHandler<LoginType> = (data) => {
    setButton(true);
    apiLogin(data)
      .then(res => {
        if (check) localStorage.setItem('password', data.password);
        localStorage.setItem('login', JSON.stringify(data.login));
        setAuth(true);
        navigate('/profile');
      })
      .catch(err => {
        setError(err);
        setButton(false);
      });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <LabelInput>Логин:</LabelInput>
        <Input
          {...register("login", {
            required: 'Обязательное поле'
          })}
          type="text"
        />
        <SpanError>{errors.login && errors.login.message}</SpanError>
      </InputContainer>
      <InputContainer>
        <LabelInput>Пароль:</LabelInput>
        <Input
          {...register("password", {
            required: 'Обязательное поле'
          })}
          type="password" />
        <SpanError>{errors.password && errors.password.message}</SpanError>
      </InputContainer>
      <LabelCheckbox>
        <Checkbox checkState={[check, setCheck]} />
        Сохранить пароль
      </LabelCheckbox>
      <SpanError>{error}</SpanError>
      <ButtonForm disabled={button}>{button ? 'Идет проверка...' : 'Войти'}</ButtonForm>
    </Form>
  )
}

export default Login;

const Form = styled.form`
display: flex;
flex-direction: column;
width: 300px;
`;

const InputContainer = styled.div`
display: flex;
flex-direction: column;
`;

const LabelInput = styled.label`
margin: 0 0 10px;
`;

const LabelCheckbox = styled.label`
display: flex;
align-items: center;
margin-bottom: 20px;
`;

const Input = styled.input`
background-color: #f5f5f5;
border-radius: 5px;
border: none;
height: 35px;
outline: none;
padding: 0 15px;
box-sizing: border-box;
&:focus {
  border: 1px solid #42b7cc;
}
`;

const SpanError = styled.span`
height: 20px;
margin: 5px 0;
color: #f00;
`;

const ButtonForm = styled.button`
background-color: #4a67ff;
border: none;
color: #fff;
padding: 10px 0px;
border-radius: 5px;
cursor: pointer;
&:hover {
background-color: #3c54ce;
}
&:disabled{
background-color: #adb5db;
}
`;