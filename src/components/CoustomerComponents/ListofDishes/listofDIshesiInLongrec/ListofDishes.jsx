import React from 'react';
import { useState,useEffect } from 'react'
import Axios from '../../../../axios/config'
import img from '../../../../img/dlete.png'
import chi from '../../../../img/chi.jpg'
import '../../ButlerSpecials/ButlerSp.css'
import '../../PlaceOrderBar/PlaceorderBar.css'
import '../../ListofDishes/listofDIshesiInLongrec/logrec.css'

function ListofDishes({head}) {
  const [colour,setColour]=useState('#ffcccc8c')
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
},[head])

const data ={
  price:30,
  name:'Chilly Chicken'
}


const [Items,setItemData] = useState(undefined)
const [itemAmounts, setItemAmounts] = useState({}); 

useEffect(()=>{
  if (head === null) {
    console.log("none category");
  }else{
          async function fetchData() {
    try {
   const response = await Axios.get(`/getItems/${head}`);
   console.log(response.data);
   setItemData(response.data);
 } catch (error) {
   console.error('Error fetching item data:', error);}
}
fetchData()
  }

},[head])


  // Function to increment item amount
  const incrementItemAmount = (itemId) => {
    // console.log(itemId);
    setItemAmounts((prevAmounts) => ({
      ...prevAmounts,
      [itemId]: (prevAmounts[itemId] || 0) + 1,
    }));
  };

  // Function to decrement item amount
  const decrementItemAmount = (itemId) => {
    if (itemAmounts[itemId] > 0) {
      setItemAmounts((prevAmounts) => ({
        ...prevAmounts, [itemId]: prevAmounts[itemId] - 1,
      }));
    }
  };

  const handleDeleteItem = (index) => {
   
    const updatedOrderArray = [...orderArray];
    // Remove the item at the specified index
    updatedOrderArray.splice(index, 1);
    // Update the state and localStorage
    setOrderArray(updatedOrderArray);
    const totalSum = updatedOrderArray.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.total;
    }, 0);
    // save total price from the items selected
     setTotalPrice(totalSum)
    localStorage.setItem('Orders', JSON.stringify(updatedOrderArray));
  };


  // Function to add item to localStorage
  const [totalPriceAccumulated , setTotalPrice] = useState(0)
  const addItemToLocalStorage = (itemId, itemName, price, amount) => {
    const item = {
      itemId,
      itemName,
      price,
      amount,
      total: price*amount
    };
    // console.log(item);
    setItemAmounts((prevAmounts) => ({
      ...prevAmounts, [itemId]:0,
    }));
    // Get existing items from localStorage or initialize an empty array
    const existingItems = JSON.parse(localStorage.getItem('Orders')) || [];
    // Add the new item to the array
    existingItems.push(item);
    //to find total price summation of price value from the array
  const totalSum = existingItems.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.total;
  }, 0);
  // save total price from the items selected
   setTotalPrice(totalSum)
  // Store the updated array back in localStorage
   localStorage.setItem('Orders', JSON.stringify(existingItems));
  };

  const [orderArray , setOrderArray]  = useState(null)
  useEffect(()=>{
    setOrderArray(JSON.parse(localStorage.getItem('Orders')))
  },[totalPriceAccumulated])

  useEffect(()=>{
    const existingItems = JSON.parse(localStorage.getItem('Orders')) || [];
    //to find total price summation of price value from the array
  const totalSum = existingItems.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.total;
  }, 0);
  // save total price from the items selected
   setTotalPrice(totalSum)
  },[])

    return (
      <React.Fragment>

   <ul style={{listStyle:'none'}}>
        {
      Items === undefined ?  
      <h2 style={{fontFamily:"cursive"}}><b>Bant u band...?</b></h2>:
    Items.map((item,i=0)=>(
      <li key={item.id}>
         <div className="dishes d-flex m-1 col justify-content-between" style={{height:'4rem',borderRadius:'1rem',boxShadow: "0 0 5px rgb(196, 196, 196)",border:'2px solid'}}>
                                  <div className="name d-flex">
                                  <span className='m-2' style={{fontSize:'1.3rem',fontFamily:"'Pacifico', cursive",color:'black',paddingTop:'5px'}}><b>{i+1}.</b></span>
                                  <span className='m-3' style={{fontSize:'1.3rem',fontFamily:" cursive",color:'black',width:'7rem'}}><b>{item.itemName}</b></span>
                                  <div className="price d-flex ">
                                        <span className='m-3' style={{fontSize:'1.3rem',fontFamily:"'Pacifico', cursive",color:'black'}}><b>-&nbsp;&nbsp;${item.price}</b></span>
                                  </div>
                                  </div>
                                  
                                  
                                  <div className="amtT d-flex justify-content-center" style={{margin:'1rem 0rem 0rem 1rem',height:'2rem'}}>
                                  <button type="button" class="btn btn-outline-dark mx-3" style={{paddingTop:'3px'}} onClick={() => decrementItemAmount(item._id)} ><b>-</b></button>  
                                  <span className='' style={{fontSize:'1.3rem',fontFamily:"'Pacifico', cursive"}}><b>{itemAmounts[item._id] || 0}</b></span>
                                  <button type="button" class="btn btn-outline-dark mx-3" style={{paddingTop:'3px'}} onClick={() => incrementItemAmount(item._id)}  ><b>+</b></button>  
                                    <button type="button" class="btn btn-dark mx-3" style={{paddingTop:'3px'}} onClick={() => addItemToLocalStorage(item._id, item.itemName, item.price, itemAmounts[item._id] || 0)} ><b>ADD</b></button>   
                                  
                                </div>
                              </div>  
      </li>
      ))
    }
    </ul>

                               
                            <section className="bg-gray p-3 section mx-auto"  >
                              <div className="container">
                                      <div className="card col-12" style={{height:'20rem'}}>
                                  <div className="card-body text-dark" style={{height:'20rem',backgroundColor:`${colour}`,paddingLeft:'2rem',transition:'1s',border:'2px solid',borderRadius:'5px'}}>
                                      <div className=" row " style={{height:'3rem'}}>
                                      <div className="col-sm-9 text-sm-left " >
                                          <h3 className="mt-auto" style={{fontFamily:" cursive",textDecoration:'underline'}}><b>Today's Special...</b></h3>
                                      </div>
                                      <div className=" d-flex"  style={{width:'100%',overflow:'scroll'}}>
                                                          <div class="col-8 col-sm-7 col-lg-3 col-md-9 square m-3" style={{backgroundImage:`url(${chi})`}} >
                                            <div className="sqBtns">
                                            <div className="addbutton d-flex justify-content-between m-1">
                                            <h5 style={{paddingLeft:'8px',fontFamily:"'Pacifico', cursive",paddingTop:'3px',color:'#000000'}}><b>{data.name}</b></h5>

                                            <span  style={{paddingLeft:'8px',fontSize:'12px',fontFamily:"'Pacifico', cursive",color:'#000000'}}><b>${data.price}</b></span>
                                            </div>
                                                <div className="bootompart d-flex  justify-content-between "> 
   
                                                    <div className="amountdiv d-flex justify-content-center" style={{position:'absolute',bottom:'0',paddingLeft:'8px'}}>
                                                        
                                                      <span   style={{fontSize:'1.3em',paddingRight:'8px',color:'white',fontFamily:"'Pacifico', cursive"}}><b>$67</b></span>
                                                  </div>
                                                  

                                                <div className="amtBut d-flex justify-content-center">
                                                    <button type="button" class="btn btn-light mx-3" style={{paddingTop:'3px'}}  ><b>-</b></button>  
                                                    <div className="amtt" style={{width:'2rem',height:'2rem',backgroundColor:'#ffffff92',borderRadius:'10px',marginTop:'3px'}}>
                                                    <span className='ps-2' style={{fontSize:'1.3rem',fontFamily:"'Pacifico', cursive"}}><b>4</b></span>
                                                    </div>
                                                    <button type="button" class="btn btn-light mx-3" style={{paddingTop:'3px'}} ><b>+</b></button>  
                                                </div>                                                        

                                                    <div className="amountdiv d-flex justify-content-end pe-1" style={{position:'absolute',bottom:'0',width:'100%',fontFamily:"'Pacifico', cursive"}}>
                                                    <button type="button" class="btn btn-light" ><b>Add</b></button>
                                                    </div>
                                                
                                                </div>
                                                </div>
                                            </div>
                                      </div>
                                      </div>
                                  </div>
                                  </div>
                              </div>
                          </section>              

                          
                          <div className= 'wra' >
                              <div className="leftNav m-2" >
                              <div className="items d-block">
                                  
                                  <div className="listItems  p-2 d-block " style={{fontFamily:"'Pacifico', cursive",letterSpacing:'2px'}}>                       
                                      <ul style={{width:'94%'}}> 
                                                  {
                                        orderArray === null ? <h3 className='mt-3' style={{display:'flex',justifyContent:'center'}}>No Items</h3> :

                                        orderArray.map( (obj,index) =>{
                                              return(
                                                  <li key={index}  className='d-flex justify-content-around p-2 m-2' style={{borderStyle: "outset",borderRadius:'10px'}}>
                                                  <div className="amount" style={{fontFamily:"cursive"}}>
                                                        <b>{obj.itemName}</b>
                                                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                      <div className="amount" style={{fontFamily:" cursive",borderStyle: "solid"}}>
                                                        <span><b>×{obj.amount}</b></span>
                                                        </div>
                                                        <div className="delete ms-2" style={{width:'1.5rem',height:'1.5rem',cursor:'pointer'}}>
                                                    <img  src={img} alt="" onClick={()=>handleDeleteItem(index)}/>
                                                  </div>
                                                  </li>
                                              )
                                          })
                                      }
                                      </ul>            
                                  </div>
                                  
                              </div>
                              <div className="total p-3 d-block" style={{width:'10rem',padding:'0 3rem',fontFamily:" cursive",backgroundColor:"white",transition:'1s'}}>
                                  <h3 className='ps-4'><b>Total</b></h3>
                                  <h4 className='ps-4'><b>${totalPriceAccumulated}</b></h4>
                              </div>
                          </div>

                        <div className="rightNav">
                            <button type="button" class="btn btn-dark " style={{paddingTop:'3px',height:'3rem',margin:'auto'}}  ><b>Place Order</b></button>   
                        </div>  
              </div> 
       </React.Fragment>
      );
}

export default ListofDishes;