import React, { useEffect, useState } from 'react'
import { fetchMessages } from '../../lib/data'

const Admin = ({ data }) => {
  console.log(data)

  return <div>ADMIN PAGE ZA JUGOMETAL</div>
}

export const getServerSideProps = async () => {
  const response = await fetchMessages()
  const data = JSON.parse(JSON.stringify(response))

  return {
    props: {
      data,
    },
  }
}
export default Admin
