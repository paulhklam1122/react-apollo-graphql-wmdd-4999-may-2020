import React, { useState } from 'react'
import { Card, List } from 'antd'

import { EditOutlined } from '@ant-design/icons'
import UpdateContact from '../forms/UpdateContact'
import RemoveContact from '../buttons/RemoveContact'

const getStyles = () => ({
  card: {
    width: '500px'
  }
})

const Contact = props => {
  const [id] = useState(props.id)
  const [firstName, setFirstName] = useState(props.firstName)
  const [lastName, setLastName] = useState(props.lastName)
  const [editMode, setEditMode] = useState(false)
  const styles = getStyles()

  const fullName = () => {
    return `${props.firstName} ${props.lastName}`
  }

  const handleButtonClick = () => setEditMode(!editMode)

  return (
    <List.Item key={props.id}>
      {editMode ? (
        <UpdateContact
          id={id}
          firstName={firstName}
          lastName={lastName}
          onButtonClick={handleButtonClick}
        />
      ) : (
        <Card
          actions={[
            <EditOutlined key='edit' onClick={handleButtonClick} />,
            <RemoveContact id={id} firstName={firstName} lastName={lastName} />
          ]}
          style={styles.card}
        >
          {fullName()}
        </Card>
      )}
    </List.Item>
  )
}

export default Contact
