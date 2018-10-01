import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled, { StyledFunction } from 'styled-components';
import { withAppTheme } from '@src/styles';
import OsechiView from '@src/components/Osechi';
import {
  SelectInner,
  SelectTitle,
  SelectWrapper,
  Triangle
} from '@src/components/SearchForm/SelectItem';
import {
  CategoryConditionList,
  Osechi,
  PeopleRangeCondition,
  PeopleRangeConditionList,
  PeopleRangeConditionNameList,
  PriceRangeCondition,
  PriceRangeConditionList,
  PriceRangeConditionNameList,
  SortCondition,
  SortConditionList,
  SortConditionNameList
} from '@src/types';
import { osechiStore } from '@src/store/osechiStore';

export interface SearchProps {
  osechiList: Osechi[];
  peopleRange: PeopleRangeCondition;
  priceRange: PriceRangeCondition;
  sort: SortCondition;
  onChangePeopleRange: (peopleRange: PeopleRangeCondition) => void;
  onChangePriceRange: (priceRange: PriceRangeCondition) => void;
  onChangeSort: (sort: SortCondition) => void;
}

const Root = styled.section``;

const OsechiList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

const SelectFormRoot = withAppTheme(styled.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 16px 0;
  @media screen and (min-width: ${({ theme }) => theme.minWidthWide}) {
    margin: 0;
    flex-direction: row;
  }
`;

const SelectRoot = withAppTheme(styled.div)`
  text-align: left;
  max-width: 300px;
  min-width: 300px;
  @media screen and (min-width: ${({ theme }) => theme.minWidthWide}) {
    margin: 16px;
  }
`;

const SortRoot = withAppTheme(styled.div)`
  text-align: center;
  max-width: 1000px;
  margin: 0 auto 8px auto;
  padding: 0 16px;
  @media screen and (min-width: ${({ theme }) => theme.minWidthWide}) {
    text-align: right;
  }
`;

const a: StyledFunction<
  { isLeft: boolean } & React.HTMLProps<HTMLAnchorElement>
> = styled.a;

const SortA = a`
  padding: 8px 24px;
  font-size: 1.4rem;
  text-decoration: none;
  color: #ffa000;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: ${props => (props.isLeft ? '5px 0 0 5px' : '0 5px 5px 0')};
  transition: background-color 0.3s;
  &:hover {
    background-color: #f3f3f2;
    cursor: pointer;
  }
`;

const span: StyledFunction<
  { isLeft: boolean } & React.HTMLProps<HTMLSpanElement>
> = styled.a;

const SortSpan = span`
  padding: 8px 24px;
  font-size: 1.4rem;
  color: #fff;
  background-color: #ffb300;
  border: 1px solid #ccc;
  ${props => (props.isLeft ? 'border-right: none' : 'border-left: none')};
  border-radius: ${props => (props.isLeft ? '5px 0 0 5px' : '0 5px 5px 0')};
`;

const CustomSelectWrapper: React.SFC<{ title: string }> = ({
  children,
  title
}) => (
  <SelectRoot>
    <SelectTitle>{title}</SelectTitle>
    <SelectWrapper>
      {children}
      <Triangle focusable="false" viewBox="0 0 24 24">
        <path d="M7 10l5 5 5-5z" />
      </Triangle>
    </SelectWrapper>
  </SelectRoot>
);

const SortLink: React.SFC<
  Pick<SearchProps, 'sort' | 'onChangeSort'> & { current: SortCondition }
> = ({ sort, onChangeSort, current }) => {
  const index = SortConditionList.findIndex(sc => sc === sort);
  const isLeft = sort === SortCondition.PriceLow;

  if (sort === current) {
    return <SortSpan isLeft={isLeft}>{SortConditionNameList[index]}</SortSpan>;
  }

  const onClickSort = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onChangeSort(sort);
  };

  return (
    <SortA href="#" onClick={onClickSort} isLeft={isLeft}>
      {SortConditionNameList[index]}
    </SortA>
  );
};

const Search: React.SFC<SearchProps> = ({
  osechiList,
  peopleRange,
  priceRange,
  sort,
  onChangePeopleRange,
  onChangePriceRange,
  onChangeSort
}) => {
  const onChangePeopleRangeHandler = (
    e: React.SyntheticEvent<HTMLSelectElement>
  ) => {
    const value = e.currentTarget.value;
    onChangePeopleRange(value as PeopleRangeCondition);
  };

  const onChangePriceRangeHandler = (
    e: React.SyntheticEvent<HTMLSelectElement>
  ) => {
    const value = e.currentTarget.value;
    onChangePriceRange(value as PriceRangeCondition);
  };

  return (
    <Root>
      <SelectFormRoot>
        <CustomSelectWrapper title="ご利用人数">
          <SelectInner
            name="peopleRange"
            id="peopleRange"
            value={peopleRange}
            onChange={onChangePeopleRangeHandler}
          >
            {PeopleRangeConditionList.map((pr, i) => {
              return (
                <option value={pr} key={pr}>
                  {PeopleRangeConditionNameList[i]}
                </option>
              );
            })}
          </SelectInner>
        </CustomSelectWrapper>
        <CustomSelectWrapper title="お値段">
          <SelectInner
            name="priceRange"
            id="priceRange"
            value={priceRange}
            onChange={onChangePriceRangeHandler}
          >
            {PriceRangeConditionList.map((pr, i) => {
              return (
                <option value={pr} key={pr}>
                  {PriceRangeConditionNameList[i]}
                </option>
              );
            })}
          </SelectInner>
        </CustomSelectWrapper>
      </SelectFormRoot>
      <SortRoot>
        <SortLink
          sort={SortCondition.PriceLow}
          current={sort}
          onChangeSort={onChangeSort}
        />
        <SortLink
          sort={SortCondition.PriceHigh}
          current={sort}
          onChangeSort={onChangeSort}
        />
      </SortRoot>
      <OsechiList>
        {osechiList.length > 0 ? (
          osechiList.map((osechi, i) => (
            <div key={osechi.code}>
              <OsechiView osechi={osechi} no={i + 1} />
            </div>
          ))
        ) : (
          <div>空だよ</div>
        )}
      </OsechiList>
    </Root>
  );
};

export interface SearchParam {
  category: string;
  peopleRange: string;
  priceRange: string;
}

export type WrappedSearchProps = RouteComponentProps<SearchParam>;

export interface WrappedSearchState {
  sort: SortCondition;
}

class WrappedSearch extends React.Component<
  WrappedSearchProps,
  WrappedSearchState
> {
  constructor(props: WrappedSearchProps) {
    super(props);
    this.state = {
      sort: SortCondition.PriceLow
    };
  }

  public render() {
    const { params } = this.props.match;
    const category = CategoryConditionList.find(ca => ca === params.category);
    const peopleRange = PeopleRangeConditionList.find(
      po => po === params.peopleRange
    );
    const priceRange = PriceRangeConditionList.find(
      po => po === params.priceRange
    );

    if (category && peopleRange && priceRange) {
      const osechiList = osechiStore.where(
        category,
        peopleRange,
        priceRange,
        this.state.sort
      );

      return (
        <Search
          osechiList={osechiList}
          peopleRange={peopleRange}
          priceRange={priceRange}
          sort={this.state.sort}
          onChangePeopleRange={this.onChangePeopleRange}
          onChangePriceRange={this.onChangePriceRange}
          onChangeSort={this.onChangeSort}
        />
      );
    }

    return <div>検索条件が誤っています。前の画面からやり直してください。</div>;
  }

  private onChangePeopleRange = (peopleRange: PeopleRangeCondition) => {
    const { params } = this.props.match;
    this.props.history.push(
      `/categories/${params.category}/${peopleRange}/${params.priceRange}`
    );
  };

  private onChangePriceRange = (priceRange: PriceRangeCondition) => {
    const { params } = this.props.match;
    this.props.history.push(
      `/categories/${params.category}/${params.peopleRange}/${priceRange}`
    );
  };

  private onChangeSort = (sort: SortCondition) => {
    this.setState({ sort });
  };
}

export default withRouter(WrappedSearch);
