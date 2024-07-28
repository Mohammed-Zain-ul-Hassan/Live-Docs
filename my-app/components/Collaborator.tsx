'use client'

import Image from 'next/image';
import React, { useState } from 'react'
import UserTypeSelector from './UserTypeSelector';

const Collaborator = ({roomId, creatorId, collaborator, email, user} : CollaboratorProps) => {
  const [userType, setUserType] = useState('viewer');
  const [loading, setLoading] = useState(false);

  const shareDocumentHandler = async (type : string) => {}
  const removeCollaboratorHandler = async (type : string) => {}
  
  return (
    <li className='flex items-center justify-between gap-2 py-3'>
      <div className='flex gap-2'>
        <Image
          src={collaborator.avatar}
          alt = {collaborator.name}
          width={36}
          height={36}
          className='size-9 rounded-full'
        />
        <div>
          <p className='line-clamp-1 text-sm font-semibold leading-4 text-white'>
            {collaborator.name}
            <span className='text-10-regular pl-2 text-blue-100'>
              {loading && `updating...`}
            </span>
          </p>
          <p className='text-sm font-light text-blue-100'>
            {collaborator.email}
          </p>
        </div>
      </div>

      {creatorId === collaborator.id ? (
        <p className='text-sm text-blue-100'>
          Owner
        </p>
      ):(
        <div className='flex items-center'>
          <UserTypeSelector
            userType={userType as UserType}
            setUserType={setUserType || 'viewer'}
            onClickHandler={shareDocumentHandler}
          />
        </div>
      )}
    </li>
  )
}

export default Collaborator