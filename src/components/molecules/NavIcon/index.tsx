import React from 'react';
import styled from '@src/styles/styled-components';
import { MenuType } from '@src/enums';
import { menuTypeToIcon } from '@src/utils';

export type Props = {
  iconType: MenuType;
  isCurrent: boolean;
  className?: string;
};

const Icon = styled.span<{ isCurrent: boolean }>(({ isCurrent }) => ({
  height: 56,
  color: isCurrent ? '#fff' : '#e0e0e0',
  textAlign: 'center',
  boxSizing: 'border-box',
  width: 'inherit',
  display: 'inline-block',
  fontSize: '2.2rem',
  lineHeight: '4.8rem',
}));

const NavIcon = ({ iconType, isCurrent }: Props) => (
  <Icon isCurrent={isCurrent}>{menuTypeToIcon(iconType)}</Icon>
);

export default NavIcon;
