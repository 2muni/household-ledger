import * as React from 'react';
import styled from 'styled-components';

import { Header, DateHeader, } from './components';
import { Breakdown, Main, } from './components/Daily';

const Wrapper = styled.div`
  height: 100vh;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.section`
  width: 940px;
  display: flex;
  justify-content: center;
`;

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <DateHeader />
        <Section>
          <Breakdown />
          <Main />
        </Section>
      </Wrapper>
    );
  }
}

export default App;
