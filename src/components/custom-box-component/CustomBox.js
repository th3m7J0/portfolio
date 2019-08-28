import React,{Component} from 'react';
import './CustomBox.css'



class CustomBox extends Component{

    render(){
        const {number,part1,part2} = this.props;
        return(
            <div className="text-center font-weight-bold">
                <span className="my-text-info"><b>{number}</b></span><br/>
                <p>{part1} <br/> {part2}</p>
            </div>
        )
    }
}

export default CustomBox;
