import React from 'react';
import styled from '@src/styles/styled-components';
import Heading from '@src/components/atoms/Heading';
import Txt from '@src/components/atoms/Txt';
import { Osechi } from '@src/types';
import { affiliateUrl, siteIdToSite } from '@src/utils';

export type Props = {
  osechi: Osechi;
  className?: string;
};

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

const Container = styled.article({
  position: `relative`,
  boxSizing: `border-box`,
  backgroundColor: `#fffffc`,
  width: `300px`,
  minHeight: `240px`,
  transition: `background-color 0.3s`,
  '&:hover': {
    backgroundColor: `#f3f3f2`,
    cursor: `pointer`,
  },
});

const Link = styled.a(({ theme }) => ({
  display: 'block',
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  color: `inherit`,
  textDecoration: `none`,
  '&:hover': {
    color: `inherit`,
    textDecoration: `none`,
  },
  '&:visited': {
    color: `inherit`,
    textDecoration: `none`,
  },
  '&:active': {
    color: `inherit`,
    textDecoration: `none`,
  },
}));

const OsechiName = styled(Heading)(({ theme }) => ({
  padding: theme.spacing(1),
}));

const Price = styled.span({
  fontSize: `2.8rem`,
  color: `#e95464`,
});

const TaxPostage = styled(Txt)(({ theme }) => ({
  padding: theme.spacing(0.5),
}));

const CategoryBox = styled.div(({ theme }) => ({
  display: `flex`,
  justifyContent: `center`,
  padding: theme.spacing(1),
}));

const Category = styled.span(({ theme }) => ({
  fontSize: `1.8rem`,
  border: `1px solid #123`,
  width: `32px`,
  height: `32px`,
  lineHeight: `3rem`,
  borderRadius: theme.spacing(2),
  margin: `0 ${theme.spacing(0.5)}`,
}));

const SiteName = styled(Txt)(({ theme }) => ({
  color: `#fff`,
  position: `absolute`,
  top: 0,
  right: 0,
  padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
  backgroundColor: `#887f7a`,
}));

const OsechiCard = ({ osechi, className }: Props) => {
  return (
    <Container className={className}>
      <Link
        href={affiliateUrl(osechi)}
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <SiteName size={`sss`} tag={`cite`}>{`掲載サイト: ${
          siteIdToSite(osechi.siteId).name
        }`}</SiteName>
        <div>{osechi.catchCopy}</div>
        <OsechiName level={3} visualLevel={1}>
          {osechi.name}
        </OsechiName>
        <div>
          <Price>{osechi.price.toLocaleString()}</Price>
          <Txt size={`ss`}>円</Txt>
        </div>
        <TaxPostage size={`ss`}>{`（${taxAndPostageText(
          osechi
        )}）`}</TaxPostage>
        <CategoryBox>
          {osechi.categories.map(ca => (
            <Category key={ca}>{ca}</Category>
          ))}
        </CategoryBox>
        <Txt size={`ll`}>{peopleFromToText(osechi)}</Txt>
      </Link>
    </Container>
  );
};

export default OsechiCard;
