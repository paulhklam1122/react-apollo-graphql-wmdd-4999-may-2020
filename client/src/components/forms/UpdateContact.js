import React, { useEffect, useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { Form, Input, Button } from 'antd'
import { UPDATE_CONTACT } from '../../queries'

const UpdateContact = props => {
  const [id] = useState(props.id)
  const [firstName, setFirstName] = useState(props.firstName)
  const [lastName, setLastName] = useState(props.lastName)
  const [updateContact] = useMutation(UPDATE_CONTACT)

  const [form] = Form.useForm()
  const [, forceUpdate] = useState()

  useEffect(() => {
    forceUpdate({})
  }, [])

  const onFinish = values => {
    const { firstName, lastName } = values
    updateContact({
      variables: {
        id,
        firstName,
        lastName
      },
      optimisticResponse: {
        __typename: 'Mutation',
        updateContact: {
          __typename: 'Contact',
          id,
          firstName,
          lastName
        }
      }
    })
    props.onButtonClick()
  }

  const updateStateVariable = (variable, value) => {
    switch (variable) {
      case 'firstName':
        setFirstName(value)
        break
      case 'lastName':
        setLastName(value)
        break
      default:
        break
    }
  }

  return (
    <Form
      form={form}
      name='update-contact-form'
      layout='inline'
      onFinish={onFinish}
      initialValues={{
        firstName: firstName,
        lastName: lastName
      }}
      size='large'
    >
      <Form.Item
        name='firstName'
        label='First Name'
        rules={[{ required: true, message: 'Please input your first name!' }]}
      >
        <Input
          placeholder='i.e. John'
          onChange={e => updateStateVariable('firstName', e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name='lastName'
        label='Last Name'
        rules={[{ required: true, message: 'Please input your last name!' }]}
      >
        <Input
          placeholder='i.e. Smith'
          onChange={e => updateStateVariable('lastName', e.target.value)}
        />
      </Form.Item>
      <Form.Item shouldUpdate={true}>
        {() => (
          <Button
            type='primary'
            htmlType='submit'
            disabled={
              !form.isFieldsTouched(true) ||
              form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Update Contact
          </Button>
        )}
      </Form.Item>
      <Button onClick={props.onButtonClick}>Cancel</Button>
    </Form>
  )
}

export default UpdateContact
