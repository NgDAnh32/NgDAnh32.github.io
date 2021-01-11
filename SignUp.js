// let inputUsername = document.getElementById('username')
// let inputPassword = document.getElementById('password')
// let inputCfPassword = document.getElementById ('cfpassword')

// document.getElementById("submitBtn").addEventListener("click", ()=> {
//     let User = window.localStorage.setItem("username")
//     let Pass = window.localStorage.setItem("password")
//     let cfPass = window.localStorage.setItem("cfpassword")
//     if(inputCfPassword==inputPassword){
//         alert('đăng kí thành công')
//     }else{
//         alert('đăng ký thất bại')
//     }
// })


let form = document.querySelector('#form_signUp')
let dataOld = JSON.parse((localStorage.getItem('user'))) // lay ra tu local
if(dataOld){
    var data = dataOld
}else{
    var data = []
}
form.onsubmit = (e)=>{
    e.preventDefault()
    
    let userName = form.name.value.trim().toLowerCase()
    let pass = form.password.value.trim()
    let cfPass = form.cfPassword.value.trim()
    if(userName==""){
        alert("vui lòng nhập UserName")
        
    }
    else if(pass==""){
        alert("vui lòng nhập Password")
        
    }
    if(cfPass==""){
        alert("vui lòng nhập Confirm Password")
        
    }
    else if(pass == cfPass){
        let data_ = {
            userName: userName,
            pass : pass
        }
        data.push(data_)
        localStorage.setItem('user', JSON.stringify(data)) // luu vao local
        alert("Đăng ký thành công")
        window.location.replace("login.html")
    }else{
        alert("pass chua dung")
    }
}