import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AllTasks from './pages/AllTasks'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CreateTask from './pages/CreateTask'
import UpdateTask from './pages/UpdateTask'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<AllTasks />} />
          <Route path='/task' element={<CreateTask />} />
          <Route path='/task/:taskId/edit' element={<UpdateTask />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
