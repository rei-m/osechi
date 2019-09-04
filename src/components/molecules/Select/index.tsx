import * as React from 'react';
import styled from '@src/styles/styled-components';

export type Props = {
  label: string;
  name: string;
  value: string;
  itemList: string[][];
  onChange: (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => void;
  className?: string;
};

const Container = styled.div(({ theme }) => ({
  textAlign: `left`,
  padding: `0 ${theme.spacing(2)}`,
}));

const SelectTitle = styled.div({
  color: `rgba(0, 0, 0, 0.62)`,
});

const SelectRow = styled.div({
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
});

const SelectWrapper = styled.div(({ theme }) => ({
  width: `100%`,
  height: `40px`,
  overflow: `hidden`,
  borderBottom: `1px solid rgba(0, 0, 0, 0.42)`,
  marginBottom: theme.spacing(2),
  position: `relative`,
  boxSizing: `border-box`,
  transition: `border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
  '&:hover': {
    borderBottom: `2px solid rgba(0, 0, 0, 0.87)`,
  },
}));

const SelectInner = styled.select(({ theme }) => ({
  width: `calc(100% + 20px)`,
  height: `40px`,
  background: `none`,
  border: `none`,
  outline: `none`,
  cursor: `pointer`,
  fontSize: theme.fontSize.l,
}));

const Triangle = styled.svg({
  top: `8px`,
  right: 0,
  color: `rgba(0, 0, 0, 0.54)`,
  position: `absolute`,
  pointerEvents: `none`,
  fill: `currentColor`,
  width: `1em`,
  height: `1em`,
  display: `inline-block`,
  fontSize: `2.4rem`,
  userSelect: `none`,
  flexShrink: 0,
});

const Select = ({
  label,
  name,
  value,
  itemList,
  onChange,
  className,
}: Props) => {
  return (
    <Container className={className}>
      <SelectTitle>{label}</SelectTitle>
      <SelectRow>
        <SelectWrapper>
          <SelectInner name={name} value={value} onChange={onChange}>
            {itemList.map(([value, itemLabel]) => (
              <option value={value} key={`select_item_${value}`}>
                {itemLabel}
              </option>
            ))}
          </SelectInner>
          <Triangle focusable="false" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z" />
          </Triangle>
        </SelectWrapper>
      </SelectRow>
    </Container>
  );
};

export default Select;
