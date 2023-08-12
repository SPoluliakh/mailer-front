import { FormEvent, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { CustomInput } from '../../components/CustomInput/CustomInput';
import * as SC from './LoginForm.styled';

export const LoginPage = () => {
  const [isPass, setIsPass] = useState(false);

  const handleClick = () => {
    setIsPass(!isPass);
  };

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.namedItem('Name') as HTMLInputElement;
    const password = form.elements.namedItem('Password') as HTMLInputElement;
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
