import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { useState,useEffect } from 'react';
import img from '../../img/butler.png'
import searchicon from '../../img/searchicon.png'
import '../Navbar/navbar.css'

function Navbar({head}) {
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


    return (  
        <div className= 'wrapper' style={{backgroundColor:`${colour}`,borderStyle:'none none solid none '}} >
            <div className="leftNavv">
            <div className='iconNav'>
           <img src={img} alt="" srcset="" style={{width:'3.5rem',height:'3.5rem'}}/>
           </div>
         </div>
         <div className='right m-2'>
            <Link to={{pathname:'/'}} style={{textDecoration:'none'}}> <h1 className='leaves'><b style={{fontSize:'3.5rem'}}>Smart-Butler</b></h1></Link>
          
         </div> 
               
         </div>       
    );
}

export default Navbar;