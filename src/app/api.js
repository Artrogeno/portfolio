import axios from 'axios'

export default axios.create({
  baseURL: `https://artrogenos.firebaseio.com/`
})
