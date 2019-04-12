import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Lang from './Lang'

class Tools extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div className="flx">
         <div className="m50 w100">
            <div className="ff bg ma fws fs24 ml20">
            </div>

         </div>
             <div className="w100">
                <div className="ff cl pl10 fs24">
                    I'm a Computer Science graduate specialising in front end development, with the prime aim of building seamless user experiences on the web.
                </div>
             </div>
            <div className="w100 tc ff m50 fs22">
                Tools,Languages and Frameworks
            </div>
            <Lang url="React.png" name="ReactJS"/>
            <Lang url="node.png" name="NodeJS"/>
            <Lang url="javascript.png" name="Javascript"/>
            <Lang url="redux.jpg" name="Redux"/>
            <Lang url="python.png" name="Python"/>
            <Lang url="php.jpeg" name="PHP"/>
            <Lang url="yii.jpeg" name="Yii"/>
            <Lang url="html.png" name="HTML"/>
            <Lang url="css.png" name="CSS"/>
        </div>
        )
    }
}

export default Tools;