import React from 'react'
import styles from '../../css/view.scss'

//引入 ant组件
import { Modal, Button, Icon } from 'antd';
//引入测试图片
import me from '../../imgs/me.jpg'
import bg1 from '../../imgs/bg1.jpg'
export default class View extends React.Component {
    constructor(propos) {
        super(propos)
        this.state = {
            visible: false,
            comment:[],
            myCommentContent:'',
            myComment:'',
        }
    }
    //页面开始前
    componentWillMount(){
        this.getArtDetail()

    }
    
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    //热度
    hots=()=>{
        console.log('hots+1');
    }
    //评论值改变
    changeMyComment=(e)=>{
        this.setState({
            myComment:e.target.value
        })
    }
    //发布留言
    publish=()=>{
        var item ={
            id:'5',
            luser:'我',
            buser:'',
            content:this.state.myComment
        }
        var all=this.state.comment
        all.push(item)
        this.setState({
            comment:all
        })
    }
    
    //获取文章详情
    getArtDetail=()=>{
        this.setState({
            comment:[{
                id:'1',
                luser:'我',
                buser:'你',
                content:'哈哈哈哈哈哈哈哈'
            },{
                id:'2',

                luser:'我',
                buser:'你',
                content:'哈哈哈哈哈哈哈哈'
            },{
                id:'3',

                luser:'我',
                buser:'你',
                content:'哈哈哈哈哈哈哈哈'
            },{
                id:'4',

                luser:'我',
                buser:'你',
                content:'哈哈哈哈哈哈哈哈'
            }]
        })
    }
    //评论组件
    renderCommentList=()=>{
        return this.state.comment.map(item=>{
            return item.buser?<li key={item.id}><a href="">{item.luser}</a>  回复了 <a href="">{item.buser}</a>  {item.content} <span style={{float:'right',marginRight:'50px',color:'##1890ff'}}>回复</span></li>:<li key={item.id}><a href="">{item.luser}</a>   {item.content} <span style={{float:'right',marginRight:'50px',color:'##1890ff'}}>回复</span></li>
        })
    }
    render() {
        return <div style={{ width: '1280px' }}>
            {/* 循环开始 */}
            <div className={styles.userinfo}>
                <div className={styles.follow}>
                    <div className={styles.user}>
                        <img src={me} alt="" />
                    </div>
                    <div className={styles.username}>J-Lens</div>
                    <div className={styles.adduser}>关注</div>

                </div>
                <div className={styles.content} onClick={this.showModal}>
                    <img src={bg1} alt="" />
                </div>
                <div className={styles.footer}>&nbsp;&nbsp;❤️&nbsp;&nbsp;585人喜欢</div>
            </div>
            {/* 循环结束 */}
            <Modal
                title={
                    <div style={{ height: '50px', padding: '15px', paddingTop: '0px' }}>
                        <div style={{ float: 'left' }}>
                            <img src={me} alt="" style={{ width: '46px', height: '46px' }} />
                        </div>
                        <div style={{ float: 'left', fontSize: '24px', lineHeight: '50px', marginLeft: '15px', marginRight: '15px', paddingBottom: '0px' }}>
                            一只鱼鱼鱼
                        </div>
                        <div style={{ float: 'left', height: '40px', background: '#84af00', color: 'white', fontSize: '16px', width: '104px', lineHeight: '40px', textAlign: 'center', fontWeight: 'bolder', borderRadius: '5px' }}>
                            <Icon type="plus" />关注
                        </div>
                    </div>
                }
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                width='924px'
            >
                <div className={styles.bigImg}>
                    <img src={bg1} alt="" />
                    <img src={bg1} alt="" />
                    
                    {/* <div style={{ padding: '20px',paddingBottom:'0px' }}>
                        ㊙️零难度‼️三步搞定海盐芝士奶盖‼️超好喝
                    </div> */}
                    <div className={styles.artFooter} style={{ padding: '20px' }}>
                        <div className={styles.artFooterTags}>
                            <div><Icon type="tag" style={{ marginRight: '5px' }} />
                                <span style={{ marginRight: '5px' }}>情人节</span>
                                <span style={{ marginRight: '5px' }}>告白</span>
                            </div>
                        </div>
                        <div className={styles.artFooterOther}>
                            <div className={styles.hots}>热度(116) <Icon type="like" style={{cursor:'pointer'}} onClick={this.hots} /> </div>
                            <div className={styles.comment}>评论(10)</div>
                        </div>
                    </div>
                    <div className={styles.comment} style={{ width: '924px',background:'#fafafa',float:'left',paddingTop:'20px' }}>
                        <input type="text" style={{ width: '70%', height: '40px',marginBottom:'10px', border:'1px solid #cececf',marginLeft:'50px',marginRight:'10px', display: 'inner-block',lineHeight:'40px', float: 'left' }} onChange={this.changeMyComment} />
                        <div onClick={this.publish} style={{  cursor:'pointer',height: '40px', background: '#779e00', color: '#fff',lineHeight:'40px', display: 'inner-block', float: 'left', width: '106px', textAlign: 'center', fontSize: '18px' }}>发布</div>
                        <div style={{float:'left',width:'100%'}}>
                            <ul style={{padding:'0px',margin:'0px',listStyle:'none',width:'100%'}} className={styles.comUl}>
                               {this.renderCommentList()} 
                            </ul>
                        </div>
                    </div>
                </div>

            </Modal>
            <div className={styles.userinfo}>
                <div className={styles.follow}>
                    <div className={styles.user}>
                        <img src={me} alt="" />
                    </div>
                    <div className={styles.username}>J-Lens</div>
                    <div className={styles.adduser}>关注</div>

                </div>
                <div className={styles.content}>
                    <img src={bg1} alt="" />
                </div>
                <div className={styles.footer}>&nbsp;&nbsp;❤️&nbsp;&nbsp;585人喜欢</div>
            </div>
            <div className={styles.userinfo}>
                <div className={styles.follow}>
                    <div className={styles.user}>
                        <img src={me} alt="" />
                    </div>
                    <div className={styles.username}>J-Lens</div>
                    <div className={styles.adduser}>关注</div>

                </div>
                <div className={styles.content} >
                    <img src={bg1} alt="" />
                </div>
                <div className={styles.footer}>&nbsp;&nbsp;❤️&nbsp;&nbsp;585人喜欢</div>
            </div>
            <div className={styles.userinfo}>
                <div className={styles.follow}>
                    <div className={styles.user}>
                        <img src={me} alt="" />
                    </div>
                    <div className={styles.username}>J-Lens</div>
                    <div className={styles.adduser}>关注</div>

                </div>
                <div className={styles.content}>
                    <img src={bg1} alt="" />
                </div>
                <div className={styles.footer}>&nbsp;&nbsp;❤️&nbsp;&nbsp;585人喜欢</div>
            </div>
            <div className={styles.userinfo}>
                <div className={styles.follow}>
                    <div className={styles.user}>
                        <img src={me} alt="" />
                    </div>
                    <div className={styles.username}>J-Lens</div>
                    <div className={styles.adduser}>关注</div>

                </div>
                <div className={styles.content}>
                    <img src={bg1} alt="" />
                </div>
                <div className={styles.footer}>&nbsp;&nbsp;❤️&nbsp;&nbsp;585人喜欢</div>
            </div>
            <div className={styles.userinfo}>
                <div className={styles.follow}>
                    <div className={styles.user}>
                        <img src={me} alt="" />
                    </div>
                    <div className={styles.username}>J-Lens</div>
                    <div className={styles.adduser}>关注</div>

                </div>
                <div className={styles.content}>
                    <img src={bg1} alt="" />
                </div>
                <div className={styles.footer}>&nbsp;&nbsp;❤️&nbsp;&nbsp;585人喜欢</div>
            </div>
        </div>


    }
}