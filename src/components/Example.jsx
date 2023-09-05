import React from 'react'
import './example.css';
import { Link } from 'react-router-dom';

function Example() {
  return (
    <div className='card_container'>
        <Link to='/time'>Example</Link>
    </div>
  )
}

export default Example