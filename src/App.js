import './App.css';
import { useState, Suspense, useEffect,useRef } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import Spinner from './components/Spinner'
import { createResource as fetchData } from './helper'
import { DataContext } from './context/DataContext'
import { SearchContext } from './context/SearchContext'

function App(){
  let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])
    const API_URL='https://itunes.apple.com/search?term='
    const searchInput= useRef('')



    const handleSearch=(e,term)=>{
        e.preventDefault()  
        const fetchData=async()=>{
            document.title=`${term} Music`
            const response= await fetch(API_URL+term)
            const resData=await response.json()
           if (resData.results.length>0){
          return  setData(resData.results)
      }else{
       return setMessage('Not Found')
      }
           }
           const renderGallery = () => {
            if(data){
              return (
                <Suspense fallback={<Spinner />}>
                  <Gallery data={data} />
                </Suspense>
              )
            }
          }
        

        fetchData()
    }


    return (
        <div className='App'>
               <SearchContext.Provider value={{
                term: searchInput,
                handleSearch: handleSearch
               }} >
                <SearchBar />
            </SearchContext.Provider>
            {message}
        <DataContext.Provider value={data}>
         
            <Gallery/>
            </DataContext.Provider>
        </div>
    );

  }
export default App;
