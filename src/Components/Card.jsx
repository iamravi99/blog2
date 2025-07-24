import React from 'react'

const Card = ({item}) => {
  
  return (
    

<>
<div>
<div className="card bg-base-100 w-96 shadow-sm p-[10px] mt-[10px] ">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.description}</p>
    <div className="card-actions justify-end">
     
      Hero:
      <div className="badge badge-outline">{item.hero}

      </div>


      
    </div>
  </div>
</div>




</div>







</>

  )
}

export default Card