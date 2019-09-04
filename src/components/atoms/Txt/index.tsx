import React, { useMemo } from 'react';
import styled from '@src/styles/styled-components';
import { FontSize, ThemeInterface } from '@src/styles/theme';

export type Props = {
  tag?: `span` | `cite`;
  size?: FontSize;
  children?: React.ReactNode;
  className?: string;
};

const renderTxt = (
  {
    children,
    tag = `span`,
    size = `m`,
    className,
  }: React.PropsWithChildren<Props>,
  ref: React.Ref<HTMLSpanElement>
) => {
  const Tag = useMemo(() => {
    return styled[tag]((props: { theme: ThemeInterface }) => ({
      fontSize: props.theme.fontSize[size],
    }));
  }, []);
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
};

const Txt = React.forwardRef(renderTxt);

export default Txt;
