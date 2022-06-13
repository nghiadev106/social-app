const valid = ({fullname, username, email, password, cf_password}) => {
    const err = {}

    if(!fullname) {
        err.fullname = "Vui lòng thêm tên đầy đủ của bạn."
    }else if(fullname.length > 50){
        err.fullname = "Tên đầy đủ dài tối đa 50 ký tự."
    }

    if(!username) {
        err.username = "Vui lòng thêm username."
    }else if(username.replace(/ /g, '').length > 25){
        err.username = "User name không quá 25 ký tự."
    }

    if(!email) {
        err.email = "Vui lòng thêm email của bạn."
    }else if(!validateEmail(email)){
        err.email = "Email không đúng định dạng."
    }

    if(!password) {
        err.password = "Vui lòng thêm mật khẩu"
    }else if(password.length < 6){
        err.password = "Mật khẩu phải có ít nhất 6 ký tự."
    }

    if(password !== cf_password) {
        err.cf_password = "Xác nhận mật khẩu không chính xác."
    }

    return {
        errMsg: err,
        errLength: Object.keys(err).length
    }
}



function validateEmail(email) {
    // eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
  
export default valid