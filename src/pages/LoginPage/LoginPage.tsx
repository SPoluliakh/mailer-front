import { FormEvent, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { CustomInput } from '../../components/CustomInput/CustomInput';
import * as SC from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { signIn } from '../../redux/auth/authOperations';

export const LoginPage = () => {
  const [isPass, setIsPass] = useState(false);

  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();

  const handleClick = () => {
    setIsPass(!isPass);
  };

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.namedItem('Name') as HTMLInputElement;
    const password = form.elements.namedItem('Password') as HTMLInputElement;

    const credentials = {
      name: name.value as string,
      password: password.value as string,
    };

    dispatch(signIn(credentials));
  };

  return (
    <SC.Wrapper>
      <SC.Form onSubmit={handleSubmit}>
        <CustomInput lab={'Name'} type={'text'} />
        <CustomInput lab={'Password'} type={!isPass ? 'password' : 'text'} />
        <SC.Button onClick={handleClick} type="button">
          {!isPass ? <FaEye /> : <FaEyeSlash />}
        </SC.Button>
        <SC.Button style={{ display: 'block' }} type="submit">
          submit
        </SC.Button>
      </SC.Form>
    </SC.Wrapper>
  );
};
