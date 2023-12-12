import './App.css'
import { Routes, Route } from 'react-router-dom'
import ArticleList from './components/ArticleList'
import Header from './components/Header'
import ArticlePage from './components/ArticlePage'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
    <Header />
    <NavBar />
    <Routes>
      <Route path='/articles' element={<ArticleList />}/>
      <Route path='/articles/:articleId' element={<ArticlePage />}/>
    </Routes>
    </>
  )
}
export default App
