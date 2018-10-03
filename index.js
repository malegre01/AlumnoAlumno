

var alogout =document.getElementById('alogout');
var alogin =document.getElementsByClassName('alogin');
var aregistro =document.getElementsByClassName('aregistro');
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

    console.log("Hay");
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

var userId=firebase.auth().currentUser.uid;
    console.log(user.email);
    console.log(user.uid);
    var ref = firebase.database().ref("usuarios/"+userId);
  ref.once("value")
    .then(function(snapshot) {
      var name = snapshot.child("name").val(); // {first:"Ada",last:"Lovelace"}
      var firstName = snapshot.child("name").val(); // "Ada"
      var lastName = snapshot.child("surname").val(); // "Lovelace"
      var age = snapshot.child("phone").val(); // null
      alert("Bienvenido: "+firstName+" "+lastName);
    });

  }

    // User is signed in.
   else {
console.log("No hay");
     document.getElementById("user_div").style.display = "none";
     document.getElementById("login_div").style.display = "block";
    // No user is signed in.
  }
});

function logout(){
  firebase.auth().signOut()
    .then(function() {
window.location.href= 'index.html';
      // Sign-out successful.
    })
    .catch(function(error) {
      // An error happened
    });


}
