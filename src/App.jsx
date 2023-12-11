import './App.css'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />}/>
    </Routes>
  )
}
export default App
