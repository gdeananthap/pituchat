import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import './index.css';
import theme from './theme';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Error from './pages/Error'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
          {/* <Route path="/" element={<Layout />}> */}
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="*" element={<Error />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
