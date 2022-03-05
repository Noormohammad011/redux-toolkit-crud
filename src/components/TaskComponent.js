import React from 'react'
import { deleteTask } from '../features/tasks/taskSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const TaskComponent = ({ task, index }) => {
  const dispatch = useDispatch()
  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteTask(id))
      window.location.reload()
    }
  }
  return (
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
        <tr key={task.id}>
          <td>{index + 1}</td>
          <td>{task.text}</td>
          <td>{task.description}</td>

          <td>
            <Link to={`/task/${task.id}/edit`} className='btn btn-light mx-2'>
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
      </tbody>
    </table>
  )
}

export default TaskComponent
