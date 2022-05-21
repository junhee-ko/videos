import axios from 'axios'

const KEY = 'AIzaSyBUuGtnr4rXq-aR1TV1HdttnjD0WqQ6mIs'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})

