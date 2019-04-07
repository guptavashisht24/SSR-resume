import React, {Component} from 'react';




class Grid extends Component{
    constructor(props) {
        super(props);
    }


    render(){
        return(
            <div>
                Hi {this.props.match.params.id}
            </div>
        )
    }
}

export default Grid;