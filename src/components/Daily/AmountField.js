import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.input`
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  flex: 1;
  height: 20px;
  font-size: 1.3rem;
  margin: 5px;
  padding: .5rem;
  text-align: right;
  type: number;
`;

const AmountField = () => (
  <Wrapper />
);

export default AmountField;