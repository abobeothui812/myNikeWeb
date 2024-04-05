

import React,{useState} from "react";

function Mycomponent(){
    const [name,setName]= useState("");

    const [quantity,setQuantity] = useState();

    const [comment, setComment] = useState("");

    const [payment, setPayment] = useState("");

    const [shipping,setShipping]= useState("Delivery")

    function handlePaymentchange(event)
    {
        setPayment(event.target.value);
    }

    function handleShippingchange(event)
    {
        setShipping(event.target.value);
    }

    function handleCommentchange(event){
        setComment(event.target.value);
    }

    const handleQuantitychange = (event) => {
        setQuantity(event.target.value);
    }

    function handleNamechange(event){
        setName(event.target.value);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <input type="text" value={name} onChange={handleNamechange} />

            <p>Quantity: {quantity}</p>
            <input type="number" value={quantity} onChange={handleQuantitychange} />
            
            <p>Comment: {comment}</p>
            <textarea name="" id="" cols="30" rows="5" value={comment} onChange={handleCommentchange} placeholder="Enter delivery instructions"></textarea>

            <br />
            <p>Payment: {payment}</p>
            <select name="" id="" value={payment} onChange={handlePaymentchange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>

            <p>Delivery options :{shipping}</p>
            <label htmlFor="">
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingchange}/>
                Pick Up
            </label> <br />
            <label htmlFor="">
            <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingchange}/>
                Delivery
                
            </label>

        </div>
    )
}

export default Mycomponent