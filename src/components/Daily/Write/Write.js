import * as React from 'react';
import styled from 'styled-components';

import Button from './Button';
import Input from './Input';
import Submit from './Submit';
import TagItem from './TagItem';
import TagWrapper from './TagWrapper';

const Wrapper = styled.section`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.article`
  display: flex;
  flex-direction: column; 
`

const ButtonWrapper = styled.article`
  display: flex;
  margin-top: 15px;
  height: 50px;
`;

const AccountInput = ({ tag, memo, amount, onChange, onInsert }) => (
  <Wrapper>
    <InputWrapper>
      <Input
        title="Memo"
        type="text"
        name="memo"
        value={memo}
        onChange={onChange}
        placeholder="메모 입력"
      />
      <Input
        title="Amount"
        type="number"
        name="amount"
        value={amount}
        onChange={onChange}
        placeholder="금액 입력"
      />
      <TagWrapper>
        <TagItem />
        <TagItem />
        <TagItem />
        <TagItem />
        <TagItem />
        <TagItem />
        <TagItem />
      </TagWrapper>
    </InputWrapper>
    <ButtonWrapper>
      <Submit label="작성" onClick={onInsert} />
    </ButtonWrapper>
  </Wrapper>
);

export default AccountInput;