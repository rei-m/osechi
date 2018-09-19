import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';
import { Osechi } from '@src/types';

export interface OsechiProps {
  osechi: Osechi;
  no: number;
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

type RootProps = Pick<OsechiProps, 'no'>;

const rootElement: StyledFunction<RootProps & React.HTMLProps<HTMLElement>> =
  styled.article;

const Root = rootElement`
  padding: 16px;
  box-sizing: border-box;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 1px -1px rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  background-color: #fffffc;
  width: 300px;
  min-height: 240px;
  margin: 16px;
  position: relative;
  transition: background-color 0.3s;
  &:hover {
    background-color: #f3f3f2;
    cursor: pointer;
  }

  &:after {
    content: '${props => props.no}';
    text-arign: center;
    position: absolute;
    left: -8px;
    top: -8px;
    font-size: ${props => (props.no < 100 ? '1.2rem' : '1.0rem')};
    opacity: 1;
    width: 24px;
    height: 24px;
    line-height: 2.2rem;
    border-radius: 16px;
    border: 1px solid #a86965;
    color: #a86965;
    box-sizing: border-box;
    background-color: #fdeff2;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 1px 1px -1px rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12);
  }
`;

const Title = styled.div`
  font-size: 2.2rem;
  padding: 8px;
`;

const Price = styled.span`
  font-size: 2.8rem;
  color: #e95464;
`;

const Yen = styled.span`
  font-size: 1.2rem;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
  &:visited {
    color: inherit;
  }
  &:active {
    color: inherit;
  }
}
`;

const TaxPostage = styled.div`
  font-size: 1.2rem;
  padding: 4px;
`;

const CategoryBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
`;

const Category = styled.span`
  font-size: 1.8rem;
  border: 1px solid #123;
  width: 32px;
  height: 32px;
  line-height: 30px;
  border-radius: 16px;
  margin: 0 4px;
`;

const PeopleFromTo = styled.div`
  font-size: 2rem;
`;

const Osechi: React.SFC<OsechiProps> = ({ osechi, no }) => {
  return (
    <Root no={no}>
      <Link href={osechi.url} target="_blank">
        <div>{osechi.catchCopy}</div>
        <Title>{osechi.name}</Title>
        <div>
          <Price>{osechi.price.toLocaleString()}</Price>
          <Yen>円</Yen>
        </div>
        <TaxPostage>{`（${taxAndPostageText(osechi)}）`}</TaxPostage>
        <CategoryBox>
          {osechi.categories.map(ca => (
            <Category>{ca}</Category>
          ))}
        </CategoryBox>
        <PeopleFromTo>{peopleFromToText(osechi)}</PeopleFromTo>
      </Link>
    </Root>
  );
};

export default Osechi;
