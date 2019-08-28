import React,{Component} from 'react';
import './CardBlock.css';


class CardBlock extends Component{


    render() {
        const {image,title,text} = this.props;
        return(
            <div className="card-block">
                <h4 className="card-title"><img src={image} /> <br/>
                {title}
                    Firms</h4>
                <p className="card-text text-white">{text}</p>
                <a className="fw-600 fs-12" href="#"><span>Learn more</span> <i className="arrow right"></i></a>
            </div>
        )
    }

}

export default CardBlock;

