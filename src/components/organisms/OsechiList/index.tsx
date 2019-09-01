import React from 'react';
import styled from '@src/styles/styled-components';
import OsechiCard from '@src/components/organisms/OsechiCard';
import { Osechi } from '@src/types';

export type Props = {
  osechiList: Array<Osechi>;
  className?: string;
};

const Container = styled.div(({ theme }) => ({
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  flexDirection: `column`,
  [`@media screen and (min-width: ${theme.minWidthWide})`]: {
    flexDirection: `row`,
    alignItems: `flex-start`,
  },
}));

const StyledOsechCard = styled(OsechiCard)<{ no: number }>(({ theme, no }) => ({
  boxShadow: `0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 1px -1px rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)`,
  margin: theme.spacing(2),
  '&:after': {
    content: `'${no}'`,
    textArign: 'center',
    position: 'absolute',
    left: '-8px',
    top: '-8px',
    fontSize: no < 100 ? '1.2rem' : '1.0rem',
    opacity: 1,
    width: '24px',
    height: '24px',
    lineHeight: '2.2rem',
    borderRadius: '16px',
    border: '1px solid #a86965',
    color: '#a86965',
    boxSizing: 'border-box',
    backgroundColor: '#fdeff2',
    boxShadow: `0 1px 1px 0 rgba(0,0,0,0.14), 0 1px 1px -1px rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12)`,
  },
}));

const OsechiList = ({ osechiList, className }: Props) => {
  return (
    <Container className={className}>
      {osechiList.map((osechi, i) => (
        <StyledOsechCard key={osechi.code} osechi={osechi} no={i + 1} />
      ))}
    </Container>
  );
};

export default OsechiList;
