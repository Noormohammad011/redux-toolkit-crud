import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createTask } from '../features/tasks/taskSlice'

const CreateTask = () => {
  const [text, setText] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createTask({ id: uuidv4(), text, description }))
    setText('')
    setDescription('')
    toast.success('Task created successfully')
    navigate('/')
  }

  
  return (
    <>
      <div className='container'>
        <h1 className='text-center my-5 text-uppercase'>Create Task</h1>
      </div>
      <div className='row'>
        <div className='col'>
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
                <button type='submit' className='btn btn-primary'>
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

export default CreateTask
