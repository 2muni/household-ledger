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
    const { name, value } = e.target;
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
  handleExpend = (e) => {
    const { DailyActions } = this.props;
    const { id } = e.target;
    DailyActions.toggleExpend({id});
  }

  render() {
    
    const {
      handleChange,
      handleInsert,
      handleToggle,
      handleRemove,
      handleExpend,
    } = this;
    const { amount, tag, memo } = this.props.input.toJS();
    const { expenditure } = this.props.status.toJS();
    const { details } = this.props;

    let allAmount = 0;
    details.toJS().forEach(
      ({amount}) => (allAmount += parseInt(amount))
    )

    return (
      <Wrapper>
        <DateHeader allAmount={allAmount}/>
        <Section>
          <Breakdown
            details={details}
          />
          <Write
            amount={amount}
            tag={tag}
            memo={memo}
            expenditure={expenditure}
            onChange={handleChange}
            onInsert={handleInsert}
            onExpend={handleExpend}         
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
      status: daily.get('status'),
  }),
  (dispatch) => ({
      DailyActions: bindActionCreators(dailyActions, dispatch)
  })
)(DailyContainer);