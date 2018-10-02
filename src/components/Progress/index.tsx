import * as React from 'react';
import styled from 'styled-components';

export interface ProgressProps {
  readonly onStart: () => void;
}

const Root = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fffff050;
  flex-direction: column;
  height: 100vh;
  position: fiexd;
`;

const Message = styled.div`
  margin-top: 16px;
  font-size: 2rem;
`;

const Progress: React.SFC<ProgressProps> = _props => (
  <Root>
    <Message>読み込み中。。。</Message>
  </Root>
);

export default Progress;
