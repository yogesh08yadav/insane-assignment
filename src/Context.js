import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
export const Images = createContext()

const Context = ({children}) => {

    const [data, setData] = useState([])
    const [query, setQuery] = useState('')
    const[isLoading, setIsLoading] = useState(true)

    const fetchData = async () => {
        setIsLoading(true)
        if(query == ''){
            await axios.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e69a746f3d82412e8f3c224cd80cc055&tags=world&format=json&nojsoncallback=1")
            .then((res) => {
                setData(res.data.photos.photo)
                console.log('data', data)
                setIsLoading(false)
            })
            .catch(err => console.log('err', err))
        } 
        
        else{
                await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e69a746f3d82412e8f3c224cd80cc055&tags=${query}&format=json&nojsoncallback=1`)
                .then((res) => {
                    setData(res.data.photos.photo)
                    setIsLoading(false)
                })
                .catch(err => console.log('err', err))  
        }
    }

    useEffect(() => {
        fetchData()
    }, [query])
    console.log('data', data)

  return (
      <Images.Provider value={{data, setData, query, setQuery, isLoading}}> 
       {children}
      </Images.Provider>
  )
}

export default Context