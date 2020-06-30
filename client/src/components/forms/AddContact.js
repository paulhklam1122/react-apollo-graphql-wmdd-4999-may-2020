import React, { useState } from 'react'

import { Form, Input, Button, Select } from 'antd'

import { v4 as uuidv4 } from 'uuid'

const AddContact = () => {
  const [id] = useState(uuidv4())
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const onFinish = values => {
    console.log('values', values)
  }

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        name='firstName'
        label='First Name'
        rules={[{ required: true }]}
      >
        <Input onChange={e => setFirstName(e.target.value)} />
      </Form.Item>
      <Form.Item name='lastName' label='Last Name' rules={[{ required: true }]}>
        <Input onChange={e => setLastName(e.target.value)} />
      </Form.Item>
      <Button type='primary' htmlType='submit'>
        Add Contact
      </Button>
    </Form>
  )
}

export default AddContact
