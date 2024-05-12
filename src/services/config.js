export const getAuthHeader = () => {
  const token = localStorage.getItem('eduhub-token')
  console.log(token, 'auth header')
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
}

export const getMultiPartAuthHeader = () => {
  const token = localStorage.getItem('eduhub-token')
  return {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`
    }
  }
}

export const getS3Credintials = () => ({
  accessKeyId: '',
  secretAccessKey: ''
})
