import React from 'react';
import { useState,useEffect } from 'react';
import Axios from '../../../axios/config';
// import ButlerSpecial from '../ButlerSpecials/ButlerSpecial';
// import PlaceOrderBar from '../PlaceOrderBar/PlaceOrderBar';
import ListofDishes from './listofDIshesiInLongrec/ListofDishes';

function DishListBox({head}) {

      const [colour,setColour]=useState('#ffcccc8c')
      const [Title,settitle] = useState(null)
    //   const [OrderArray,setOrderArray] = useState(null)
    
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
        settitle(head)
        
      },[head])

// const [Category,setCategory] = useState(JSON.parse(localStorage.getItem('Category')))
// const [Items,setItemData] = useState(null)
    //   useEffect(() => {
     
    //   }, []);

        
    return ( 
        <React.Fragment>
        <section className="bg-gray  section mx-auto" style={{width:'80%',position:'static'}}>
            <div className="DishListBox" id='dishDiv'>
                    <div className="card col-12" style={{height:'26rem',marginTop:'1rem',marginBottom:'2rem',border:'2px solid',borderRadius:'18px'}}>
                <div className="card-body text-dark" style={{height:'20rem',backgroundColor:`${colour}`,paddingLeft:'2rem',borderRadius:'1rem',transition:'1s'}}>
                    <div className=" row " style={{height:'3rem'}}>
                    <div className="col-sm-9 text-sm-left " >
                        <h3 className="mt-auto" style={{fontFamily:" cursive",letterSpacing:'2px',textDecoration:'underline',transition:'3s'}}><b>{Title}</b></h3>   
                    </div>
                    <div className="dishBox" style={{width:'100%',height:'22rem',overflow:'auto'}}>
                        <div className=" d-block mt-3 "  style={{width:'100%'}}>
                            <ListofDishes head={head} />
                        </div>
                    </div>   
                    </div>
                </div>
                </div>
            </div>
        </section>    
</React.Fragment>
     );
}

export default DishListBox;