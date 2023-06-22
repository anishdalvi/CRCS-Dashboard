import React from 'react'

const Header = ({category, title}) => {
  return (
    <div className='mb-10 m-4'>
      <p className='text-gray-400'>
        {category}
      </p>
      <p className='text-3xl font-bold tracking-light text-slate-900'> {title} </p>

    </div>
  )
}

export default Header