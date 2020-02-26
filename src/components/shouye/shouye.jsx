import React from 'react'

import styles from '../../css/index.scss'

//引入测试图片
import touxiang from '../../imgs/touxiang.jpg';
import avator from '../../imgs/avator.jpg';
import artImg from '../../imgs/artImg.jpg';
import { Card,Icon,Modal} from 'antd';

//引入编辑器
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

//引入fetchjsonp
import fetchJsonp from 'fetch-jsonp';

export default class Index extends React.Component{
    constructor(propos){
        super(propos)
        this.state={
            visible: false,
            editorState: EditorState.createEmpty(),
        }
    }
    //文本编辑器
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };
    //弹出层
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())));
        // this.setState({
        //     visible: false,
        // });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    //上传图片
    uploadImageCallBack = (file) => {
        console.log(file)
        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }
        fetchJsonp('/users.jsonp', settings)
            .then(function (response) {
                return response.json()
            }).then(function (data) {
                console.log(data)
            }).catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }
    render(){
        return <div style={{width: '928px'}}>
                <div style={{ background: '#ededef', minHeight: 280, height: '100%' }}>
                        <div className={styles.left}>
                            <div className={styles.leftHeader}>
                                <div>
                                    <img src={touxiang} alt="" style={{ width: '110px', height: '110px' }} />

                                </div>
                                <div>
                                    <p onClick={this.showModal}><Icon type="font-size" style={{ marginRight: '5px', marginLeft: '10px' }} />文字</p>
                                </div>
                                <div><Icon type="camera" style={{ marginRight: '5px' }} />图片</div>
                            </div>
                            <Modal
                            title="一只鱼鱼鱼"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            okButtonProps={{ disabled: false }}
                            cancelButtonProps={{ disabled: false }}

                        >
                            <div style={{ height: '500px' }}>
                                <Editor
                                    editorState={this.state.editorState}
                                    wrapperClassName="demo-wrapper"
                                    editorClassName="demo-editor"
                                    onEditorStateChange={this.onEditorStateChange}
                                    toolbar={{
                                        image: {
                                            urlEnabled: true,
                                            uploadEnabled: true,
                                            alignmentEnabled: true,
                                            uploadCallback: this.uploadImageCallBack,
                                            previewImage: true,
                                            inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                                            alt: { present: true, mandatory: true },
                                            defaultSize: {
                                                height: 'auto',
                                                width: 'auto',
                                            },
                                        },
                                    }}
                                />

                            </div>
                        </Modal>
                            <div className={styles.main}>
                                <div className={styles.item}>
                                    <div className={styles.avator}>
                                        <img src={avator} alt="" />
                                    </div>
                                    <div className={styles.content}>
                                        <h4 style={{ color: '#666', fontSize: '14px', fontWeight: 'normal' }}>LOFTER元气客服</h4>
                                        <div className="artContent">
                                            <div className="artMain">
                                                <div className={styles.artMainImg}>
                                                    <img src={artImg} alt="" />
                                                </div>
                                                <div className={styles.artMainText} ref="myInput">
                                                    <p>


                                                        给你喜欢的人传达爱意，不一定需要面对面，在特殊时期一个电话或者一条信息也就足够了，过个云情人节吧
                                                        给你喜欢的人传达爱意，不一定需要面对面，在特殊时期一个电话或者一条信息也就足够了，过个云情人节吧
                                                        给你喜欢的人传达爱意，不一定需要面对面，在特殊时期一个电话或者一条信息也就足够了，过个云情人节吧
                                                        给你喜欢的人传达爱意，不一定需要面对面，在特殊时期一个电话或者一条信息也就足够了，过个云情人节吧
                                                </p>
                                                    <div className={styles.open}>展开&nbsp;<Icon type="down" style={{ fontWeight: 'bolder', fontSize: '16px', color: '#888' }} /></div>

                                                </div>
                                            </div>
                                            <div className={styles.artFooter}>
                                                <div className={styles.artFooterTags}>
                                                    <div><Icon type="tag" style={{ marginRight: '5px' }} />
                                                        <span style={{ marginRight: '5px' }}>情人节</span>
                                                        <span style={{ marginRight: '5px' }}>告白</span>
                                                    </div>
                                                </div>
                                                <div className={styles.artFooterOther}>
                                                    <div className={styles.hots}>热度(116)</div>
                                                    <div className={styles.comment}>评论(10)</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <div className={styles.avator}>
                                        <img src={avator} alt="" />
                                    </div>
                                    <div className={styles.content}>
                                        <h4 style={{ color: '#666', fontSize: '14px', fontWeight: 'normal' }}>LOFTER元气客服</h4>
                                        <div className="artContent">
                                            <div className="artMain">
                                                <div className={styles.artMainImg}>
                                                    <img src={artImg} alt="" />
                                                </div>
                                                <div className={styles.artMainText} ref="myInput">
                                                    <p>
                                                        给你喜欢的人传达爱意，不一定需要面对面，在特殊时期一个电话或者一条信息也就足够了，过个云情人节吧
                                                        给你喜欢的人传达爱意，不一定需要面对面，在特殊时期一个电话或者一条信息也就足够了，过个云情人节吧
                                                        给你喜欢的人传达爱意，不一定需要面对面，在特殊时期一个电话或者一条信息也就足够了，过个云情人节吧
                                                        给你喜欢的人传达爱意，不一定需要面对面，在特殊时期一个电话或者一条信息也就足够了，过个云情人节吧
                                                        给你喜欢的人传达爱意，不一定需要面对面，在特殊时期一个电话或者一条信息也就足够了，过个云情人节吧
    
                                                </p>
                                                    <div className={styles.open}>展开&nbsp;<Icon type="down" style={{ fontWeight: 'bolder', fontSize: '16px', color: '#888' }} /></div>

                                                </div>
                                            </div>
                                            <div className={styles.artFooter}>
                                                <div className={styles.artFooterTags}>
                                                    <div><Icon type="tag" style={{ marginRight: '5px' }} />
                                                        <span style={{ marginRight: '5px' }}>情人节</span>
                                                        <span style={{ marginRight: '5px' }}>告白</span>
                                                    </div>
                                                </div>
                                                <div className={styles.artFooterOther}>
                                                    <div className={styles.hots}>热度(116)</div>
                                                    <div className={styles.comment}>评论(10)</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <Card title="一只鱼鱼鱼" style={{ width: 230 }} className={styles.card}>
                                <p>文章(20)</p>
                                <p>关注(20)</p>
                            </Card>
                        </div>
                    </div>
            </div>
            
       
    }
}