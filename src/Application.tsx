import * as React from 'react';
import {
  withRouter,
  Route,
  RouteComponentProps,
  Switch
} from 'react-router-dom';
import * as ReactGA from 'react-ga';
import { lifecycle } from 'recompose';
import Root from '@src/containers/Root';
import Search from '@src/containers/Search';
import NotFound from '@src/components/NotFound';
import ErrorBoundary from '@src/components/ErrorBoundary';
import Home from '@src/containers/Home';
import SiteMaps from '@src/components/SiteMaps';
import { ROUTE_PATHS } from '@src/constants';

const Application = (_props: RouteComponentProps<{}>) => (
  <ErrorBoundary>
    <Root>
      <Switch>
        <Route exact path={ROUTE_PATHS.ROOT} component={Home} />
        <Route path={ROUTE_PATHS.CATEGORY} component={Search} />
        <Route exact path={ROUTE_PATHS.SITE_MAPS} component={SiteMaps} />
        <Route component={NotFound} />
      </Switch>
    </Root>
  </ErrorBoundary>
);

const Enhanced = lifecycle<RouteComponentProps<{}>, {}>({
  componentDidUpdate(prevProps: RouteComponentProps<{}>) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
      if (process.env.NODE_ENV === 'production') {
        ReactGA.pageview(location.pathname + location.search);
      } else {
        console.dir(`page move to ${location.pathname + location.search}`);
      }
    }
  }
})(Application);

export default withRouter(Enhanced);
