import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createUser, getAllUsers } from '../../reducers/adminReducer'
import { Button, Empty, Form, Input, Modal, Select, Space, Table } from 'antd'
import Spinner from '../../components/Spinner'
import { NavLink } from 'react-router-dom'
import { ADMIN } from '../../constants/userRoles'

import { FlexSectionHeader } from '../style'
const UsersPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])
  const loading = useSelector((state) => state.admin.loading)
  const user = useSelector((state) => state.auth.user)

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      id: 'id'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      id: 'id'
    },
    {
      title: 'Role',
      dataIndex: 'role',
      id: 'id'
    },
    {
      title: 'Mobile',
      dataIndex: 'mobile',
      id: 'id'
    },
    {
      title: 'Username',
      dataIndex: 'username',
      id: 'id'
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <NavLink to={`/app/user/${record?._id}`}>View User</NavLink>
        </Space>
      )
    }
  ]
  const admin = useSelector((state) => state.admin.data)
  if (loading) return <Spinner size="large" />

  return (
    <div>
      <FlexSectionHeader>
        <h1>Number of total users: {admin?.length}</h1>
      </FlexSectionHeader>
      {admin?.length <= 0 ? (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={'No Assessments'}
        />
      ) : (
        <Table dataSource={admin} columns={columns} />
      )}
    </div>
  )
}

export default UsersPage
