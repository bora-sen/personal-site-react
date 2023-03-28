import React from "react"
import { Layout } from "../../components"
import { ILoveTo, OnTheWeb, RotateHouse, WhoAmI, Works } from "./sections"

function Home() {
  return (
    <Layout>
      <RotateHouse />
      <WhoAmI />
      <ILoveTo />
      <OnTheWeb />
      <Works />
    </Layout>
  )
}

export default Home
