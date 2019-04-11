import React, {Component} from 'react';
import Menu from './Menu';

class My404component extends Component{
    constructor(props) {
        super(props);
    }


    render(){
        return(
            <div>
                <Menu />
                Sorry nothing here :/
            </div>
        )
    }
}

export default My404component;
