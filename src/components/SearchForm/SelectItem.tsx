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

const SelectRow = withAppTheme(styled.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing2x};
`;

const SelectWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const SelectInner = styled.select`
  width: calc(100% + 20px);
  background: none;
  border: none;
  cursor: pointer;
`;

const CustomSelectComponent = ({
  field, // { name, value, onChange, onBlur }
  // form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => <SelectInner {...field}>{props.children}</SelectInner>;

const SelectItem = (props: SelectItemProps) => (
  <Root>
    {props.title}
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
      </SelectWrapper>
    </SelectRow>
  </Root>
);
export default SelectItem;
