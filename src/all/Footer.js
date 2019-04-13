import React, {Component} from 'react';
import Card from './Card';

class Footer extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="flx bgg ff mt20">
                <div className="w100 mt20 fs28 bg ml20">
                    Vashisht Gupta
                </div>
                <div className="w100 fs22 bgr ml20">
                    guptavashisht24@gmail.com
                </div>
                <div className="w100 mt20 fs20 bg ml20">
                    Let's build the next big product together!
                </div>
                <div className="Links">
                    <i className="fa fa-linkedin-square"></i>

                </div>
            </div>

        )
    }
}

export default Footer;