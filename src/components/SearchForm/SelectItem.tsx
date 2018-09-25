import * as React from 'react';
import { Field } from 'formik';
import styled from 'styled-components';
import { withAppTheme } from '@src/styles';

export interface SelectItemProps {
  title: string;
  name: string;
  value: string;
  valueList: Array<string | number>;
  nameList: string[];
  handleChange: (e: React.SyntheticEvent<HTMLSelectElement>) => void;
}

const Root = styled.div`
  text-align: left;
`;

const Title = styled.div`
  color: rgba(0, 0, 0, 0.62);
`;

const SelectRow = withAppTheme(styled.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectWrapper = styled.div`
  width: 100%;
  height: 40px;
  overflow: hidden;
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  margin-bottom: 16px;
  position: relative;
  box-sizing: border-box;
  transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    border-bottom: 2px solid rgba(0, 0, 0, 0.87);
  }
`;

const SelectInner = styled.select`
  width: calc(100% + 20px);
  height: 40px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.8rem;
`;

const Triangle = styled.svg`
  top: 8px;
  right: 0;
  color: rgba(0, 0, 0, 0.54);
  position: absolute;
  pointer-events: none;
  fill: currentColor;
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 2.4rem;
  user-select: none;
  flex-shrink: 0;
`;

const CustomSelectComponent = ({
  field, // { name, value, onChange, onBlur }
  // form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => <SelectInner {...field}>{props.children}</SelectInner>;

const SelectItem = (props: SelectItemProps) => (
  <Root>
    <Title>{props.title}</Title>
    <SelectRow>
      <SelectWrapper>
        <Field
          component={CustomSelectComponent}
          name={props.name}
          value={props.value}
          onChange={props.handleChange}
        >
          {props.valueList.map((value, i) => (
            <option value={value} key={`select_item_${i}`}>
              {props.nameList[i]}
            </option>
          ))}
        </Field>
        <Triangle focusable="false" viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z" />
        </Triangle>
      </SelectWrapper>
    </SelectRow>
  </Root>
);
export default SelectItem;
