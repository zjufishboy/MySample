import React from 'react';
import './css/common.css';
import './App.css';
import Sample from './Component/Sample/Sample';
import { Icon } from 'antd';


function App() {
  return (
    <div className="ccFlexColumn">
        <p>this is the Sample of FishStar's Project</p>
        <p><Icon type="logout" />这里是游鱼星的React项目模板(+AntD)</p>
        <Sample/>
    </div>
  );
}

export default App;
