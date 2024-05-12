import {
  CREATE_ARTICLE,
  INITIAL_DATA,
  TIMELINE,
  DELETE_ARTICLE,
  GET_MY_ARTICLES,
  GET_MY_BOOKMARKS
} from '../actions/articles'
import checkModerationService from '../services/checkModeration'
import { notification } from 'antd'
import articleService from '../services/article'

const articlesReducer = (state = {}, action) => {
  switch (action.type) {
    case INITIAL_DATA:
      console.log(state)

      return {
        ...state,
        articles: action.data,
        totalPages: action.data.totalPages,
        currentPage: action.data.currentPage,
        loadingArt: false
      }
    case GET_MY_ARTICLES:
      return {
        ...state,
        articles: action.data.myarticles.reverse()
      }
    case GET_MY_BOOKMARKS:
      return {
        ...state,
        articles: action.data.reverse()
      }
    case TIMELINE:
      return {
        ...state,
        articles: state.articles.concat(action.data?.articles),
        totalPages: action.data.totalPages,
        currentPage: action.data.currentPage
      }

    case CREATE_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, action.data],
        loadingArt: true
      }
    case DELETE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter((article) => {
          return article.id !== action.data
        })
      }
    default:
      return state
  }
}

export const getinitialData = () => {
  return async (dispatch) => {
    try {
      // const response = await articleService.timeline(1, 5)
      const response = await articleService.getAllArticles()
      console.log(response)
      dispatch({ type: INITIAL_DATA, data: response })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getMyArticles = (username) => {
  console.log(username)
  return async (dispatch) => {
    try {
      const response = await articleService.myArticles(username)
      console.log(response.myarticles)
      dispatch({ type: GET_MY_ARTICLES, data: response })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getMyBookMarks = () => {
  return async (dispatch) => {
    try {
      const response = await articleService.myBookMarks()
      var res = []
      for (let i = 0; i < response.length; i++) {
        res.push(response[i].article)
      }
      console.log(response)
      dispatch({ type: GET_MY_BOOKMARKS, data: res })
    } catch (error) {
      console.log(error)
    }
  }
}

export const Timeline = (page, limit) => {
  return async (dispatch) => {
    try {
      const response = await articleService.timeline(page, limit)
      dispatch({ type: TIMELINE, data: response })
    } catch (error) {
      console.log(error)
    }
  }
}

export const create_article = (Article) => {
  return async (dispatch) => {
    try {
      const ver =
        (await checkModerationService.check(Article.title)) &&
        (await checkModerationService.check(Article.text))
      if (ver) {
        const response = await articleService.create_article(Article)
        console.log(response)
        dispatch({ type: CREATE_ARTICLE, data: response, loadingArt: false })
        console.log(response, 'qwertyuiosdfghj')
        notification.success({
          message: 'Added article successfully'
        })
      } else {
        notification.error({
          message: 'Your article violates EduHub standards'
        })
      }
    } catch (error) {
      notification.error({
        message: "Couldn't add Article check your connection"
      })
    }
  }
}

export const deleteArticle = (id) => {
  return async (dispatch) => {
    try {
      await articleService.deleteArticle(id)
      dispatch({ type: DELETE_ARTICLE, data: id })

      notification.success({
        message: 'Deleted article successfully'
      })
    } catch (error) {
      notification.error({
        message: "Couldn't Delete this Article"
      })
      console.log(error)
    }
  }
}

export default articlesReducer
