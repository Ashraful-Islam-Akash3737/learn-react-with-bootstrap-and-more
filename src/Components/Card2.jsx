import  {Component} from "react"
import { FaFacebook, FaYoutube } from "react-icons/fa";
import './Card2.css'

class Card2 extends Component{
    render(){
        return(
            <div>
                <h3>Hello from card2</h3>
                <h3>My name is {this.props.name}</h3>
                <span>
                    < FaFacebook  className="icon"/>
                </span>
                <span>
                    < FaYoutube  className="icon"/>
                </span>
            </div>
        )
    }
}



export default Card2;