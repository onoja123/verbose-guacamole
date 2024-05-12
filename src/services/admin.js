import axios from 'axios'
import { getAuthHeader } from './config'

export const baseURL = 'https://koyo-lms.onrender.com/admin'

const getAllUsers = async () => {
  const response = await axios.get(`${baseURL}/allusers`, getAuthHeader())
  return response.data
}
const createUser = async (credentials) => {
  const response = await axios.post(
    `${baseURL}/create-user`,
    credentials,
    getAuthHeader()
  )
  return response.data
}
const getSingleUser = async (userId) => {
  const response = await axios.get(
    `${baseURL}/oneuser/${userId}`,
    getAuthHeader()
  )
  return response.data
}
const getAllCourses = async () => {
  const response = await axios.get(`${baseURL}/allcourses`, getAuthHeader())
  return response.data
}
const getSingleCourse = async (courseId) => {
  const response = await axios.get(
    `${baseURL}/onecourse/${courseId}`,
    getAuthHeader()
  )
  return response.data
}
const getAllAssignment = async () => {
  const response = await axios.get(`${baseURL}/allassignment`, getAuthHeader())
  return response.data
}
const getAllComments = async () => {
  const response = await axios.get(`${baseURL}/allcomments`, getAuthHeader())
  return response.data
}
const getSingleComment = async (commentId) => {
  console.log(commentId)
  const response = await axios.get(
    `${baseURL}/onecomment/${commentId}`,
    getAuthHeader()
  )
  return response.data
}
const getAllAssessment = async () => {
  const response = await axios.get(`${baseURL}/allassessment`, getAuthHeader())
  return response.data
}
const getSingleAssessment = async (assessmentId) => {
  const response = await axios.get(
    `${baseURL}/oneassessment/${assessmentId}`,
    getAuthHeader()
  )
  return response.data
}
const adminService = {
  getAllUsers,
  getAllCourses,
  getAllAssignment,
  getAllComments,
  getAllAssessment,
  getSingleUser,
  getSingleComment,
  createUser,
  getSingleCourse,
  getSingleAssessment
}

export default adminService
