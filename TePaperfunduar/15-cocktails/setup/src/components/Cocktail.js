import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({image,name,id,info,glass}) => {
  return (
   <article className='coctail'>
    <div className='img-cocntainer'>
      <img src={img} alt={name} />
      <div className='coctail-footer'>
<h3>{name}</h3>
<h4>{glass}</h4>
<p>{info}</p>
<Link to={`/cocktail/${id}`} className='btn btn-primary  btn-details'>
details</Link>
      </div>
    </div>
   </article>
  )
}

export default Cocktail
