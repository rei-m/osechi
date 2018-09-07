import * as React from 'react';
import { Osechi } from '@src/types';

export interface OsechiProps {
  osechi: Osechi;
}

const Osechi: React.SFC<OsechiProps> = ({ osechi }) => {
  return <div>{osechi}</div>;
};

export default Osechi;
