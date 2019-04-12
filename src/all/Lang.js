import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Lang extends Component{
    constructor(props){
        super(props);
        this.state = { hover : false}
        this.toggleState = this.toggleState.bind(this);
    }

    toggleState(){
        this.setState({
            hover : !this.state.hover
        })
    }

    render(){
        let className = "languages vh";
        let className_img = ''
        if(this.state.hover) {
            className = "languages";
            className_img = 'border'
        }
        return(

           <div className="images mt20" onMouseEnter={()=>{this.toggleState()}} onMouseLeave={()=>{this.toggleState()}}>
               <img src={this.props.url} className={className_img} height="250px" width="250px"></img>
               <div className={className}>{this.props.name}</div>
           </div>
        )
    }
}

export default Lang;