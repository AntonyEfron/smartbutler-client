import React from 'react';
import { useState,useEffect } from 'react';
import chi from '../../../img/chi.jpg'

function SpecialCard({data}) {
  

    // const [itemData,setitemData]=useState([data])
    const [amt,setAmount] = useState(0)
    const [Totalprice,setTotalPrice] =useState(null)

    useEffect(()=>{
        let total = data.price*amt
        setTotalPrice(total)
    },[amt,Totalprice,data.price])

    const IncreaseHandling =()=>{
        // if (amt>0) {
        setAmount(amt+1)
        
    }
    const Decreaseing =()=>{
        if (amt === 0) {
            setAmount(0)
        }else{
            setAmount(amt-1)
        }
    }
    

    return ( 
        <div class="col-8 col-sm-7 col-lg-3 col-md-6 square m-3" style={{backgroundImage:`url(${chi})`}} >
                         <div className="sqBtns">
                         <div className="addbutton d-flex justify-content-between m-1">
                         <h5 style={{paddingLeft:'8px',fontFamily:"'Pacifico', cursive",paddingTop:'3px',color:'#000000'}}><b>{data.name}</b></h5>

                         <span  style={{paddingLeft:'8px',fontSize:'12px',fontFamily:"'Pacifico', cursive",color:'#000000'}}><b>${data.price}</b></span>
                         </div>
                            <div className="bootompart d-flex  justify-content-between "> 
                            {
                                amt > 0  && 
                                <div className="amountdiv d-flex justify-content-center" style={{position:'absolute',bottom:'0',paddingLeft:'8px'}}>
                                    
                                  <span   style={{fontSize:'1.3em',paddingRight:'8px',color:'white',fontFamily:"'Pacifico', cursive"}}><b>${Totalprice}</b></span>
                              </div>
                              
                            }
                            <div className="amtBut d-flex justify-content-center">
                                <button type="button" class="btn btn-light mx-3" style={{paddingTop:'3px'}} onClick={Decreaseing} ><b>-</b></button>  
                                <div className="amtt" style={{width:'2rem',height:'2rem',backgroundColor:'#ffffff92',borderRadius:'10px',marginTop:'3px'}}>
                                <span className='ps-2' style={{fontSize:'1.3rem',fontFamily:"'Pacifico', cursive"}}><b>{amt}</b></span>
                                </div>
                                <button type="button" class="btn btn-light mx-3" style={{paddingTop:'3px'}} onClick={IncreaseHandling}><b>+</b></button>  
                            </div>                                                        
                            {
                                amt > 0  && 
                                <div className="amountdiv d-flex justify-content-end pe-1" style={{position:'absolute',bottom:'0',width:'100%',fontFamily:"'Pacifico', cursive"}}>
                                <button type="button" class="btn btn-light"><b>Add</b></button>
                                 </div>
                            }
                            </div>
                            </div>
                         </div>
         
     );
}

export default SpecialCard ;