import * as React from 'react'
import Moonlight from '../images/moonlight.png'

const IndexPage = () => {
  return (
    <main>
      <title>Keez To My Gallery</title>
      <h1>Keez To My Gallery</h1>
      <p>An exploration of my interests and hobbies</p>
      <Card hoverable style={{ width: 240 }} title="Blog 1" cover={<img alt="moon through clouds" src={Moonlight} />}/>
    </main>
  )
}

export default IndexPage