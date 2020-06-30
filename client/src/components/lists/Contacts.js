import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import { List, Divider } from 'antd'
import { GET_CONTACTS } from '../../queries'

const Contacts = () => {
  const { loading, error, data } = useQuery(GET_CONTACTS)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  console.log('CONTACTS', data)
  return <List bordered data={'Sample'} />
}

export default Contacts
