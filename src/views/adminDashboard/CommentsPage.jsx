import React, { useEffect } from 'react'
import { DeleteFilled } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import Styles from '../../components/Article/comments/index.module.css'
import { DateTime } from 'luxon'
import { Button, Comment } from 'antd'
import { getAllAdminComments } from '../../reducers/adminReducer'
import Spinner from '../../components/Spinner'
import { NavLink } from 'react-router-dom'
const CommentsPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllAdminComments())
  }, [dispatch])
  const user = useSelector((state) => state.auth.user)
  const adminComment = useSelector((state) => state.admin.data)
  const loading = useSelector((state) => state.admin.loading)
  if (loading) return <Spinner size="large" />

  return (
    <div>
      <h1>Number of total comments: {adminComment?.length}</h1>
      {adminComment?.map((comment, index) => {
        return (
          <div key={index} className={Styles['back']}>
            <NavLink
              to={`/app/comment/${comment?._id}`}
              className={Styles['iconCommentBody']}
            >
              <Comment
                content={comment?.body}
                author={comment?.createdBy?.name || user?.name}
                avatar={comment?.createdBy?.photo || user.photo}
                datetime={DateTime?.fromISO(comment?.createdAt)?.toRelative()}
              />
            </NavLink>
            {/* <div className={Styles['iconCommentRemove']}>
              {(user._id === comment.authorPersonId ||
                user._id === comment?.createdBy?._id) && (
                <Button
                  type="icon"
                  className={Styles['iconButton']}
                  onClick={() => {
                    return dispatch(DeleteComment(articleId, comment))
                  }}
                >
                  <DeleteFilled />
                </Button>
              )}
            </div> */}
          </div>
        )
      })}
    </div>
  )
}

export default CommentsPage
