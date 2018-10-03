document.getElementById("user_div").style.display = "none";
document.getElementById("login_div").style.display = "block";

function register(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  var userRpass = document.getElementById("rpassword_field").value;
  var userName = document.getElementById("nombre_field").value;
  var userSurname = document.getElementById("apellido_field").value;
  var userPhone = document.getElementById("number_field").value;


      //writeUserData(userName,userPass,userEmail,userPhone);
if (userPass == userRpass) {
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).then(function(result)
{

  writeUserData(userName,userSurname,userEmail,userPhone);
  //location = "../Login/login.html";
}).catch(function(error) {

//  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });
} else {
  alert("Las contraseñas no coinciden");
}
}
/*function traer(){
 var userId = firebase.auth().currentUser.uid;
return firebase.database().ref('/usuarios/' + userId).once('value').then(function(snapshot) {
  var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  // ...
});
window.alert(username);


}*/

function writeUserData(name,surname, email, phone) {
var userId = firebase.auth().currentUser.uid;
  firebase.database().ref('usuarios/' + userId).set({
    name: name,
    surname:surname,

    email: email,
    phone:phone
  }, function(error) {
    if (error) {
      window.alert("The write failed... ");
      // The write failed...
    } else {
      window.alert("Data saved successfully");
      window.location.href = '../index.html';

      // window.location.replace("../Login/login.html");
      // Data saved successfully!
    }
  });
}
