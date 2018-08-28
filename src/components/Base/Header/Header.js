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

const Logo = styled.div`
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const NavItem = styled.nav`
  width: 40px;
  height: 40px;
  margin: 5px;
  cursor: pointer;
`

const Header = () => (
  <Wrapper>
    <Frame>
      <Logo>haeder</Logo>
      <Nav>
        <NavItem>일간</NavItem>
        <NavItem>월간</NavItem>
        <NavItem>분석</NavItem>
      </Nav>
    </Frame>
  </Wrapper>
);

export default Header;