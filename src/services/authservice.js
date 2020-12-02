import API from './api'

const authService = {
    login : (data) => {
        return API.post('/login', data)
        .then(({data}) => {
            // console.log(data);
            API.defaults.headers['Authorization'] = `Bearer ${data.token}`
        })
        .catch(err => {
            console.log('Authentication Error' , err)
            throw err
        })
    },
    register : (data) => {

    },
    logout : () => {

    }
}

export default authService