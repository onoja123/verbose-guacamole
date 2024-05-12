import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleAdminAssessment } from '../../reducers/adminReducer'
import { useParams } from 'react-router-dom'
import Spinner from '../../components/Spinner'

const SingleAssessmentPage = () => {
  const { id } = useParams()
  const adminSingleAssessment = useSelector((state) => state.admin.obj)
  const loading = useSelector((state) => state.admin.loading)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSingleAdminAssessment(id))
  }, [dispatch, id])
  console.log(adminSingleAssessment)
  if (loading) return <Spinner size="large" />
  return (
    <div>
      <h1>
        <span style={{ fontWeight: 'bold' }}>Title</span>:{' '}
        {adminSingleAssessment?.title}
      </h1>
      <p>
        <span style={{ fontWeight: 'bold' }}>Type</span>:{' '}
        {adminSingleAssessment?.type}
      </p>
      <p>
        <span style={{ fontWeight: 'bold' }}>Question Type</span>:{' '}
        {adminSingleAssessment?.questionsType}
      </p>
      <p>
        <span style={{ fontWeight: 'bold' }}>Submission Type</span>:{' '}
        {adminSingleAssessment?.submissionType}
      </p>
      <p>
        <span style={{ fontWeight: 'bold' }}>Visiblity</span>:{' '}
        {adminSingleAssessment?.visiblity}
      </p>
      <p>
        <span style={{ fontWeight: 'bold' }}>Max Score</span>:{' '}
        {adminSingleAssessment?.maxScore}
      </p>
      <p>
        <span style={{ fontWeight: 'bold' }}>Weight</span>:{' '}
        {adminSingleAssessment?.weight}
      </p>
      <p>
        <span style={{ fontWeight: 'bold' }}>Status</span>:{' '}
        {adminSingleAssessment?.status?.code}
      </p>
      <p>
        <span style={{ fontWeight: 'bold' }}>Message</span>:{' '}
        {adminSingleAssessment?.status?.message}
      </p>
    </div>
  )
}

export default SingleAssessmentPage
