import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getTasks, deleteTask, reset } from '../features/tasks/taskSlice'

const AllTasks = () => {
  const dispatch = useDispatch()
  const { tasks, isLoading, isError, message } = useSelector(
    (state) => state.tasks
  )


  useEffect(() => {
      if (isError) {
        console.log(message)
      }
    dispatch(getTasks())
  }, [dispatch, message, dispatch])


  if (isLoading) {
    return <div>Loading...</div>
  }
  
  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteTask(id))
      window.location.reload()
    }
  }

  return (
    <div className='container'>
      <h1 className='text-center my-5 text-uppercase'>All Tasks</h1>
      <div className='row  sm:mx-auto'>
        <Link
          to='/task'
          type='button'
          className='btn btn-outline-dark btn-sm w-25 my-5'
        >
          Add Task
        </Link>
      </div>
      {tasks.length > 0 ? (
        <div className='row'>
          <div className='col table-responsive table-sm striped bordered'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Task</th>
                  <th scope='col'>Description</th>
                  <th scope='col'></th>
                  <th scope='col'></th>
                </tr>
              </thead>
              <tbody>
                {tasks &&
                  tasks?.map((task, index) => (
                    <tr key={task.id}>
                      <td>{index + 1}</td>
                      <td>{task.text}</td>
                      <td>{task.description}</td>

                      <td>
                        <Link
                          to={`/task/${task.id}/edit`}
                          className='btn btn-light mx-2'
                        >
                          <i className='fas fa-edit'></i>
                        </Link>

                        <button
                          type='button'
                          className='btn btn-danger'
                          onClick={() => deleteHandler(task.id)}
                        >
                          <i className='fas fa-trash'></i>
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <h3>You have no tasks</h3>
      )}
     
    </div>
  )
}

export default AllTasks
