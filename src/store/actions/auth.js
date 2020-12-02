import authService from '../../services/authservice'

export const LOGIN = 'LOGIN'

export const login = (params, history) => dispatch => {
    return authService.login(params)
    .then(data => {
        console.log(data)
        dispatch({ type: LOGIN, payload:data })
        history.push('/')
    })
    .catch(err => {
        console.log(err)
    })
}