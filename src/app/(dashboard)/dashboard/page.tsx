import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { FC } from 'react'

const page = async () => {

  const session = await getServerSession(authOptions)
  
  return <div>Dash</div>
}

export default page