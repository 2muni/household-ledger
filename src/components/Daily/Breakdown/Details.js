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

const Label = styled.span`
  font-size: 1.3rem;
`;

const Tag = styled.span`
  font-size: .9rem;
  color: #007acc;
`;

const Money = styled.span`
  font-size: 1.4rem;
  color: red;
  flex: 1;
  text-align: right;
  margin-top: 7px;
`;

const Detail = ({tag, label, money}) => (
  <Wrapper>
    <Tag>{tag}</Tag>
    <Label>{label}</Label>
    <Money>- {money} ￦</Money>
  </Wrapper>
);

export default Detail;