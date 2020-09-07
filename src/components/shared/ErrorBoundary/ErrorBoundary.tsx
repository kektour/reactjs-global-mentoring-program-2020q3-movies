import React from 'react';
import styles from './ErrorBoundary.module.scss';

type Props = {};
type State = {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return (
        <div className={styles.root}>
          <h1 className={styles.errText}>Error. Something went wrong</h1>;
        </div>
      );
    }

    return this.props.children;
  }
}
