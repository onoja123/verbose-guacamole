import React from 'react'
import NoticeIcon from 'ant-design-pro/lib/NoticeIcon'
import './DropDownNotification.css'

import { BellFilled } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { DateTime } from 'luxon'

import { AlertTwoTone } from '@ant-design/icons'

function getNoticeData(data) {
  return data.map((item) => {
    let avater

    if (item.type === 'follow' || item.type === 'bookmark') {
      avater =
        'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png'
    } else if (item.type === 'like') {
      avater =
        'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png'
    } else if (item.type === 'comment') {
      avater =
        'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png'
    } else if (item.type === 'admin') {
      avater =
        'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png'
    } else if (item.type === 'alert') {
      avater = <AlertTwoTone />
    }

    let res = {
      id: item._id,
      avatar: avater,
      title: item.type,
      description: item.data,
      datetime: DateTime.fromISO(item.updatedAt).toRelative()
    }

    return res
  })
}

const DropDownNotification = () => {
  const dispatch = useDispatch()

  const onItemClick = (item, tabProps) => {
    console.log(tabProps)
  }

  return (
    <div className={'dropdown-div'}>
      <NoticeIcon
        className="notice-icon"
        onItemClick={onItemClick}
        bell={
          <BellFilled
            style={{
              fontSize: 16
            }}
          />
        }
      >
        <NoticeIcon.Tab
          title="notification"
          emptyText="You have viewed all notifications"
          emptyImage="https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg"
        />
      </NoticeIcon>
    </div>
  )
}

export default DropDownNotification
