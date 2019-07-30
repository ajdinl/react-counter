import React from "react"
import { useFetch } from "./hooks"
import '../style.css'


function App() {
  const [data, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/photos/"
  )
  return (
    <>
      <h1>Photos</h1>
      {loading ? (
        "Loading..."
      ) : (
        <div className='compWidth'>
          {data.map(({ id, title, url, thumbnailUrl }) => (
            <div className='styleOfPhotos'>
              <a href={url}>
              <img alt={title} src={thumbnailUrl} />
              </a>
              <p>{title}</p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
export default App;