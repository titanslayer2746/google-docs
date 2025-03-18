import React from 'react'
interface DocumentLayoutProps {
    children: React.ReactNode;
}

function DocumentsLayout({children}: DocumentLayoutProps) {
  return (
    <div className='flex flex-col gap-y-4'>
        <nav className='w-full bg-red-500'>navBar</nav>
      {children}
    </div>
  )
}

export default DocumentsLayout
