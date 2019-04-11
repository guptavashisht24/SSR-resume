import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Main extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        let id = document.getElementById("ham_button");
        id.onclick = function () {
            let navs = document.querySelectorAll('.nav_items')
            navs.forEach(nav => {
                nav.classList.toggle('db')
            })
        }
    }

    render(){
        return(
            <div className="main flx ff">
                <div className="static mt200 ma w100">
                   <div className="fww fs28">
                    HI THERE. LOOKING FOR A WEB DEVELOPER?
                   </div>
                   <div className="fww mt20 fs22">
                    I'M A WEB DEVELOPER BASED IN NOIDA,UTTAR PRADESH
                   </div>
                   <div className="fww mt10 fs22">
                    I BUILD WEB APPLICATIONS USING JAVASCRIPT(React.JS & Node.JS)
                   </div>
                </div>
            </div>
        )
    }
}

export default Main;