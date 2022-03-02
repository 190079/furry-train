import React from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import {HomePage,Blog,Login} from "../../pages/index";

export const ReactRoutes = () => {
  return (
      <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/login" element={<Login />}/>
      </Routes>
  )
}

function RouterBrowser({children}) {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    )
}


export default RouterBrowser
