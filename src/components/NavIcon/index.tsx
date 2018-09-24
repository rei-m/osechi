import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';
import { MenuType } from '@src/enums';
import { menuTypeToIcon } from '@src/utils';

export interface NavIconProps {
  iconType: MenuType;
  text: string;
  isCurrent: boolean;
}

type IconProps = Pick<NavIconProps, 'text' | 'isCurrent'>;

const span: StyledFunction<IconProps & React.HTMLProps<HTMLElement>> =
  styled.span;

const Icon = span`
  height: 56px;
  color: #fff;
  text-align: center;
  box-sizing: border-box;
  width: inherit;
  opacity: ${props => (props.isCurrent ? 1 : 0.8)};
  display: inline-block;
  font-size: 2.2rem;
  line-height: 4.8rem;
`;

const NavIcon: React.SFC<NavIconProps> = ({ iconType, text, isCurrent }) => (
  <Icon text={text} isCurrent={isCurrent}>
    {menuTypeToIcon(iconType)}
  </Icon>
);

export default NavIcon;
