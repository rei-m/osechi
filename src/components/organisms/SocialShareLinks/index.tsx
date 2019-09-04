import React from 'react';
import styled from '@src/styles/styled-components';
import FbShareLink from '@src/components/molecules/FbShareLink';
import TwShareLink from '@src/components/molecules/TwShareLink';

export type Props = {
  url: string;
  text: string;
  size?: number;
  className?: string;
};

const Container = styled.div(props => ({
  display: 'flex',
  justifyContent: 'flex-end',
  backgroundColor: '#fff8e1',
  padding: props.theme.spacing(1),
  '& > :nth-child(n+2)': {
    marginLeft: props.theme.spacing(1),
  },
}));

export const SocialShareLinks: React.FC<Props> = ({
  url,
  text,
  size = 24,
  className,
}) => {
  return (
    <Container className={className}>
      <FbShareLink url={url} size={size} />
      <TwShareLink url={url} text={text} size={size} />
    </Container>
  );
};

export default SocialShareLinks;
