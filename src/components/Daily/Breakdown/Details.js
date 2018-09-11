import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e6e6e6;
  padding: 15px 0;

  &:last-child {
    border-bottom: none;
  }
`;

const Memo = styled.span`
  font-size: 1.3rem;
`;

const Tag = styled.span`
  font-size: .9rem;
  color: #007acc;
`;

const Amount = styled.span`
  font-size: 1.4rem;
  color: ${(props)=>props.AmountColor};
  flex: 1;
  text-align: right;
  margin-top: 7px;
`;

const Detail = ({tag, memo, amount}) => (
  <Wrapper>
    <Tag>{tag}</Tag>
    <Memo>{memo}</Memo>
    <Amount AmountColor = {amount < 0 ? 'red' : 'green'}>
      {amount} ￦
    </Amount>
  </Wrapper>
);

export default Detail;