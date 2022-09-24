import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import { SWRConfig } from 'swr';


import CustomerIndex from './Components/CustomerComponent/CustomerIndex';
import ExampleIndex from './Components/ExampleComponent/ExampleIndex';
import ProductIndex from './Components/ProductComponent/ProductIndex';

function App() {
  return (
    <div className="App">
      <SWRConfig value={{
        fetcher: url => axios(url).then(res => res.data),
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
      }}>
        <Router>
          <Routes>
            <Route exact path="/" element={<ExampleIndex />}></Route>
            <Route exact path="/example" element={<ExampleIndex />}></Route>
            <Route exact path="/product" element={<ProductIndex />}></Route>
            <Route exact path="/customer" element={<CustomerIndex />}></Route>
          </Routes>
        </Router>
      </SWRConfig>
    </div>
  );
}

export default App;
