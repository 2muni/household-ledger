import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 60px;
  height: 20px;
  margin: 5px;
  padding: .5rem;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  background-color: #fff;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
`;

const Button = ({ label }) => (
  <Wrapper>
    {label}
  </Wrapper>
);

export default Button;