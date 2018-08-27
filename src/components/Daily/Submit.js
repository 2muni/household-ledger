import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
  height: 20px;
  margin: 5px;
  margin-left: 25px;
  padding: .5rem;
  color: #fff;
  border-radius: 3px;
  background-color: #00c73c;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
`;

const Submit = ({ label }) => (
  <Wrapper>
    {label}
  </Wrapper>
);

export default Submit;