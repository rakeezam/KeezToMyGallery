import * as React from 'react'
import {Card} from 'antd';
import 'antd/dist/antd.css';

const IndexPage = () => {
  return (
    <main>
      <title>Keez To My Gallery</title>
      <h1>Keez To My Gallery</h1>
      <p>An exploration of my interests and hobbies</p>
      <Card hoverable style={{ width: 240 }} title="Blog 1" cover={<img alt="moon through clouds" src="../images/moonlight.png" />}/>
    </main>
  )
}

export default IndexPage