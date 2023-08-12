import { ChangeEvent, useState } from 'react';
import * as SC from './CustomInput.styled';

interface Props {
  lab: string;
  type: string;
}

export const CustomInput = ({ lab, type }: Props) => {
  const [value, setValue] = useState('');

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setValue(value);
  };
  return (
    <SC.Label>
      {lab}
      <SC.Input
        name={lab}
        type={type}
        value={value}
        onChange={handleInputChange}
        autoComplete="off"
      />
    </SC.Label>
  );
};
