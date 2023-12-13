import './App.css'
import { Routes, Route } from 'react-router-dom'
import ArticleList from './components/ArticleList'
import Header from './components/Header'
import ArticleDisplayPage from './components/pages/ArticleDisplayPage'
import NavBar from './components/NavBar'
import { UserProvider } from './context/UserContext'

const App = () => {
  return (
    <UserProvider>
    <Header />
    <NavBar />
    <Routes>
      <Route path='/articles' element={<ArticleList />}/>
      <Route path='/articles/:articleId' element={<ArticleDisplayPage />}/>
    </Routes>
    </UserProvider>
  )
}
export default App
