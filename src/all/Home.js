import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Menu from './Menu';
class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Menu />

            </div>
        )
    }
}

export default Home;