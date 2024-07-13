import { useState, createContext } from 'react'

export const Context = createContext(null)

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [filterCity, setFilterCity] = useState<string>('')
  const [filterPrice, setFilterPrice] = useState<number>(0)

  return (
    <Context.Provider value={{ filterCity, setFilterCity, filterPrice, setFilterPrice }}>{children}</Context.Provider>
  )
}
