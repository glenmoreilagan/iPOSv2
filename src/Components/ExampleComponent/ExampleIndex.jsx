import React from 'react'
import { useState } from 'react'
import useSWR from 'swr'
import Container from '../Container'

const ExampleIndex = () => {
  const [searchStr, setSearchStr] = useState('')
  const url_str = `https://jsonplaceholder.typicode.com/posts?q=${searchStr}`;
  const { data: postList, isValidating: isLoadingPostList, error: errorPostList } = useSWR(url_str);

  const postListLength = postList?.length / 10;
  const [timer, setTimer] = useState(null);
  const handleSearch = e => {
    let search_str = e.target.value.toLowerCase()

    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }

    setTimer(
      setTimeout(() => {
        setSearchStr(search_str || '')
      }, 1000)
    );
  }

  return (
    <Container>
      <h4>EXAMPLE COMPONENT</h4>
      <div className="div-table-responsive">
        <div className="search-div mb-3">
          <label htmlFor="">Search</label>
          <input onChange={(e) => handleSearch(e)} type="text" className='form-control' placeholder='Search' />
        </div>
        {
          postList
            ? <table className='table table-striped'>
              <thead>
                <tr>
                  <th>ACTION</th>
                  <th>USER ID</th>
                  <th>ID</th>
                  <th>TITLE</th>
                  <th>BODY</th>
                </tr>
              </thead>
              <tbody>
                {
                  postList.map(p =>
                    <tr key={p.id}>
                      <td className='text-center'>{p.id}</td>
                      <td className='text-center'>{p.userId}</td>
                      <td className='text-center'>{p.id}</td>
                      <td>{p.title}</td>
                      <td>{p.body}</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
            : <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
        }
      </div>
      {
        // postList && <nav aria-label="Page navigation example">
        //   <ul className="pagination">
        //     <li className="page-item">
        //       <a className="page-link" href="#" aria-label="Previous">
        //         <span aria-hidden="true">&laquo;</span>
        //       </a>
        //     </li>
        //     {
        //       postList.map((p, index) => {
        //         const newIndex = index + 1;

        //         if (postListLength >= newIndex) {
        //           return <li className="page-item" key={newIndex}><a className="page-link" href="">{newIndex}</a></li>
        //         }
        //       })
        //     }
        //     <li className="page-item">
        //       <a className="page-link" href="#" aria-label="Next">
        //         <span aria-hidden="true">&raquo; { }</span>
        //       </a>
        //     </li>
        //   </ul>
        // </nav>
      }
    </Container>
  )
}

export default ExampleIndex