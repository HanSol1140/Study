import {name1, name2, name3} from './data';
import styles from "./page.module.css";
// import "./page.css";

export default function Cart() {
    
    let 상품 : String[] = ["Tomatoes", "pasta", "Coconut"];
    return(
        <div>
            {name1}
            <br></br>
            {name2}
            <br></br>
            {name3}
            <br></br>
            <h4 className="styles">주문 목록 </h4>
            {상품.map((a, i)=>(
                <div className="food" key={i}>
                    <h4> {a} $40</h4>
                </div>
            ))}
        </div>
    )
}