import PropTypes from 'prop-types'
function UserGreeting(props){
    const welcomemessage =<h2 className="welcome-message">Welcome {props.username}</h2> 
    const loginprompt=<h2 className="login-prompt">Please logged in to continue</h2>

    return props.isLoggedin ? welcomemessage : loginprompt;
                            
}
UserGreeting.prototypes={
    isLoggedin : PropTypes.Boolean,
    username : PropTypes.string,
}

UserGreeting.defaultProps={
    isLoggedin:false,
    username: "Guest",
}
export default UserGreeting