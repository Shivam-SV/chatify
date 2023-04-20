import React from 'react'
import Layout from '../../components/Layout'
import ChatRoom from '../../components/ChatRoom'
import { useSelector } from 'react-redux'

export default function Home() {
    const auth = useSelector(state => state.auth);
  return (
    <Layout>
      <ChatRoom />
    </Layout>
  )
}
