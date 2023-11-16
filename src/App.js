import React from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import Scroll from './Scroll.js';
import ErrorBoundry from './ErrorBoundry.js';
import './App.css';


class App extends React.Component{
    constructor(){
        super();
        this.state={
            robots:[] ,
            Searchfield:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(responsive => responsive.json()).then(users =>
            this.setState({robots:users})
        )
    }

    onSearchChange = (event) => {
        this.setState({Searchfield : event.target.value});
    }
    render(){
        const FilteredRobot=this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.Searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1>LOADING</h1>
        } else{
            return (
                <div className='tc'>
                    <h1 className='f1'>Robo Friends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={FilteredRobot}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
        }
      
}


export default App;