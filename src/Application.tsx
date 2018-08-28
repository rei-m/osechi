import * as React from 'react';
import {
  withRouter,
  Route,
  RouteComponentProps,
  Switch
} from 'react-router-dom';
import * as ReactGA from 'react-ga';
import { lifecycle } from 'recompose';
// import Root from '@src/containers/Root';
// import TrainignsIndex from '@src/containers/Trainings';
// import ExamIndex from '@src/containers/Exam';
// import ExamQuestionsIndex from '@src/containers/ExamQuestions';
// import KarutasIndex from '@src/containers/Karutas';
// import KarutasShow from '@src/containers/Karutas/Show';
// import TrainingQuestionsIndex from '@src/containers/TrainingQuestions';
// import MenuSection from '@src/components/MenuSection';
// import AboutSection from '@src/components/AboutSection';
import NotFound from '@src/components/NotFound';
import ErrorBoundary from '@src/components/ErrorBoundary';
import { ROUTE_PATHS } from '@src/constants';

const temp = () => <div>unko</div>;

const Application = (_props: RouteComponentProps<{}>) => (
  <ErrorBoundary>
    <div>
      <Switch>
        <Route exact path={ROUTE_PATHS.ROOT} component={temp} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </ErrorBoundary>
);
const Enhanced = lifecycle<RouteComponentProps<{}>, {}>({
  componentDidUpdate(prevProps: RouteComponentProps<{}>) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      ReactGA.pageview(location.pathname + location.search);
    }
  }
})(Application);

export default withRouter(Enhanced);
