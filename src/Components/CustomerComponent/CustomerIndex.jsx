import React from 'react'
import Container from '../Container'

const CustomerIndex = () => {
  return (
    <Container>
      <h3>Customer</h3>
      <div className="div-table-responsive">
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ACTION</th>
              <th>NAME</th>
              <th>CONTACT NO.</th>
              <th>EMAIL</th>
              <th>ADDRESS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  )
}

export default CustomerIndex