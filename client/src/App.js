import React, { useState, useEffect } from 'react';
import Pagination from './Components/Pagination';
import Card from './Components/Card';
import "./App.css";


const App = ({match}) => {
  

  const pageNumber = match.params.pageNumber || 1

  const [ posts, setPosts ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(false)
  const [page, setPage] = useState(pageNumber)
  const [pages, setPages] = useState(1)

  useEffect(()=>{
    const fetchPosts = async () =>{
      setLoading(true);
      try {
        const res = await fetch(`/api/v1/posts?page=${page}`)
        const {data, pages: totalPages} = await res.json()

        setPages(totalPages)
        setPosts(data)
        setLoading(false)

      } catch (error) {
        console.log(error)
        setLoading(false)
        setError("Some error occured")
      }
    }

    fetchPosts();
  }, [page])

  return (
    <div className='app'>
      {loading ? <h3>Loading...</h3> : error ? <h3>An error occured</h3> :(
        <>
          <Pagination page={page} pages={pages} changePage={setPage}/>
              <div className='app__posts'>
                {posts?.length !== 0 && (
                  posts?.map(post=>{
                    return <Card key={post._id} post={post}/>
                  })
                )}
              </div>
          <Pagination />
        </>
      )}

    </div>
  )
}

export default App