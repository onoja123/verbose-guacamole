import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllAdminAssignment } from '../../reducers/adminReducer'
import { Empty } from 'antd'
import Spinner from '../../components/Spinner'

const AssignmentsPage = () => {
  const admin = useSelector((state) => state.admin)
  const loading = useSelector((state) => state.admin.loading)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllAdminAssignment())
  }, [dispatch])
  console.log(admin)
  if (loading) return <Spinner size="large" />

  return (
    <div>
      <h1>Number of total assignments: {admin?.data?.length}</h1>
      {admin?.data?.length <= 0 ? (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={'No Assignments'}
        />
      ) : null}
    </div>
  )
}

export default AssignmentsPage
