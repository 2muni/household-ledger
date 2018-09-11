import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.fieldset`
  border: none;
`;

const Legend = styled.legend`
  color: #000;
`

const TagsWrapper = styled.div`
  display: flex;
  width: 376px;
  flex-wrap: wrap;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  padding: 7px;
  margin-left: 2px;
`

const Tag = ({ children }) => (
  <Wrapper>
    <Legend>Tags</Legend>
    <TagsWrapper>
      {children}
    </TagsWrapper>
  </Wrapper>
);

export default Tag;