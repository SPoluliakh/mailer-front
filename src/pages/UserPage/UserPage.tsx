import { FormEvent } from 'react';
import { CustomInput } from '../../components/CustomInput/CustomInput';
import { useAddEmailMutation } from '../../redux/email/emailOperations';
import * as SC from './UserPage.styled';
import { Loader } from '../../components/Loader/Loader';

export const UserPage = () => {
  const [addEmail, { isLoading }] = useAddEmailMutation();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const email = form.elements.namedItem('Email') as HTMLInputElement;

    const credentials = {
      email: email.value,
    };

    addEmail(credentials);
  };

  return (
    <>
      {isLoading && <Loader />}
      <SC.Wrapper>
        <SC.Form onSubmit={handleSubmit}>
          <CustomInput lab={'Email'} type={'email'} />
          <SC.Button style={{ display: 'block' }} type="submit">
            submit
          </SC.Button>
        </SC.Form>
      </SC.Wrapper>
    </>
  );
};
