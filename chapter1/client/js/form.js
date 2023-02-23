// 声明变量
var emailObj;
var usernameObj;
var passwordObj;
var confirmObj;
var emailMsg;
var usernameMsg;
var passwordMsg;
var confirmMsg;

//页面加载之后，获取页面中的对象
window.onload = function() {
    emailObj = document.getElementById("email");
    usernameObj = document.getElementById("username");
    passwordObj = document.getElementById("password");
    confirmObj = document.getElementById("repassword");
    emailMsg = document.getElementById("emailMsg");
    usernameMsg = document.getElementById("usernameMsg");
    passwordMsg = document.getElementById("passwordMsg");
    confirmMsg = document.getElementById("repasswordMsg")
};

//验证整个表单
function checkForm() {
    var bEmail = checkemail();
    var bUsername = checkusername();
    var bPassword = checkpassword();
    var bConfirm = checkconfirm();

    return bEmail && bUsername && bPassword && bConfirm;
}

//验证邮箱
function checkEmail() {
    var regex = /^[w-]+@([\w-]+\.)+[a-zA-z]{2,4}$/;
    var value = emailObj.value;
    var msg = "";
    if(!value) {
        msg = "邮箱地址必须填写"
    } else if(!regex.test(value)) {
        msg = "邮箱地址格式不合法"
    }
    emailMsg.innerHTML=msg;
    emailObj.parentNode.parentNode.style.color = msg == "" ? "black" : "red";
    return msg = "";
}

//验证用户名
function checkUsername() {
    var regx = /^[a-zA-Z_]\w{0,9}$/;//字母、数字、下划线1到10位，不能为数字开头
    var value = usernameObj.value;//获取usernamObj中的文本
    var msg = "";//最后的提示消息，默认为空
    if(!value) {
        msg = "用户名不能为空";
    }else if(!regx.test(value)) {//如果用户名不能匹配正则表达式的规则
        msg = "用户名格式不合法";
    }
    usernameMsg.innerHTML = msg;//提示信息放入span
    usernameObj.parentNode.parentNode.style.color = msg== "" ?"black":"red";
    msg = "";
}

//验证密码
function checkPassword() {
    var regx = /^.{6,16}$/;//任意字符6到16位
    var value = passwordObj.value;
    var msg = "";
    if(!value) {
        msg = "密码不能为空";
    }else if(!regx.test(value)) {
        msg="密码不合法";
    }
    passwordMsg.innerHTML = msg;
    passwordObj.parentNode.parentNode.style.color = msg == ""?"black":"red";
    msg = "";
}

//确认密码验证
function checkConfirm() {
    var passwordValue = passwordObj.value;
    var confirmValue = confirmObj.value;
    if(!confirmValue) {
        msg = "确认密码不能为空";
    }else if(passwordValue != confirmValue) {
        msg = "密码必须保持一致";
    }
    confirmMsg.innerHTML = msg;
    confirmObj.parentNode.parentNode.style.color = msg == ""? "black" : "red";
    msg = "";
}