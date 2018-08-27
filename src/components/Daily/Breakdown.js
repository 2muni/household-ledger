import * as React from 'react';
import styled from 'styled-components';

import Details from './Details';

const Wrapper = styled.article`
  width: 515px;
  margin-right: 30px;
  margin-top: 5px;
  padding: 27px;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  min-height: 400px;
`;

const AccountList = () => (
  <Wrapper>
    <Details
      tag="공과금"
      label="일이삼사오육칠팔구십일이삼사오육칠팔구십"
      money="32,132"
    />
    <Details
      tag="월급"
      label="일이삼사오육칠팔"
      money="32,132"
    />
    <Details
      tag="식비"
      label="일이삼사오육칠팔"
      money="32,132"
    />
    <Details
      tag="ㅇㅅㅇ"
      label="일이삼사오육칠팔"
      money="32,132"
    />
  </Wrapper>
);

export default AccountList;
