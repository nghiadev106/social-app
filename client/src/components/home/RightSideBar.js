import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import UserCard from '../UserCard'
import FollowBtn from '../FollowBtn'
import LoadIcon from '../../images/loading.gif'
import { getSuggestions } from '../../redux/actions/suggestionsAction'

const RightSideBar = () => {
    const { auth, suggestions } = useSelector(state => state)
    // const [suggestions, setSuggestions] = useState([])
    // useEffect(() => {
    //     const data = profile.users.filter(user => !auth.user.following.includes(user) && user._id !== auth.user._id)
    //     setSuggestions(data)
    // }, [auth.user._id, auth.user.following, profile.users])

    const dispatch = useDispatch()

    return (
        <div className="mt-3">
            <UserCard user={auth.user} />

            {suggestions.users?.length <= 0 ? '' :
                <div className="d-flex justify-content-between align-items-center my-2">
                    <h5 className="text-danger">Suggestions for you</h5>
                    {
                        !suggestions.loading &&
                        <i className="fas fa-redo" style={{ cursor: 'pointer' }}
                            onClick={() => dispatch(getSuggestions(auth.token))} />
                    }
                </div>
            }

            {
                suggestions.users?.length <= 0 ? '' :
                    suggestions.loading
                        ? <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />
                        : <div className="suggestions">
                            {
                                suggestions.users?.slice(0, 5).map(user => (
                                    <UserCard key={user._id} user={user} >
                                        <FollowBtn user={user} />
                                    </UserCard>
                                ))
                            }
                        </div>
            }

            {auth.user.following.length <= 0 ? '' :
                <div className="d-flex justify-content-between align-items-center my-2">
                    <h5 className="text-danger">Followings</h5>
                </div>
            }

            {
                auth.user.following.length <= 0 ? ''
                    : <div className="followings">
                        {
                            auth.user.following.map(user => (
                                <UserCard key={user._id} user={user} >
                                </UserCard>
                            ))
                        }
                    </div>
            }

        </div>
    )
}

export default RightSideBar
