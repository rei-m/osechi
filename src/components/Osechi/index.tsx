import * as React from 'react';
import { Osechi } from '@src/types';

export interface OsechiProps {
  osechi: Osechi;
}

function taxAndPostageText({ includeTax, includePostage }: Osechi) {
  const result: string[] = [];
  if (includeTax) {
    result.push('税込');
  } else {
    result.push('税抜');
  }
  if (includePostage) {
    result.push('送料込');
  } else {
    result.push('送料別');
  }
  return result.join('・');
}

function peopleFromToText({ peopleFrom, peopleTo }: Osechi) {
  if (peopleFrom === 0 && peopleTo === 0) {
    return 'オードブル';
  }
  if (peopleFrom >= 5) {
    return `${peopleFrom}人前以上`;
  }
  if (peopleFrom === peopleTo) {
    return `${peopleFrom}人前`;
  }
  return `${peopleFrom}〜${peopleTo}人前`;
}

const Osechi: React.SFC<OsechiProps> = ({ osechi }) => {
  return (
    <div>
      <div>{osechi.catchCopy}</div>
      <div>{osechi.name}</div>
      <div>
        <span>{osechi.price.toLocaleString()}</span>
        <span>{`円（${taxAndPostageText(osechi)}）`}</span>
      </div>
      <div>{osechi.categories}</div>
      <div>{peopleFromToText(osechi)}</div>
    </div>
  );
};

export default Osechi;
