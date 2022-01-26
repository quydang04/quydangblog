alert("The project is in progress, not finished!");
function getPass () {
    let get = document.getElementById("slider").value;
    let value = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    let password = "";
    for (var i = 0; i <= get ; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }
   document.getElementById("display").value = password;
   document.getElementById("genpass").innerHTML += password + "<br>";
   document.getElementById("length").innerHTML = "Length: 25";
   document.getElementById("slider").oninput = function () {
       if (document.getElementById("slider").value > 0) {
        document.getElementById("length").innerHTML = "Length" + document.getElementById("slider").value;
       }
       else {
        document.getElementById("length").innerHTML = "Length: 1";
       }
   }
}
function copyPass() {
   document.getElementById("display").select();
   document.execCommand("Copy");
   alert ("Đã sao chép mật khẩu vào clipboard!");
}
function info () {
    alert("Generate password wizard version 1.0, made by quydang.");
}
