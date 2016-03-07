import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  
    constructor() {
        super();
        this.state = { 
             data : {  input: '', collection: ['Adam','James'] }
         };
         
         this.handleClick = this.handleClick.bind(this);
         this.handleChange = this.handleChange.bind(this);
    }
    
    handleClick(e) {
		var state = this.state;
        var isNew = true;
        
        this.state.data.collection.forEach(item => {
            if(state.data.input === item || !String(state.data.input).length ){
                isNew = false;
            }
        });
        
        if( isNew ){
            state.data.collection.push(state.data.input);
            this.setState(state);
        }
     }
    
    handleChange(e){
        var value = e.target.value;
        var state = this.state;
        state.data.input = value;
        this.setState(state);	
	}
            
  render() {
      var data = this.state.data;
      console.log(Math.floor((Math.random() * 10) + 1) + " Render");
      console.log(data.collection);
    
    return (
        <div>
            <p>My List:</p>
            <ul>
                {data.collection.map(item => 
                    <li key={item}>Saved: {item}</li>
                )}
            </ul>
            <p>Add an item</p>
            <input type="text" placeholder="Input some text:" value={data.input} onChange={this.handleChange} />
            <button onClick={this.handleClick}>Click</button>
        </div>
    );
  }
}
  
export default App;

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
