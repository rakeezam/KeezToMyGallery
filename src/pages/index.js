import * as React from 'react'
import { DatePicker, message } from 'antd';
import 'antd/dist/antd.css';

const IndexPage = () => {
  return (
    <main>
      <title>Keez To My Gallery</title>
      <h1>Keez To My Gallery</h1>
      <p>An exploration of my interests and hobbies</p>
      <DatePicker  />
    </main>
  )
}

export default IndexPage