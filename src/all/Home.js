import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                Hi Home
                <Link to="/routing/javascript">Grid</Link>
            </div>
        )
    }
}

export default Home;