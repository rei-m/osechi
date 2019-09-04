import React from 'react';
import styled from '@src/styles/styled-components';
import { SortCondition, SortConditionList } from '@src/types';

export type Props = {
  sort: SortCondition;
  disabled?: boolean;
  onClick: (sort: SortCondition) => void;
  className?: string;
};

const SortLink = styled.a<{ isLeft: boolean }>(({ theme, isLeft }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
  fontSize: theme.fontSize.s,
  textDecoration: `none`,
  color: `#ffa000`,
  backgroundColor: `#fff`,
  border: `1px solid #ccc`,
  borderRadius: isLeft ? `5px 0 0 5px` : `0 5px 5px 0`,
  transition: `background-color 0.3s`,
  cursor: `pointer`,
  '&:hover': {
    backgroundColor: `#f3f3f2`,
  },
}));

const SortTxt = styled.a<{ isLeft: boolean }>(({ theme, isLeft }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
  fontSize: theme.fontSize.s,
  textDecoration: `none`,
  color: `#fff`,
  backgroundColor: `#ffb300`,
  border: `1px solid #ccc`,
  borderRight: isLeft ? `none` : `inherit`,
  borderLeft: isLeft ? `none` : `inherit`,
  borderRadius: isLeft ? `5px 0 0 5px` : `0 5px 5px 0`,
}));

const PriceSort = ({ sort, disabled, onClick, className }: Props) => {
  const index = SortConditionList.findIndex(sc => sc[0] === sort);
  const isLeft = sort === SortCondition.PriceLow;

  if (disabled) {
    return (
      <SortTxt isLeft={isLeft} className={className}>
        {SortConditionList[index][1]}
      </SortTxt>
    );
  }

  const onClickSort = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onClick(sort);
  };

  return (
    <SortLink
      href="#"
      onClick={onClickSort}
      isLeft={isLeft}
      className={className}
    >
      {SortConditionList[index][1]}
    </SortLink>
  );
};

export default PriceSort;
