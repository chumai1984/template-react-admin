import React from 'react';
import { connect } from "dva";

class basicInfo extends React.Component<any>{
  state = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>基本信息page</div>
    );
  }
}

export default connect(({ loading }: any) => ({ loading }))(basicInfo)
