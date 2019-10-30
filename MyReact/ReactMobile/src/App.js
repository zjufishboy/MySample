import React from 'react';
import './css/common.css';
import './App.css';
import Sample from './Component/Sample/Sample';
import Intro from './Page/Intro/Intro'
import { Icon } from 'antd';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import QNavBar from './Component/NavBar/QNavBar';
import Recruit from './Page/Recruit/Recruit';
/*这里是功能列表的上层内容 */
const functlist=[
  {name:"首页",to:"/",icon:'home'},
  {name:"交易大厅",to:"/Tran",icon:'user-add'},
  {name:"个人主页",to:"/Me",icon:'user'},
]

function App() {
  
  return (
    <div className="ccFlexColumn">
        <Router >
          <QNavBar title={"PatentY"} functlist={functlist}/>
          <Route exact path="/" component={(routeProps)=><Intro {...routeProps} />}/>
          <Route exact path="/Tran" component={(routeProps)=><Recruit {...routeProps} content={"测试"}/>} />
          <Route exact path="/funct" component={(routeProps)=><Sample {...routeProps} content={"测试"}/>} />
        </Router>
    </div>
  );
}

export default App;
