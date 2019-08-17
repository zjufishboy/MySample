import React from 'react';
import './css/common.css';
import './App.css';
import Sample from './Component/Sample/Sample';
import { Icon } from 'antd';
import { BrowserRouter as Router,Route} from 'react-router-dom';


function App() {
  return (
    <div className="ccFlexColumn">
        <p>this is the Sample of FishStar's Project</p>
        <p><Icon type="logout" />这里是游鱼星的React项目模板(+AntD+Router)</p>
        <Router >
          <Route exact path="/" component={Sample}/>
          <Route exact path="/test" component={(routeProps)=><Sample {...routeProps} content={"测试"}/>} />
          <Route exact path="/test/:id" component={(routeProps)=><Sample {...routeProps} content={"测试"}/>} />
        </Router>
    </div>
  );
}

export default App;
