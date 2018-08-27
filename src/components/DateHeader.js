import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 940px;
  height: 50px;
  margin-bottom: 50px;
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #e6e6e6;
`;

const Label = styled.div`
  font-size: 1.5rem;
`;

const DateHeader = () => (
  <Wrapper>
    <Label>
      2018-08-20 일자 사용한 금액은 20000 원입니다.
    </Label>
  </Wrapper>
);

export default DateHeader;