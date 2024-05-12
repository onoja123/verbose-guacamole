import axios from 'axios'
import { getAuthHeader } from './config'

const baseURL = '/assessments'

const getAllExams = async (courseId) => {
  const response = await axios.get(
    `https://koyo-lms.onrender.com/${courseId}${baseURL}`,
    {
      ...getAuthHeader(),
      params: { filter: 'Exam' }
    }
  )
  return response.data
}

const getAllAssignments = async (courseId) => {
  const response = await axios.get(
    `https://koyo-lms.onrender.com/${courseId}${baseURL}`,
    {
      ...getAuthHeader(),
      params: { filter: 'Assignment' }
    }
  )
  return response.data
}

const submitAssessment = async (courseId, assessment) => {
  const response = await axios.post(
    `https://koyo-lms.onrender.com/${courseId}${baseURL}`,
    assessment,
    getAuthHeader()
  )
  return response.data
}

const deleteAssessment = async (courseId, assessmentId) => {
  const response = await axios.delete(
    `https://koyo-lms.onrender.com/${courseId}${baseURL}/${assessmentId}`,
    getAuthHeader()
  )
  return response.data
}

const assessmentsService = {
  getAllExams,
  getAllAssignments,
  submitAssessment,
  deleteAssessment
}
export default assessmentsService
