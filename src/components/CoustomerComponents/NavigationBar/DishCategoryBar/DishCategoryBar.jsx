import React from 'react';
import { useState ,useEffect} from 'react';
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import DishListBox from '../../ListofDishes/DishListBox';
// import ButlerSpecial from '../../ButlerSpecials/ButlerSpecial';
// import PlaceOrderBar from '../../PlaceOrderBar/PlaceOrderBar';
import '../DishCategoryBar/Dishcategory.css'
import desserts from '../../../../img/desserts.png'
import drinks from '../../../../img/drinks.png'
import stater from '../../../../img/stater.png'
import staterr from '../../../../img/chikleg.png'
import dri from '../../../../img/dri.png'
import swee from '../../../../img/sw.png'
import mainCors from '../../../../img/maincors.png'
import maincarsS from  '../../../../img/maincorsOP.png'




function DishCategoryBar({Items}) {

    const [Category,setCatagory] =useState(null)
    const [colour,setColour]=useState('#ffcccc8c')
    const [D,setD]=useState(false)
    const [MM,setMM]=useState(false)
    const [ST,setST]=useState(false)
    const [DD,setDD]=useState(false)



     useEffect(()=>{
        const head = JSON.parse(localStorage.Category)
        setCatagory(head.Category)
        switch (head.Category) {
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
        // const Title = JSON.parse(localStorage.getItem('Category'))
        // console.log(Title.Category);
        // setCatagory(Title.Category)
        // localStorage.setItem('Category',JSON.stringify({Category:'Desserts'}))

     },[D,DD,MM,ST])
     useEffect(()=>{
        const title = JSON.parse(localStorage.getItem('Category'))
        setCatagory(title.Category)
        console.log(Category);
    },[Category])

const selectCategoryDE=()=>{ 
    localStorage.setItem('Category',JSON.stringify({Category:'Desserts'}))
    
      setDD(true)
      setD(false)
      setMM(false)
      setST(false)
   }
const selectCategoryDriE=()=>{
    localStorage.setItem('Category',JSON.stringify({Category:'Drinks'}))
    setD(true)
    setMM(false)
    setDD(false)
    setST(false)
}
const selectCategoryMai=()=>{
    localStorage.setItem('Category',JSON.stringify({Category:'Main-Courses'}))
    setMM(true)
    setDD(false)
    setD(false)
    setST(false)
}
const selectCategorySta=()=>{
    localStorage.setItem('Category',JSON.stringify({Category:'Staters'}))
    setST(true)
    setDD(false)
    setMM(false)
    setD(false)
}
    return ( 
        <React.Fragment>
            <Navbar head={Category}/>
            <section  className='category-container mx-auto' style={{backgroundColor:`${colour}`,borderStyle:'solid'}} >
      
      <div className={ST?'img-container col-4 col-sm-3 col-lg-3 col-md-3':'img-containeR col-4 col-sm-3 col-lg-3 col-md-3'}  >
        <div className="divIMg f-flex justify-content-center"  style={{height:'2rem',cursor:'pointer'}} id='dishDiv' onClick={selectCategorySta}>
        <img src={ST? staterr: stater} alt="" srcset=""  style={{height:'2rem',width:'2rem',transition:'1s'}}/>
            <p>Staters</p>
        </div>
     </div>
           <div className={MM?'img-container col-4 col-sm-3 col-lg-3 col-md-3':'img-containeR col-4 col-sm-3 col-lg-3 col-md-3'}  >
           <div className="divIMg f-flex justify-content-center"  style={{height:'2rem',cursor:'pointer'}} id='dishDiv' onClick={selectCategoryMai}>
        <img src={MM?maincarsS:mainCors} alt="" srcset=""  style={{height:'2rem',width:'2rem',transition:'1s'}}/>
              <p>Main-Courses</p>
        </div>
              
          </div>
           <div className={D?'img-container col-4 col-sm-3 col-lg-3 col-md-3':'img-containeR col-4 col-sm-3 col-lg-3 col-md-3'} >
           <div className="divIMg f-flex justify-content-center"  style={{height:'2rem',cursor:'pointer'}} id='dishDiv' onClick={selectCategoryDriE}>
           <img src={D? dri:drinks} alt="" srcset=""  style={{height:'2rem',width:'2rem',transition:'1s'}}/>
              <p>Drinks</p>
        </div>   
          </div>
           <div className={DD?'img-container col-4 col-sm-3 col-lg-3 col-md-3':'img-containeR col-4 col-sm-3 col-lg-3 col-md-3'} >
           <div className="divIMg f-flex justify-content-center"  style={{height:'2rem',cursor:'pointer'}} id='dishDiv' onClick={selectCategoryDE}>
           <img src={DD? swee:desserts} alt="" srcset=""  style={{height:'2rem',width:'2rem',transition:'1s'}}/>
              <p>Desserts</p>
            </div>   
          </div>
          
  </section>
            


    <DishListBox head={Category} Items={Items} />
    <Footer head={Category}/>
    
    </React.Fragment>
     );
}

export default DishCategoryBar;