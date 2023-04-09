import React from "react"
import Header from "../../components/Header"
import { MovingLines, TopSection, Works } from "../../components"
import Footer from "../../components/Footer"
function Home() {
  return (
    <>
      <Header />
      <main id="main_content">
        <TopSection />
        <Works />
        <MovingLines />
      </main>
      <Footer />
    </>
  )
}

export default Home
