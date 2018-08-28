import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.input`
  flex: 1;
  font-size: 1.3rem;
  margin: 5px;
  padding: .5rem;
  height: 20px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  text-align: right;

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

const AmountField = ({ ...rest }) => (
  <Wrapper {...rest}/>
);

export default AmountField;