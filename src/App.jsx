import './App.css'
import { Routes, Route } from 'react-router-dom'
import ArticleList from './components/ArticleList'
import Header from './components/Header'

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/articles' element={<ArticleList />}/>
    </Routes>
    </>
  )
}
export default App
