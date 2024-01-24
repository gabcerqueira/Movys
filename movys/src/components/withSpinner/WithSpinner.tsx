import React, {FunctionComponent} from 'react';

import Spinner from '../spinner/Spinner';

interface withSpinnerProps {
  isLoading: boolean;
}

const WithSpinner = <P extends object>(
  WrappedComponent: FunctionComponent<P>,
  LoadingComponent: FunctionComponent<any>,
) => {
  return ({isLoading, ...otherProps}: P & withSpinnerProps) => {
    return isLoading ? (
      LoadingComponent ? (
        <LoadingComponent />
      ) : (
        <Spinner />
      )
    ) : (
      <WrappedComponent {...(otherProps as P)} />
    );
  };
};

export default WithSpinner;
