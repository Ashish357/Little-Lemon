import './App.css'
import {Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import BookingPage from './pages/BookingPage/BookingPage'

function App() {
  return (
    <>
     <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/booking' element={<BookingPage/>}></Route>
     </Routes> 
    </>
  )
}

export default App
