import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Menu extends Component{
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
            <div className="menu">
                <div>
                <div className="wM dib">
                    <img src="vg.jpg" height="35" width="35" className="profile"></img>
                </div>
                <div className="wM dib">
                    Vashisht Gupta<br/>
                    Software Developer
                </div>
                </div>
                <div className="wM wM_toggle" id="ham_button">
                    <i className="fas fa-bars"></i>
                </div>
                <nav className="nav_items right_nav">
                <div className="wM">
                    About
                </div>
                <div className="wM">
                    Tools
                </div>
                    <div className="wM">
                        Contact Me
                    </div>
                </nav>

            </div>
        )
    }
}

export default Menu;