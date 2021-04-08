import React from 'react';
import { connect } from 'dva';
// import logo from '../assets/logo.svg';
import styles from './layout.scss';


class UserLayout extends React.Component {
  state = {}

  render() {
    const { children } = this.props;
    return (
      <div className={styles.container}>
        <div>
          {children}
        </div>
      </div>
    );
  }
};

export default connect(({ global }: any) => ({ global }))(UserLayout);
