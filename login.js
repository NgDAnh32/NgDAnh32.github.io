// let inputUsername = document.getElementById('username')
// let inputPassword = document.getElementById('password')

// document.getElementById("submitBtn").addEventListener("click", ()=> {
//     let data = JSON.parse((localStorage.getItem('user')))
    
//     let pass = data.pass
//     let name = data[0].userName
//     console.log(name)
//     if(inputUsername.value === name){
//         if (inputPassword.value === trueUserPassword) {
//             alert('đăng nhập thành công')
//             window.location.replace("")
//         }
//         else {
//             alert("Bạn nhập sai tài khoản hoặc mật khẩu")
//         }
//     }
//     else {
//         alert("vui lòng nhập lại")
//     }
// })

// document.getElementById('signUp').addEventListener("click",()=> {
//     window.location.replace("http://127.0.0.1:5500/ASM/%C4%91%C4%83ngki.html")
// })

let data = JSON.parse((localStorage.getItem('user')))
let form = document.querySelector("#form_signIn")
form.onsubmit = (e)=>{
    e.preventDefault()
    
    let userName = form.name.value.trim().toLowerCase()
    let pass = form.password.value.trim()

    for(let i of data){
        if(i.userName == userName){
            if(i.pass == pass){
                alert("Đăng nhập thành công")
                window.location.replace("home.html")
                break
            }
            else{
                alert("pass sai")
                break
            }
            break
        }else{
            alert("k ton tai tk")
            break
        }
    }

}
