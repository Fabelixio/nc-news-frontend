import './App.css'
import { Routes, Route } from 'react-router-dom'
import ArticleList from './components/ArticleList'

const App = () => {
  return (
    <Routes>
      <Route path='/articles' element={<ArticleList />}/>
    </Routes>
  )
}
export default App
