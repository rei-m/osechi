import * as React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { lifecycle } from 'recompose';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import OsechiView from '@src/components/Osechi';
import { GlobalState } from '@src/reducers';
import { Osechi } from '@src/types';
import { searchOsechi } from '@src/actions/osechi';

export type SearchOwnProps = RouteComponentProps<{}>;

export interface SearchConnectedProps {
  osechiList: Osechi[];
}

export interface SearchDispatchProps {
  onStart: () => void;
}

export type SearchProps = SearchOwnProps &
  SearchConnectedProps &
  SearchDispatchProps;

const mapStateToProps = (
  { osechiState }: GlobalState,
  props: SearchOwnProps
): SearchOwnProps & SearchConnectedProps => {
  return {
    ...props,
    osechiList: osechiState.searchResult
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<GlobalState, {}, any>,
  props: SearchOwnProps
): SearchDispatchProps => ({
  onStart: () => {
    const query = props.location.search.substr(1);
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
        dispatch(searchOsechi(category, peopleRange, priceRange));
      }
    }
  }
});

const Search: React.SFC<SearchProps> = ({ osechiList }) => {
  return (
    <div>
      {osechiList.map(osechi => (
        <OsechiView osechi={osechi} key={osechi.code} />
      ))}
    </div>
  );
};

const Enhanced = lifecycle<SearchProps, {}>({
  componentDidMount() {
    this.props.onStart();
  }
})(Search);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Enhanced)
);
