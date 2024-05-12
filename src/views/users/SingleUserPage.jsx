import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import {
  getSingleAdminComment,
  getSingleUser
} from '../../reducers/adminReducer'
import Spinner from '../../components/Spinner'

const SingleUserPage = () => {
  var { id } = useParams()
  const dispatch = useDispatch()
  const adminSingleUser = useSelector((state) => state.admin?.obj)
  const loading = useSelector((state) => state.admin?.loading)
  useEffect(() => {
    dispatch(getSingleUser(id))
    // dispatch(getSingleAdminComment(id))
  }, [dispatch, id])
  if (loading) return <Spinner size="large" />
  console.log(adminSingleUser, id)
  return (
    <div>
      <img
        src={adminSingleUser?.photo}
        alt={adminSingleUser?.name}
        width={200}
        height={200}
      />
      <h1>Full Name : {adminSingleUser?.name}</h1>
      <h1>Email : {adminSingleUser?.email}</h1>
      <h1>Role : {adminSingleUser?.role}</h1>
      <h1>Username : {adminSingleUser?.username}</h1>
      <h1>Mobile : {adminSingleUser?.mobile}</h1>
    </div>
  )
}

export default SingleUserPage
