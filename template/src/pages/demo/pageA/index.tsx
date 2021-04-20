import React from 'react';
import { connect } from "dva";
// inbiz-tool引入及使用
import {isArray, isObject, isEmoptyObject, isBoolean, array, date, math, tool} from 'inbiz-toolkit';

class searchView extends React.Component<any>{
  state = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        pageAAA html~ 
        <p>
           {JSON.stringify(math.divs(4.5, 2,3,4,5,5,8))}
         </p>
      </div>
    );
  }
}

export default connect(({ loading }: any) => ({ loading }))(searchView)
