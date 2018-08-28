import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  padding: .5rem 0;
  font-weight: bold;
  font-size: 1.5rem;
`;

const Unit = ({ currency }) => (
  <Wrapper>
    {currency}
  </Wrapper>
);

export default Unit;