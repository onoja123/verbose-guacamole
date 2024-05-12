import usersService from '../services/users'
import { SET_USER, CLEAR_USER, UPDATE_USER } from '../actions/auth'
import { notification } from 'antd'

import { message } from 'antd'
import subscribeUser from './../subscription'

// manpulates the data coming from backend
const adapterFunc = (user) => {
  return { ...user.user, token: user.token }
}

let user = window.localStorage.getItem('eduhub-user')
const intialState = user
  ? { user: adapterFunc(JSON.parse(user)), isAuth: true }
  : { user: null, isAuth: false, isLoading: false }

const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_USER:
      console.log(action)
      return { user: adapterFunc(action.user), isAuth: true, isLoading: false }
    case UPDATE_USER:
      return { user: adapterFunc(action.user), isAuth: true }
    case CLEAR_USER:
      return { user: null, isAuth: false }
    case 'LOADING':
      return { user: null, isAuth: false, isLoading: true }
    case 'ERROR':
      return { user: null, isAuth: false, isLoading: false }
    default:
      return state
  }
}

export const editProfile = (user) => {
  return async (dispatch) => {
    try {
      const response = await usersService.update(user)
      console.log(response)
      if (response) {
        window.localStorage.setItem(
          'eduhub-user',
          JSON.stringify(response.data)
        )
        dispatch({ type: UPDATE_USER, user: response.data })
        notification.success({
          message: 'Saved Successfully'
        })
      } else {
        notification.error({
          message: 'Cant Save'
        })
      }
    } catch (error) {
      notification.error({
        message: 'Cant Save'
      })
      console.log(error)
    }
  }
}

export const register = (credentials) => {
  return async () => {
    try {
      const response = await usersService.register(credentials)
      if (!response) {
        throw new Error('invalid error with response')
      }
    } catch (error) {
      message.error('invalid credentials')
      console.log(error)
    }
  }
}

/* actions for authentication bellow */

export const login = (credentials) => {
  return async (dispatch) => {
    dispatch({ type: 'LOADING', user: null, isLoading: true })
    try {
      const response = await usersService.login(credentials)
      window.localStorage.setItem('eduhub-user', JSON.stringify(response.data))
      window.localStorage.setItem('eduhub-token', response.token)
      subscribeUser()
      dispatch({ type: SET_USER, user: response.data })

      console.log('subscribed', response)
    } catch (error) {
      console.log(error)
      dispatch({ type: 'ERROR', user: null, isLoading: false })
      // the backend should send the error message to show
      // message.error(error.response.data.message)
      message.error('invalid credentials')
    }
  }
}

export const logout = () => {
  return async (dispatch) => {
    try {
      // await usersService.logout()
      dispatch({ type: CLEAR_USER })
      window.localStorage.removeItem('eduhub-user')
      window.localStorage.removeItem('eduhub-token')
    } catch (error) {
      console.log(error)
    }
  }
}

export default authReducer
