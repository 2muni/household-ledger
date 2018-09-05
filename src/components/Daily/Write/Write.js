import * as React from 'react';
import styled from 'styled-components';

import Button from './Button';
import Input from './Input';
import Unit from './Unit';
import Submit from './Submit';
import TagItem from './TagItem';
import TagWrapper from './TagWrapper';

const Wrapper = styled.section`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Article = styled.article`
  display: flex;
  flex: column;
`;

const AccountInput = ({ tag, memo, amount, onChange, onInsert }) => (
  <Wrapper>
    <Article>    
    <Input 
        type="text"
        name="memo"
        value={memo}
        onChange={onChange}
        placeholder="메모 입력"
      />
      <Input 
        type="number"
        name="amount"
        value={amount}
        onChange={onChange}
        placeholder="금액 입력"
      />
      <Unit currency="￦" />
    </Article>
    <Article>
      <Button label="태그" />
      <Button label="메모" />
      <Submit
        label="작성"
        onClick={onInsert}
      />
    </Article>
    <Article>
    <TagWrapper>
      <TagItem />
      <TagItem />
      <TagItem />
      <TagItem />
      <TagItem />
      <TagItem />
      <TagItem />
    </TagWrapper>
    </Article>
  </Wrapper>
);

export default AccountInput;