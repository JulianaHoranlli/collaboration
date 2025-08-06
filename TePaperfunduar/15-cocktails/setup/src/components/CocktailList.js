import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {coctails,loading}=useGlobalContext();

  if(loading){
    return <Loading />
  }
  if(covtails.length<1){
  return  <h2 className='section-title'>
      no coctail matched your criteria! </h2>
  }
  return (
    <section className='section'>
<h2 className='section-title'>
  coctails
</h2>
<div className='coctails-ceneter'>
  {coctails.map((item)=>{
    return <Cocktail key={item.id} {...item} />
  })}
</div>
    </section>
  )
}

export default CocktailList
