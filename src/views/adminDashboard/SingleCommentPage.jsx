import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSingleAdminComment } from '../../reducers/adminReducer'
import Spinner from '../../components/Spinner'

const SingleCommentPage = () => {
  var { id } = useParams()
  const dispatch = useDispatch()
  const adminSingleComment = useSelector((state) => state.admin.obj)
  const loading = useSelector((state) => state.admin.loading)
  useEffect(() => {
    dispatch(getSingleAdminComment(id))
  }, [dispatch, id])
  console.log(adminSingleComment)
  if (loading) return <Spinner size="large" />
  return (
    <div>
      <img
        src={adminSingleComment?.createdBy?.photo}
        alt={adminSingleComment?.createdBy?.name}
        width={150}
        height={150}
        srcset=""
      />
      <h1>Comment: {adminSingleComment?.body}</h1>
      <h1>Created By: {adminSingleComment?.createdBy?.name}</h1>
      <h1>Email: {adminSingleComment?.createdBy?.email}</h1>
      <h1>Username: {adminSingleComment?.createdBy?.username}</h1>
      <h1>Role: {adminSingleComment?.createdBy?.role}</h1>
      <h1>Mobile: {adminSingleComment?.createdBy?.mobile}</h1>
    </div>
  )
}

export default SingleCommentPage
