import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import About from './About'
import Home from './Home'
import Layout from './components/Layout'
import Articles from './Pages/Articles/Articles'
import Contact from './Pages/Contact'
import Favorites from './Pages/Articles/Favorites'
import ArticleDetailPage from './Pages/Articles/ArticleDetailPage'
import { makeServer } from '../Server'
import FavoriteDetailPage from './Pages/Articles/FavoriteDetailPage'
import EmptyBlogPage from './components/EmptyBlogPage'
import NotFound from './components/NotFound'
import Login from './Pages/Login'


if (process.env.NODE_ENV === "development") {
  makeServer(); // Start MirageJS only in development
}


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>} />

          <Route path='/articles'>
            <Route index element={<Articles/>}/>
            <Route path='/articles/:id' element={<ArticleDetailPage/>}/>
          </Route>
          {/* <Route path='/detailpage' element={<ArticleDetailPage/>}/> */}
          <Route path='/contact' element={<Contact/>}/>

          <Route path='/favorites'>
            <Route index element={<Favorites/>}/>
            <Route path='/favorites/:id' element={<FavoriteDetailPage/>}/>
            <Route path='/favorites/emptyPage' element={<EmptyBlogPage/>}/>
          </Route>

          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
