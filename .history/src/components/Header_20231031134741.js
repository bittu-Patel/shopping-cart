import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
<header>
<nav className='flex justify-between items-start h-12 px-4 shadow-md bg-gray-800 text-white '>
<Link href="/" className='text-lg  font-bold'>
    Amazon Shopping cart
</Link>
<div>
    <span className=''>

    </span>
</div>

</nav>
</header>
  )
}

