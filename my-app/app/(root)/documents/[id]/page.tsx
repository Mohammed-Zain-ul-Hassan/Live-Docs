import CollaborativeRoom from '@/components/CollaborativeRoom'
import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

const Document = async ({params: {id}}: SearchParamProps) => {
  const clerkUser = await currentUser();

  return (
    <main className='flex w-full flex-col items-center'>
      <CollaborativeRoom/>
    </main>
  )
}

export default Document