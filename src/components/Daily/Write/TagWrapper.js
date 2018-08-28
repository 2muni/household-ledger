import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.article`
  display: flex;
  width: 376px;
  flex-wrap: wrap;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  padding: 7px;
  margin-left: 2px;
`;

const Tag = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default Tag;