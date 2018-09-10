import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 5px;
  margin-left: 10px;
`;

const Unit = ({ currency }) => (
  <Wrapper>
    {currency}
  </Wrapper>
);

export default Unit;