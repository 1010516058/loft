import React from 'react'

export default class Login extends React.Component{
    constructor(propos){
        super(propos)
        this.state={}
    }
    render(){
        return <div>
                Login
                <button onClick={this.login}>登陆</button>
            </div>
            
       
    }
    //登陆
    login=()=>{
        // this.props.push('/view')
        console.log(this.props)
    }
}