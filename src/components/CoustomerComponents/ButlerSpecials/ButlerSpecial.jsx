import React from 'react';
import { useState,useEffect } from 'react';
import '../ButlerSpecials/ButlerSp.css'
import SpecialCard from '../Specialcard/specialcard';
function ButlerSpecial({head}) {
   
    const [colour,setColour]=useState('#ffcccc8c')
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
      },[head])

   const data ={
    price:20,
    name:'Chilly Chicken'
}
   
    return ( 
        <section className="bg-gray p-3 section mx-auto"  >
            <div className="container">
                    <div className="card col-12" style={{height:'20rem'}}>
                <div className="card-body text-dark" style={{height:'20rem',backgroundColor:`${colour}`,paddingLeft:'2rem',transition:'1s'}}>
                    <div className=" row " style={{height:'3rem'}}>
                    <div className="col-sm-9 text-sm-left " >
                        <h3 className="mt-auto" style={{fontFamily:" cursive",textDecoration:'underline'}}><b>Today's Special...</b></h3>
                    </div>
                    <div className=" d-flex"  style={{width:'100%',overflow:'scroll'}}>
                       <SpecialCard data={data}/>
                       <SpecialCard data={data}/>
                       <SpecialCard data={data}/>
                       <SpecialCard data={data}/>
                    </div>
                    </div>
                </div>
                </div>
           
                
            </div>
        </section>
     );
}

export default ButlerSpecial;