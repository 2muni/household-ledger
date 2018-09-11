import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
  height: 25px;
  margin: 5px;
  padding: .5rem;
  color: #fff;
  border-radius: 3px;
  background-color: #00c73c;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
`;

const Submit = ({ label, onClick }) => (
  <Wrapper onClick={onClick}>
    {label}
  </Wrapper>
);

export default Submit;