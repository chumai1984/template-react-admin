import React from 'react';
import { connect } from "dva";

class myApp extends React.Component<any>{
  state = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        我的站点page~ 
      </div>
    );
  }
}

export default connect(({ loading }: any) => ({ loading }))(myApp)