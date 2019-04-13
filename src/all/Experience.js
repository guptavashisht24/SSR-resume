import React, {Component} from 'react';
import Card from './Card';

class Experience extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="flx">
                <div className="w100 tc ff m50 fs22">
                    Professional Experience
                </div>
                <Card/>
            </div>
        )
    }
}

export default Experience;