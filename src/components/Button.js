import React from 'react'

function Button(props) {
  return (
    <button className={props.isMoreCat ? 'dark' : 'light'}>
      <span>{props.isMoreCat ? 'More Cats!' : 'Cats'}</span>
    </button >
  )
}

export default Button