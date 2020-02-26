import React from 'react'
import { Layout, Menu, Breadcrumb, Input, Card, Row, Col, Icon, Modal, Button,Tabs } from 'antd';

const { Header, Content, Footer } = Layout;
const { Search } = Input;
const { TabPane } = Tabs;

//引入css
import styles from './css/index.scss'

//引入测试图片
import touxiang from './imgs/touxiang.jpg';
import avator from './imgs/avator.jpg';
import artImg from './imgs/artImg.jpg';

//导入路由组件
import { HashRouter, Route, Link ,Switch} from 'react-router-dom'





//引入其他组件
import Index from './components/shouye/shouye'
import View from './components/view/View'
import Recommend from './components/recommend/Recommend'
import Activity from './components/activity/Activity'
import Login from './components/user/login';

export default class App extends React.Component {
    constructor(propos) {
        super(propos)
        this.state = {
            

        }
    }
    
    componentDidMount() {
        console.log(this)
    }
    render() {

        return <HashRouter>
            <Switch>
                <Route  component={Login}></Route>
                <Layout className="layout" style={{ height: '100%', background: '#ededef' }}>

            <Header className={styles.head}>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">
                        <div style={{ fontSize: '40px' }}>LOFTER</div>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/home">首页</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to="/view">浏览</Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to="/activity">话题</Link>

                    </Menu.Item>
                    <Menu.Item key="6">
                        <Link to="/recommend">达人</Link>

                    </Menu.Item>
                    <Menu.Item key="7" style={{ marginLeft: '20%' }}>
                        <Search
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            style={{ width: 200 }} /></Menu.Item>
                    
                    {/* <Button icon="search" style={{float:'right',lineHeight:'30px',height:'30px',marginTop:'25px',width:'184px',color:'#868686',background:'black',border:'none',borderRadius:'30px'}}>Search</Button> */}
                    {/* <input type="text" icon="search" style={{ float: 'right', lineHeight: '30px', height: '30px', marginTop: '25px', width: '184px', color: '#868686', background: 'black', border: 'none', borderRadius: '30px' }} /> */}
                </Menu>

            </Header>
            <Content style={{ padding: '0 50px', display: 'inline-block', float: 'left', height: '100%', margin: '0 auto', padding: '0 20px' }}>
                <Route path="/home" component={Index}></Route>
                <Route path="/view" component={View}></Route>
                <Route path="/recommend" component={Recommend}></Route>
                <Route path="/activity" component={Activity}></Route>

            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by Ant UED</Footer>
        </Layout>
            </Switch>

        
    </HashRouter>


    }
    //判断是否登陆,登陆了显示首页没登录显示登陆页面
    isLogin=()=>{
        if(true){
            return <Login></Login>
        }else{
         
        }
    }
    
    
}