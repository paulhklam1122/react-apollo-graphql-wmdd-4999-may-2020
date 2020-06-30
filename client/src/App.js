import React from 'react'

import { ApolloClient, InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { createHttpLink } from 'apollo-link-http'
import Title from './components/layout/Title'

import { Layout } from 'antd'
import AddContact from './components/forms/AddContact'

import './App.css'
import Contacts from './components/lists/Contacts'

const { Content } = Layout

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache()
})

const App = () => (
  <ApolloProvider client={client}>
    <div className='container'>
      <Content className='App'>
        <Title />
        <AddContact />
        <Contacts />
      </Content>
    </div>
  </ApolloProvider>
)

export default App
