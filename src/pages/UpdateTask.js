import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getTask, updateTask } from '../features/tasks/taskSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const UpdateTask = () => {
  const [text, setText] = useState('')

  const [description, setDescription] = useState('')
  const { taskId } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { tasks, isLoading, isError, message } = useSelector(
    (state) => state.tasks
  )
  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!tasks || tasks.id !== taskId) {
      dispatch(getTask(taskId))
    } else {
      setText(tasks.text)
      setDescription(tasks.description)
    }
  }, [taskId, tasks.id, isError, message, dispatch])

  if (isLoading) {
    return <div>Loading...</div>
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateTask({ id: tasks.id, text, description }))
    setText('')
    setDescription('')
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
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
              <div className='col-md-6 offset-md-3 my-3'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Description'
                  aria-label='Task'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
