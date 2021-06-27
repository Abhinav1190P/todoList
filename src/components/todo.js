import React, { Component } from 'react'
import '../css/style.css'
import FontAwesome from 'react-fontawesome'

class Todo extends Component {

state = {
 inputVal: '',
 list:[]
}


inputHandle = (event) =>{
event.preventDefault()

    this.setState({
        inputVal: event.target.value
    })


}


incre = (event) =>{
    event.preventDefault()
  if(this.state.inputVal === ''){
      alert("Pls enter one activity")
  }
else{
    let tempList = [...this.state.list,this.state.inputVal]
    this.setState({
list: tempList,
inputVal: ''
    }) 
}



}


deleteItem = (number) =>{
    
    let cloneArray = [...this.state.list]
 cloneArray.splice(number,1)

 this.setState({
     list: cloneArray
 })
}


 setTemp = (data) =>{

    return data.list.map((item,i)=>{
        return(
           <div key = {i}>
               <br/> 
               <div className = "temp">
                               
{item} <a href= "#test" onClick = {()=>{this.deleteItem(i)}}><FontAwesome className ="fas fa-times"/> </a>
               </div>
               <br/>
           </div>

       
        )
 
     })

  }

    render() {
   
        return (
            <div>
<div className = "head">
    <h1>Todo List</h1>
</div>                

<div className = "buttAndIn">
    <div>
<input className="inp" type = "text" onChange ={this.inputHandle} value = {this.state.inputVal} placeholder = "Enter things to do"/>
    </div>
    <div>
        <a className= "aref" onClick = {this.incre} href = "#ok"><FontAwesome className= "fas fa-plus"/> </a>
        
    </div>
</div>

<div>


<div>
{this.setTemp(this.state)}
</div>


</div>



            </div>
        )
    }
}

export default Todo

