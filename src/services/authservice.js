import API from './api'

const authService = {
    login : (data) => {
        return API.post('/login', data)
        .then(({data}) => {
            API.defaults.headers['Authorization'] = `Bearer ${data.token}`
            return data
        })
        .catch(err => {
            console.log('Authentication Error' , err)
            throw err
        })
    },
    register : (data) => {
        return API.post('/register', data)
        .then(({data}) => {
            API.defaults.headers['Authorization'] = `Bearer ${data.token}`
            return data
        })
        .catch(err => {
            console.log('Authentication Error' , err)
            throw err
        })
    },
    logout : () => {

    }
}

export default authService