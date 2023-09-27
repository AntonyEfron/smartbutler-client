import React from 'react';
import '../PlaceOrderBar/PlaceorderBar.css'
import img from '../../../img/dlete.png'
import { useState,useEffect } from 'react';


function PlaceOrderBar({head,Orders}) {
    const [colour,setColour]=useState('#ffcccc8c')
    // const [OrderArray,setOrderArray] = useState(null)
    const [Order,SetOrder] = useState([])
    //   const [disH,setDish]=useState(null)
      useEffect(()=>{
            setColour(head)
        switch (head) {
            case 'Staters':
                setColour('#ff41c43d')
                break;
                case 'Main-Courses':
                    setColour('#5db9ff5c')
                    break;
                    case 'Drinks':
                        setColour('#69eaa95e')
                        break;
                            case 'Desserts':
                                setColour('#ffcccc8c')
                                break;                  
            default:
                break;
        }  
        console.log(Orders);
      },[head])
    
    useEffect(()=>{
        SetOrder(Orders)
        console.log(Order.length);
    },[Orders])
    

    return ( 
   
<div className= 'wra' >
                <div className="leftNav m-2" >
                <div className="items d-block">
                    
                    <div className="listItems  p-2 d-block " style={{fontFamily:"'Pacifico', cursive",letterSpacing:'2px'}}>                       
                        <ul style={{width:'94%'}}> 

                        {/* {Orders.map((item, amount) => (
                            <li key={amount}>{item}</li>
                            ))} */}
                        <li className='d-flex justify-content-around p-2 m-2' style={{borderStyle: "solid",borderRadius:'6px'}}>
                            <div className="amount" style={{fontFamily:"cursive"}}>
                                   <b>Porotta</b>
                                  </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div className="amount" style={{fontFamily:" cursive",borderStyle: "solid"}}>
                                   <span><b>×8</b></span>
                                  </div>
                                  <div className="delete ms-2" style={{width:'1.5rem',height:'1.5rem',cursor:'pointer'}}>
                               <img src={img} alt="" />
                             </div>
                            </li>
                                    {/* {
                            Order.map(obj =>{
                                return(
                                    <li  className='d-flex justify-content-around p-2 m-2' style={{borderStyle: "solid"}}>
                                    <div className="amount" style={{fontFamily:"cursive"}}>
                                           <b>{obj.item}</b>
                                          </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <div className="amount" style={{fontFamily:" cursive",borderStyle: "solid"}}>
                                           <span><b>{obj.amount}</b></span>
                                          </div>
                                          <div className="delete ms-2" style={{width:'1.5rem',height:'1.5rem',cursor:'pointer'}}>
                                       <img src={img} alt="" />
                                     </div>
                                    </li>
                                )
                            })
                        } */}
                        </ul>            
                    </div>
                    
                </div>
                <div className="total p-3 d-block">
                    <h3 className='ps-4'><b>Total</b></h3>
                    <h4 className='ps-4'><b>$5088</b></h4>
                </div>
            </div>

            <div className="rightNav">
   
                 <button type="button" class="btn btn-dark " style={{paddingTop:'3px',height:'3rem',margin:'auto'}} ><b>Place Order</b></button>   
            </div>  
              </div>

     );
}

export default PlaceOrderBar;