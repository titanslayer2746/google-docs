import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function Home() {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <p>hello worldp</p>
      <Link href="/documents/123"><Button>Click me</Button></Link>
    </div>
  )
}

export default Home
