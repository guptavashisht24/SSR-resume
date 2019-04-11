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
            <div className="bg-img">
            <div className="menu">

                <div className="wM">
                    Vashisht
                </div>
                <div className="wM wM_toggle" id="ham_button">
                    <i className="fas fa-bars"></i>
                </div>
                <nav className="nav_items">
                <div className="wM">
                    Home
                </div>
                <div className="wM">
                    About
                </div>
                <div className="wM">
                    Tools
                </div>
                </nav>
                <nav className="nav_items right_nav">
                <div className="wM">
                    Experience
                </div>
                <div className="wM">
                    Contact me
                </div>
                </nav>
            </div>
            </div>
        )
    }
}

export default Menu;