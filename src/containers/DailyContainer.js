import * as React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as dailyActions from 'store/modules/daily';

import { Breakdown, Write, DateHeader, } from 'components/Daily';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.section`
  width: 940px;
  display: flex;
  justify-content: center;
`;

class DailyContainer extends React.Component {

  handleChange = (e) => {
    const { DailyActions } = this.props;
    const { name, value } = e.target
    DailyActions.changeInput({name, value});
  }

  handleInsert = () => {
    const { DailyActions } = this.props;
    DailyActions.insert();
    DailyActions.changeInput({name:'amount', value:''});
  }

  handleToggle = (id) => {
    const { DailyActions } = this.props;
    DailyActions.toggle(id);
  }

  handleRemove = (id) => {
    const { DailyActions } = this.props;
    DailyActions.remove(id);
  }

  render() {
    
    const {
      handleChange,
      handleInsert,
      handleToggle,
      handleRemove,
    } = this;
    const { amount, tag, memo } = this.props.input.toJS();
    const { details } = this.props;

    return (
      <Wrapper>
        <DateHeader />
        <Section>
          <Breakdown
            details={details}
          />
          <Write
            amount={amount}
            tag={tag}
            memo={memo}
            onChange={handleChange}
            onInsert={handleInsert}            
          />
        </Section>
      </Wrapper>
    )
  }
}

export default connect(
  ({ daily }) => ({
      input: daily.get('input'),
      details: daily.get('details'),
  }),
  (dispatch) => ({
      DailyActions: bindActionCreators(dailyActions, dispatch)
  })
)(DailyContainer);