import React from 'react'

import fetchJSONP from 'fetch-jsonp'
import axios from 'axios'
export default class Test extends React.Component{
    constructor(propos){
        super(propos)
        this.state={
            number:1,
            nums:[
                {
                    number:'1'
                },
                {
                    number:'2'
                },
                {
                    number:'3'
                }
            ]
        }
    }
    render(){
        return <div>
                <button onClick={this.increment}> +1</button>
                <button onClick={this.updateItem}> updateItem</button>
                <button onClick={this.getJSON}> getJSON</button>
                <hr/>
                <p>
                    value:{this.state.number}
                </p>
                <ul>
                    {this.getMap()}
                </ul>  
            </div>
            
       
    }
    getMap(){
        return this.state.nums.map(item=>{
        return <li>{item.number}</li> 
        })
    }
    updateItem=()=>{
        var item={number:'4'}
        var all=this.state.nums
        all.push(item)
        console.log(all)
        this.setState({
            nums:all
        })
        

    }
    increment=()=>{
        this.setState({
            number:this.state.number+1
        })
    }
    getJSON=()=>{
        var url='http://127.0.0.1:8888/MAMP/www/lofter/tp5/public/index.php'
        // var url='https://douban.uieee.com/v2/movie/coming_soon'
        axios({
            method:'get',
            baseURL:url
        }).then(res=>{
            console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }

}