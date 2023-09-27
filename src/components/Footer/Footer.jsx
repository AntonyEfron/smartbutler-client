import React from 'react';
import { useState,useEffect } from 'react';
import imf from '../../img/butler.png'

function Footer({head}) {
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
        <div style={{width:'100%',borderStyle:'solid none none  none'}}>
<div className="" style={{backgroundColor:`${colour}`}}>
  <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5  border-top">
    <div className="col " style={{marginLeft:'36rem',marginTop:'5rem'}}>
      <a href="/" className="d-flex align-items-center justify-content-center link-body-emphasis text-decoration-none">
      <img src={imf} alt="" srcset="" style={{width:'3rem',height:'3rem'}}/>
        
        {/* <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
      </a>
      <p className="text-body-secondary d-flex justify-content-center" style={{fontFamily: "'Inika', serif",fontFamily:"'Open Sans', sans-serif",fontFamily:"'Rubik', sans-serif",fontFamily: "'Smokum', cursive"}}><b>© Smart-Butler</b></p>
    </div>

  </footer>
</div>
        </div>
        
     );
}

export default Footer;