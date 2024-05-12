import React from 'react'

import { Space } from 'antd'
import ProfileIcon from '../ProfileIcon'
import DropDownNotification from '../DropDownNotification'
import CourseNavigation from '../CourseNavigation'

import styled from 'styled-components'
import { useSelector } from 'react-redux'

const FlexedDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 32px;
  background: #fff;
`

const AppHeader = ({ courseNavigation }) => {
  const user = useSelector((state) => state.auth.user)
  return (
    <FlexedDiv>
      <Space>{courseNavigation && <CourseNavigation />}</Space>
      <Space>
        <DropDownNotification />
        <ProfileIcon />
        Hi {user?.name}
      </Space>
    </FlexedDiv>
  )
}

export default AppHeader
