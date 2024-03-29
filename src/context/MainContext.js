import { createContext, useEffect, useState } from "react"

export const MainContext = createContext()

export default function MainContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true)
  const [works, setWorks] = useState([])
  const [socials, setSocials] = useState([])

  useEffect(() => {
    async function fetchDatasetJson() {
      const response = await fetch("/dataset.json")
      const dataset = response.json()
      return dataset
    }
    fetchDatasetJson().then((data) => {
      const loadedWorks = data.works
      const loadedSocials = data.socials
      setWorks(loadedWorks)
      setSocials(loadedSocials)
    })
  }, [])
  const data = {
    isLoading,
    setIsLoading,
    works,
    socials,
  }

  return <MainContext.Provider value={data}>{works && children}</MainContext.Provider>
}
