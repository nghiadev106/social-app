import { GLOBALTYPES } from '../actions/globalTypes'
import { getDataAPI } from '../../utils/fetchData'

export const USER_TYPES = {
    LOADING: 'LOADING_USER',
    GET_USERS: 'GET_USERS',
}

export const getAllUsers = (token) => async (dispatch) => {
    try {
        dispatch({ type: USER_TYPES.LOADING, payload: true })

        const res = await getDataAPI('users', token)
        dispatch({ type: USER_TYPES.GET_USERS, payload: res.data })

        dispatch({ type: USER_TYPES.LOADING, payload: false })

    } catch (err) {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { error: err.response.data.msg } })
    }
}