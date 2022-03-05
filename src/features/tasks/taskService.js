import axios from 'axios'

// Create new  task
const createTask = async (taskData) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const { data } = await axios.post(
    `http://localhost:5000/tasks/`,
    taskData,
    config
  )

  return data
}

// Get Tasks
const getTasks = async () => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const { data } = await axios.get(`http://localhost:5000/tasks/`, config)

  return data
}

const getTask = async (taskId) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const { data } = await axios.get(
    `http://localhost:5000/tasks/${taskId}`,
    config
  )

  return data
}

// Delete task
const deleteTask = async (taskId) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const { data } = await axios.delete(
    `http://localhost:5000/tasks/${taskId}`,
    config
  )

  return data
}

// Update task
const updateTask = async (task) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const { id, text, description } = task
  const { data } = await axios.put(
    `http://localhost:5000/tasks/${id}`,
    {
      text,
      description,
    },

    config
  )
  return data
}

const taskService = {
  createTask,
  getTasks,
  deleteTask,
  updateTask,
  getTask,
}

export default taskService
