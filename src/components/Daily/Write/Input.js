import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.fieldset`
  border: none;
`

const Input = styled.input`
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  font-size: 1.3rem;
  text-align: right;
  height: 20px;
  padding: .5rem;
  width: 376px;

  &[type='number'] {
    -moz-appearance:textfield;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &::placeholder{
    font-size: 1rem
  }
`;

const InputWrapper = styled.article`
  display: flex;
  flex-direction: coulmn;
`

const Legend = styled.legend`
  color: #000;
`

const AmountField = ({ title, ...rest }) => (
  
  <Wrapper>
    <Legend>{title}</Legend>
    <InputWrapper>
      <Input {...rest}/>
    </InputWrapper>
  </Wrapper>
);

export default AmountField;