import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Menu from './Menu';
import Main from './Main';
import Tools from './Tools';
import Experience from './Experience';

class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Menu />
                <Main />
                <Tools />
                <Experience/>
            </div>
        )
    }
}

export default Home;