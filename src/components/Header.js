import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 75px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #e6e6e6;
  background-color: #fff;
`;

const Frame = styled.div`
  width: 935px;
  display: flex;
  align-items: center;
`;

const Header = () => (
  <Wrapper>
    <Frame>
      haeder
    </Frame>
  </Wrapper>
);

export default Header;