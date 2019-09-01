import React from 'react';
import styled from '@src/styles/styled-components';
import Txt from '@src/components/atoms/Txt';
import SingleContentPageTemplate from '@src/components/templates/SingleContentPageTemplate';
import { AppError, UNKNOWN_MESSAGE } from '@src/errors';
import * as dogeza from '@src/images/dogeza_businessman.png';
import { MenuType } from '@src/enums';
import { APP_NAME } from '@src/constants';

export type ErrorBoundaryState = {
  error?: Error;
};

const Container = styled.div(({ theme }) => ({
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  backgroundColor: theme.colorThin,
  flexDirection: `column`,
  boxSizing: `border-box`,
  minHeight: `calc(100vh - ${theme.headerHeight})`,
  [`@media screen and (min-width: ${theme.minWidthWide})`]: {
    minHeight: `calc(100vh - ${theme.headerHeightWide})`,
  },
}));

const DogezaImg = styled.img({
  width: `200px`,
});

export default class ErrorBoundary extends React.Component<
  {},
  ErrorBoundaryState
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      error: undefined,
    };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(errorInfo);
    }
    this.setState({
      error,
    });
  }

  public render() {
    const { error } = this.state;
    if (error) {
      const message =
        error instanceof AppError ? error.message : UNKNOWN_MESSAGE;
      return (
        <SingleContentPageTemplate
          title={`${APP_NAME} - おせち.jp -`}
          description={``}
          keywords={[]}
          currentMenuType={MenuType.All}
        >
          <Container>
            <Txt size={`l`}>{message}</Txt>
            <DogezaImg src={dogeza} alt={message} />
          </Container>
        </SingleContentPageTemplate>
      );
    }
    return this.props.children;
  }
}
