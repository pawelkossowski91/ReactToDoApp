import React from 'react';
import ReactDOM from 'react-dom';
// TO DO
{/*<p>Version 2.0 is <strike>not yet available!</strike> now available!</p>*/}
// 12:33

class ToDoList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userInput:'',
            list: [],
            myBackgroundColor: "#cf9a35",
            display0: 'block',
        }
    }
    changeUserInput(input){
        this.setState({
            userInput: input,
            BackgroundColor: '#cf9a35',
        },()=>console.log(input))
    }


    addToList(input){
        let listArray = this.state.list;



        listArray.push(input);

        this.setState({
            list: listArray,
            userInput:''
        })
    }

    onLinkClicked(event){
        event.preventDefault();
        this.setState({display0:'none'});
        console.log('dziala');
    }


    render() {
        return (
          <div className='to-do-list-main'>
              <input
                  // placeholder="what You should do?"
                  placeholder="  type things to do."
              onChange={ (e)=>this.changeUserInput(e.target.value) }
              value={this.state.userInput}
              type="text"/><p>   </p>
              <button onClick={ ()=>this.addToList(this.state.userInput) }>Add.</button>

            <ul>
                <hr/>
                {/*{this.state.list.map((val)=> <li>{' '}{val} </li> )}*/}
                {this.state.list.map((val)=> <li>{' '}{val} <button style={{display: this.state.display00}} onClick={(event)=> this.onLinkClicked(event)}>done!</button></li> )}

            </ul>

          </div>
        );
    }
}


ReactDOM.render(<ToDoList text=" przekaz" />, document.getElementById('root'));