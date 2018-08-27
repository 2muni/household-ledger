import * as React from 'react';
import styled from 'styled-components';

import Button from './Button';
import AmountField from './AmountField';
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

const AccountInput = () => (
  <Wrapper>
    <Article>
      <AmountField />
      <Unit currency="￦" />
    </Article>
    <Article>
      <Button label="태그" />
      <Button label="메모" />
      <Submit label="작성" />
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