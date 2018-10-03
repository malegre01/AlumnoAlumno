firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

//    document.getElementById("user_div").style.display = "block";
  //  document.getElementById("login_div").style.display = "none";


    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      console.log(user.email);
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(function(){
    var userId=firebase.auth().currentUser.uid;

 /* return firebase.database().ref('/usuarios/' + userId).once('value').then(function(snapshot)
    {
      var nombree = (snapshot.val() && snapshot.val().name) || 'Anonymous';
      var apellidoo = (snapshot.val() && snapshot.val().surname) || 'Anonymous';
      alert("Bienvenido " + nombree +""+ apellidoo);
<<<<<<< HEAD
      window.location.replace("../index.html");
=======
      window.location.href= '../index.html'; */

    console.log(userId);
    var ref = firebase.database().ref("usuarios/"+userId);
  ref.once("value")
    .then(function(snapshot) {
      var name = snapshot.child("name").val(); // {first:"Ada",last:"Lovelace"}
      var firstName = snapshot.child("name").val(); // "Ada"
      var lastName = snapshot.child("surname").val(); // "Lovelace"
      var age = snapshot.child("phone").val(); // null
      alert("Bienvenido: "+firstName+" "+lastName);


    });
    window.location.href = '../index.html';


  //  var apellidoo=firebase.database().ref('/usuarios/' + userId).child("surname").value;

  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}
