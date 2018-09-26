import * as React from 'react';
import styled from 'styled-components';
import { withFormik, Form, FormikHandlers, FormikState } from 'formik';
import { withAppTheme } from '@src/styles';
import {
  CategoryCondition,
  CategoryConditionList,
  CategoryConditionNameList,
  PeopleRangeCondition,
  PeopleRangeConditionList,
  PeopleRangeConditionNameList,
  PriceRangeCondition,
  PriceRangeConditionList,
  PriceRangeConditionNameList
} from '@src/types';
import SelectItem from './SelectItem';

const SearchButton = withAppTheme(styled.button)`
  margin-top: ${({ theme }) => theme.spacing2x};
  background-color: ${({ theme }) => theme.colorAccent} !important;
  color: white;
  padding: 8px 16px;
  font-size: 1.8rem;
  cursor: pointer;
  border-radius: 4px;
  &:active {
    background-color: ${({ theme }) => theme.colorAccentActive} !important;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colorAccentHover} !important;
  }
`;

export interface SearchFormValues {
  category: string;
  peopleRange: string;
  priceRange: string;
}

export type SearchFormProps = FormikState<SearchFormValues> & FormikHandlers;

const SearchForm = ({ values, handleChange }: SearchFormProps) => (
  <Form style={{ width: 380, margin: '16px auto' }}>
    <SelectItem
      title="おせちのジャンル"
      name="category"
      value={values.category}
      valueList={CategoryConditionList}
      nameList={CategoryConditionNameList}
      handleChange={handleChange}
    />
    <SelectItem
      title="ご利用人数"
      name="peopleRange"
      value={values.peopleRange}
      valueList={PeopleRangeConditionList}
      nameList={PeopleRangeConditionNameList}
      handleChange={handleChange}
    />
    <SelectItem
      title="お値段"
      name="priceRange"
      value={values.priceRange}
      valueList={PriceRangeConditionList}
      nameList={PriceRangeConditionNameList}
      handleChange={handleChange}
    />
    <SearchButton type="submit">おせちをさがす</SearchButton>
  </Form>
);

export interface EnhanceSearchFormProps {
  initialCategory: CategoryCondition;
  initialPeopleRange: PeopleRangeCondition;
  initialPriceRange: PriceRangeCondition;
  handleSubmit: (
    category: CategoryCondition,
    peopleRange: PeopleRangeCondition,
    priceRange: PriceRangeCondition
  ) => void;
}

const EnhanceSearchForm = withFormik({
  handleSubmit: (values, { props }) => {
    props.handleSubmit(
      values.category,
      values.peopleRange as PeopleRangeCondition,
      values.priceRange as PriceRangeCondition
    );
  },
  mapPropsToValues: (props: EnhanceSearchFormProps) => ({
    category: props.initialCategory,
    peopleRange: props.initialPeopleRange.toString(),
    priceRange: props.initialPriceRange.toString()
  })
})(SearchForm);

export default EnhanceSearchForm;
