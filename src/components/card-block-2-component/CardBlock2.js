import React,{Component} from 'react';
import './CardBlock2.css';


class CardBLock2 extends Component{
    render() {
        const {image,title,mycolor} = this.props;
        return(
            <div className="b2">
                <div className="card text-center" >
                    <div className="card-body">
                        <div className={mycolor==="ffa801"?"fs-50 yellow":"fs-50 blue"}><i className={image}></i></div>
                        <h4 className={mycolor==="ffa801"?"card-text font-weight-bolder yellow":"card-text font-weight-bolder text-dark"} >{title}</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardBLock2;
