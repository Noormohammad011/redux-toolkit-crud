import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getTask, reset, updateTask } from '../features/tasks/taskSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const UpdateTask = () => {
  const { taskId } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { task, isLoading } = useSelector(
    (state) => state.tasks
  )
  
 
  const [formData, setFormData] = useState({
    text: task.text,
    description: task.description,
  })

  const { text, description } = formData
  useEffect(() => {
    dispatch(getTask(taskId))
    return () => {
      reset()
    }
  }, [dispatch, taskId])

  if (isLoading) {
    return <div>Loading...</div>
  }

   const onChange = (e) => {
     setFormData((prevState) => ({
       ...prevState,
       [e.target.name]: e.target.value,
     }))
   }
  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(updateTask({ id: task.id, text, description }))
    setFormData({ text: '', description: '' })
    toast.success('Task Updated Successfully')
    navigate('/')
  }
  return (
    <>
      <div className='container col-md-6 offset-md-3 my-3'>
        <h1 className='text-center my-5 text-uppercase'>Update Task</h1>
        <Link to='/' type='button' className='btn btn-outline-dark btn-sm w-25'>
          Go Back
        </Link>
      </div>
      <div className='row'>
        <div className='col px-4'>
          <form onSubmit={handleSubmit}>
            <div className='mx-auto'>
              <div className='col-md-6 offset-md-3 my-3'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Task'
                  aria-label='Task'
                  name='text'
                  value={text}
                  onChange={onChange}
                />
              </div>
              <div className='col-md-6 offset-md-3 my-3'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Description'
                  aria-label='Task'
                  value={description}
                  name='description'
                  onChange={onChange}
                />
              </div>
              <div className='col-md-6 offset-md-3 my-3'>
                <button
                  type='submit'
                  disabled={!text || !description}
                  className='btn btn-primary'
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default UpdateTask
