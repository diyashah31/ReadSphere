import React from 'react'

function Cards({item}) {
    
  return (
    <>
    <div className='mt-4 my-3 p-3'>
      <div className="card bg-base-100 w-96 shadow-xl bg-white text-slate-900 dark:bg-slate-900 dark:text-white dark:border hover:scale-105 duration-200">
  <figure>
    <img
      src={item.image}
      alt="Shoes"
      className='w-full' />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200
      ">Products</div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Cards
