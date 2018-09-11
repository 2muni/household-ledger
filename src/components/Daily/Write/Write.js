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
  margin: 15px 0px;
`

const ButtonWrapper = styled.article`
  display: flex;
  height: 50px;
`;

const AccountInput = ({ tag, memo, amount, expenditure, onChange, onInsert, onExpend }) => (
  <Wrapper>
    <ButtonWrapper>
      <Button
        label="지출"
        id="expenditure"
        onClick={onExpend}
        color={expenditure ? '#fff' : '#000'}
        bgColor={expenditure ? '#00c73c' : '#fff'}
        border={expenditure ? 'none' : '1px solid #e6e6e6'}
      />
      <Button
        label="수입"
        id="income"
        onClick={onExpend}
        color={expenditure ? '#000' : '#fff'}
        bgColor={expenditure ? '#fff' : '#00c73c'}
        border={expenditure ? '1px solid #e6e6e6' : 'none' }
      />
    </ButtonWrapper>
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