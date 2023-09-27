import React from 'react';
import Axios from '../axios/config'
import { useEffect,useState } from 'react';
import DishCategoryBar from '../components/CoustomerComponents/NavigationBar/DishCategoryBar/DishCategoryBar';
// import ButlerSpecial from '../components/CoustomerComponents/ButlerSpecials/ButlerSpecial';
function CostomerHome() {
//     const [heed,sethead]=useState(null)
const [Items,setItemData]= useState(null)

  useEffect(()=>{ 


   if (localStorage.Order) {
      let key = localStorage.Order
      let parse = JSON.parse(key)
      if (parse.length >0) {
        console.log(parse.length);
        console.log('www');
      }
   }else{

    console.log('eeeee');
    // let Order = []
  // localStorage.setItem('Order',JSON.stringify(Order))


   }
    // let Order = []
    localStorage.setItem('Category',JSON.stringify({Category:null}))
    // localStorage.setItem('Order',JSON.stringify(Order))
  },[])
    return ( 
            <DishCategoryBar /> 
     );
}

export default CostomerHome;