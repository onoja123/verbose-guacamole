import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllAdminAssessments } from '../../reducers/adminReducer'
import Spinner from '../../components/Spinner'
import { Empty, Space, Table, Tag } from 'antd'
import { NavLink } from 'react-router-dom'

const AssessmentsPage = () => {
  const dispatch = useDispatch()
  const adminAssessment = useSelector((state) => state.admin)
  const loading = useSelector((state) => state.admin.loading)
  useEffect(() => {
    dispatch(getAllAdminAssessments())
  }, [dispatch])
  console.log(adminAssessment)
  const columns = [
    {
      title: 'Submission Type',
      dataIndex: 'submissionType',
      id: 'id'
    },
    {
      title: 'Max Score',
      dataIndex: 'maxScore',
      id: 'id'
    },
    {
      title: 'Title',
      dataIndex: 'title',
      id: 'id'
    },
    {
      title: 'Type',
      dataIndex: 'type',
      id: 'id'
    },
    {
      title: 'Visiblity',
      dataIndex: 'visiblity',
      id: 'id'
    },
    {
      title: 'Weight',
      dataIndex: 'weight',
      id: 'id'
    },
    {
      title: 'Visiblity',
      dataIndex: 'visiblity',
      render: (_, record) => <Tag color="green">{record?.status?.code}</Tag>
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <NavLink to={`/app/assessment/${record?._id}`}>
            View Assessment
          </NavLink>
        </Space>
      )
    }
  ]
  if (loading) return <Spinner size="large" />
  return (
    <div>
      <h1>Number of total assessments: {adminAssessment?.data?.length}</h1>

      {adminAssessment?.data?.length <= 0 ? (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={'No Assessments'}
        />
      ) : (
        <Table dataSource={adminAssessment?.data} columns={columns} />
      )}
    </div>
  )
}

export default AssessmentsPage
