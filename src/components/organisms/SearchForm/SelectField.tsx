import * as React from 'react';
import { Field, FieldProps } from 'formik';
import { FormKeys, FormValues } from '.';
import Select from '@src/components/molecules/Select';

export type Props = {
  label: string;
  name: FormKeys;
  itemList: string[][];
  className?: string;
};

export type ContainerProps = FieldProps<FormValues> & Props;

export type PresenterProps = {
  label: string;
  name: string;
  value: string;
  itemList: string[][];
  onChange: (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => void;
  className?: string;
};

export const Container = ({
  field,
  label,
  itemList,
  className,
}: ContainerProps) => {
  return (
    <Select
      label={label}
      name={field.name}
      value={field.value}
      itemList={itemList}
      onChange={field.onChange}
      className={className}
    />
  );
};

const SelectField = ({ label, name, itemList, className }: Props) => (
  <Field
    label={label}
    name={name}
    itemList={itemList}
    component={Container}
    className={className}
  />
);

export default SelectField;
