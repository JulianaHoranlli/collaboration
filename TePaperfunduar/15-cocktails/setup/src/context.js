import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  comst[Loading,setLoading]=useState(true);
  const[SearchTerm,setSearchTerm]=useState('a');
  const[coctails,setCoctails]=useState([]);

  const fetchDrinks= useCallback(async ()=>{
    setLoading(true);
    try{
const response =await fetch (`${url}${searchTerm}`);
const data=await response.json();
const {rinks}=data;
if(drinks){
const newCoctails=drinks.map((item)=>{
  const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass}=item;
  return {id:idDrink,
    name:strDrink,
    image:strDrinkThumb,
    info:strAlcoholic
    ,glass:strGlass,}
})
setCoctails(newCoctails);
}
else{
  setCoctails([]);
}
setLoading(false);
    }
  
    catch(error){
      setLoading(false);
    }
  })
  useEffect(()=>{
fetchDrinks()
  },[searcTerm,fetchDrinks]);
  return <AppContext.Provider value={{
    loading ,coctails,setSearchTerm,
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
