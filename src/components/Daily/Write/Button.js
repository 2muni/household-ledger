import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
  height: 20px;
  margin: 4px;
  padding: .5rem;
  border: ${props=>props.border};
  border-radius: 3px;
  color: ${props=>props.color};
  background-color: ${props=>props.bgColor};
  cursor: pointer;
  text-align: center;
  font-weight: bold;
`;

const Button = ({ label, color, bgColor, border, ...rest }) => (
  <Wrapper
    color={color}
    bgColor={bgColor}
    border={border}
    {...rest}
  >
    {label}
  </Wrapper>
);

export default Button;