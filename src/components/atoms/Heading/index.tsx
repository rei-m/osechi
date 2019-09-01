import React, { useMemo } from 'react';
import styled from '@src/styles/styled-components';
import { ThemeInterface, FontSize } from '@src/styles/theme';

type Level = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const HEADINGS: Array<HeadingElements> = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
const VISUAL_LEVELS: Array<FontSize> = [`ll`, `l`, `m`, `s`, `ss`, `sss`];

export type Props = {
  level?: Level;
  visualLevel?: Level;
  className?: string;
};

export const Heading: React.FC<Props> = ({
  children,
  level = 2,
  visualLevel,
  className,
}) => {
  const Tag = useMemo(() => {
    const fontSizeLevel =
      VISUAL_LEVELS[visualLevel ? visualLevel - 1 : level - 1];
    return styled[HEADINGS[level - 1]]((props: { theme: ThemeInterface }) => ({
      fontWeight: 500,
      margin: 0,
      fontSize: props.theme.fontSize[fontSizeLevel],
    }));
  }, []);
  return <Tag className={className}>{children}</Tag>;
};

export default Heading;
