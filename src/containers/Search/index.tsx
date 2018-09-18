import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import OsechiView from '@src/components/Osechi';
import { Osechi } from '@src/types';
import { osechiStore } from '@src/store/osechiStore';

export interface SearchProps {
  osechiList: Osechi[];
}

const Search: React.SFC<SearchProps> = ({ osechiList }) => {
  return (
    <div>
      {osechiList.map(osechi => (
        <OsechiView osechi={osechi} key={osechi.code} />
      ))}
    </div>
  );
};

const WrappedSearch: React.SFC<RouteComponentProps<{}>> = ({ location }) => {
  const query = location.search.substr(1);
  const params = query.split('&');
  if (params.length === 3) {
    const paramMap: { [key: string]: string | undefined } = {};
    params.forEach(param => {
      const kv = param.split('=');
      if (kv.length === 2) {
        paramMap[kv[0]] = kv[1];
      }
    });
    const category = paramMap.ca;
    const peopleRange = paramMap.ppr;
    const priceRange = paramMap.prr;
    if (category && peopleRange && priceRange) {
      const osechiList = osechiStore.where(category, peopleRange, priceRange);
      return <Search osechiList={osechiList} />;
    }
  }
  return <div>unko</div>;
};

export default withRouter(WrappedSearch);
