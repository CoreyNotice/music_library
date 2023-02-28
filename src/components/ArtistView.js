import { useState, useEffect,Link } from 'react'
import { useParams } from 'react-router-dom'

function ArtistView() {
    const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])

    useEffect(() => {
        const API_URL = 'http://localhost:4000/album/${id}'
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setArtistData(resData.results)
        }
        fetchData()
},[id])
const justAlbums = artistData.filter(entry => entry.collectionType === 'Album')
const renderAlbums = justAlbums.map((album, i) => {
    return (
        <div key={i}>
            <Link to={`/album/${album.collectionId}`}>
            <p>{album.collectionName}</p>
            {renderAlbums}
            </Link>
        </div>
    )
})
return (
    <div>
        <h2>The id passed was: {id}</h2>
        <p>Artist Data Goes Here!</p>
    </div>
)

}

// import { useState, useEffect } from 'react'
// import { useParams,Link } from 'react-router-dom'

// function ArtistView() {
//     const { id } = useParams()
//     const [ artistData, setArtistData ] = useState([])


//     useEffect(() => {
//         const API_URL = `http://localhost:4000/album/${id}`
//         const fetchData = async () => {
//             const response = await fetch(API_URL)
//             const resData = await response.json()
//           
//         }

//         fetchData()
//     }, )

      
        
//         return (
//             <div>
//                 <h2>The id passed was: {id}</h2>
//                 <p>Artist Data Goes Here!</p>
//                 {renderAlbums}
//             </div>
//         )
        
// }

export default ArtistView







// These components will be making separate API calls from the app
// component to serve specific data about our artist
// import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'

// function ArtistView() {
//     const { id } = useParams()
//     const [ artistData, setArtistData ] = useState([])

    // return (
    //     <div>
    //         <h2>The id passed was: {id}</h2>
    //         <p>Artist Data Goes Here!</p>
    //     </div>
    // )
// }