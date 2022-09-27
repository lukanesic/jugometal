import React from 'react'
import { fetchCategory } from '../lib/data'

const Test = ({ data }) => {
  console.log(data)
  return <div>Test</div>
}

export const getStaticProps = async () => {
  const category = 'traktori'
  const response = await fetchCategory(category)

  const data = JSON.parse(JSON.stringify(response))

  console.log(response)

  return {
    props: {
      data,
    },
  }
}

export default Test
