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

const Breakdown = ({ details }) => {

  const item = details.map(
    ledger => {
      const { id, tag, memo, amount } = ledger.toJS();
      return(
        <Details
          id={id}
          key={id}
          tag={tag}
          memo={memo}
          amount={amount}
        />
      );
    }
  );
  return(
    <Wrapper>
      {item}
    </Wrapper>
  )
};

export default Breakdown;
