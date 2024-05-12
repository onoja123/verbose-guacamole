import { notification } from 'antd'
import adminService from '../services/admin'

const adminReducer = (
  state = { data: [], obj: {}, loading: false },
  action
) => {
  switch (action.type) {
    case 'LOADING_ADMIN':
      return { data: [], loading: true }
    case 'GET_ALL_USERS':
      return { data: action.data, loading: false }
    case 'CREATE_USER':
      return { data: action.data, loading: false }
    case 'GET_SINGLE_USER':
      return { obj: action.obj, loading: false }
    case 'GET_ALL_COURSES':
      return { data: action.data, loading: false }
    case 'GET_SINGLE_COURSE':
      return { obj: action.obj, loading: false }
    case 'GET_ALL_ASSIGNMENT':
      return { data: action.data, loading: false }
    case 'GET_ALL_COMMENTS':
      return { data: action.data, loading: false }
    case 'GET_SINGLE_COMMENT':
      return { obj: action.obj, loading: false }
    case 'GET_ALL_ASSESSMENT':
      return { data: action.data, loading: false }
    case 'GET_SINGLE_ASSESSMENT':
      return { obj: action.obj, loading: false }
    case 'ERROR_ADMIN':
      return { data: [], loading: false }
    default:
      return state
  }
}

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'LOADING_ADMIN' })
      const response = await adminService.getAllUsers()
      dispatch({ type: 'GET_ALL_USERS', data: response })
    } catch (error) {
      console.log(error)
      dispatch({ type: 'ERROR_ADMIN' })
    }
  }
}
export const createUser = (credentials) => {
  return async () => {
    try {
      //   dispatch({ type: 'LOADING_ADMIN' })
      const response = await adminService.createUser(credentials)
      console.log(response)
      notification.success({
        message: 'Added user successfully'
      })
      //   dispatch({ type: 'CREATE_USER', data: response })
    } catch (error) {
      console.log(error)
      //   dispatch({ type: 'ERROR_ADMIN' })
      notification.error({
        message: "Couldn't create user check your connection"
      })
    }
  }
}
export const getSingleUser = (userId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'LOADING_ADMIN' })
      const response = await adminService.getSingleUser(userId)
      console.log(response, userId)

      dispatch({ type: 'GET_SINGLE_USER', obj: response })
    } catch (error) {
      console.log(error)
      dispatch({ type: 'ERROR_ADMIN' })
    }
  }
}
export const getAllAdminCourses = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'LOADING_ADMIN' })
      const response = await adminService.getAllCourses()
      dispatch({ type: 'GET_ALL_COURSES', data: response })
    } catch (error) {
      console.log(error)
      dispatch({ type: 'ERROR_ADMIN' })
    }
  }
}
export const getSingleAdminCourse = (courseId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'LOADING_ADMIN' })
      const response = await adminService.getSingleCourse(courseId)
      dispatch({ type: 'GET_SINGLE_COURSE', obj: response })
    } catch (error) {
      console.log(error)
      dispatch({ type: 'ERROR_ADMIN' })
    }
  }
}
export const getAllAdminAssignment = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'LOADING_ADMIN' })
      const response = await adminService.getAllAssignment()
      console.log(response)
      dispatch({ type: 'GET_ALL_ASSIGNMENT', data: response })
    } catch (error) {
      console.log(error)
      dispatch({ type: 'ERROR_ADMIN' })
    }
  }
}
export const getSingleAdminAssessment = (assessmentId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'LOADING_ADMIN' })
      const response = await adminService.getSingleAssessment(assessmentId)
      console.log(response)
      dispatch({ type: 'GET_SINGLE_ASSESSMENT', obj: response })
    } catch (error) {
      console.log(error)
      dispatch({ type: 'ERROR_ADMIN' })
    }
  }
}
export const getAllAdminComments = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'LOADING_ADMIN' })
      const response = await adminService.getAllComments()
      console.log(response)
      dispatch({ type: 'GET_ALL_COMMENTS', data: response })
    } catch (error) {
      console.log(error)
      dispatch({ type: 'ERROR_ADMIN' })
    }
  }
}
export const getSingleAdminComment = (commentId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'LOADING_ADMIN' })
      const response = await adminService.getSingleComment(commentId)
      console.log(response)
      dispatch({ type: 'GET_SINGLE_COMMENT', obj: response })
    } catch (error) {
      console.log(error)
      dispatch({ type: 'ERROR_ADMIN' })
    }
  }
}
export const getAllAdminAssessments = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'LOADING_ADMIN' })
      const response = await adminService.getAllAssessment()
      console.log(response)
      dispatch({ type: 'GET_ALL_ASSESSMENT', data: response })
    } catch (error) {
      console.log(error)
      dispatch({ type: 'ERROR_ADMIN' })
    }
  }
}

export default adminReducer
