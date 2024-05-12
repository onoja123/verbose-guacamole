import React, { useEffect } from 'react'
import { getSingleAdminCourse } from '../../reducers/adminReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { DateTime } from 'luxon'

const SingleCoursePage = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const adminSingleComment = useSelector((state) => state.admin.obj)
  useEffect(() => {
    dispatch(getSingleAdminCourse(id))
  }, [dispatch, id])
  console.log(adminSingleComment)
  return (
    <div>
      {adminSingleComment?.photo ? (
        <img
          src={adminSingleComment?.photo}
          alt={adminSingleComment?.name}
          width={200}
          height={200}
        />
      ) : (
        <div
          style={{
            backgroundColor: adminSingleComment?.backgroundColor,
            height: 200,
            width: 200
          }}
        ></div>
      )}
      <h1>Course Name : {adminSingleComment?.name}</h1>
      <h1>Status : {adminSingleComment?.status}</h1>
      <h1>Description : {adminSingleComment?.description}</h1>
      <h1>
        Created :{' '}
        {DateTime?.fromISO(adminSingleComment?.createdAt)?.toRelative()}
      </h1>
      <h1>Number of students : {adminSingleComment?.enrollments?.length}</h1>
    </div>
  )
}

export default SingleCoursePage
