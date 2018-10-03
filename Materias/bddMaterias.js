

function writeUserinSubject() {
  var userId = firebase.auth().currentUser.uid;
  var ref = firebase.database().ref('usuarios/'+userId);
  ref.once("value")
    .then(function(snapshot) {
      var name = snapshot.child("name").val(); // {first:"Ada",last:"Lovelace"}
      var firstName = snapshot.child("name").val(); // "Ada"
      var lastName = snapshot.child("surname").val(); // "Lovelace"
      var age = snapshot.child("phone").val(); // null
      console.log("Bienvenido: "+firstName+" "+lastName);
      var materia = "lengua";
      var about = document.getElementById('desc').value;

      firebase.database().ref('materias/' +materia+'/'+userId).set({
        //    uid:userId,
        description:about,
        firstName:firstName,
        lastName:lastName
      }, function(error) {
        if (error) {
          window.alert("The write failed... ");
          // The write failed...
        } else {
          window.alert("Data saved successfully");

        }
      });
    });
}



function traer(){
   var materia = "lengua";
   var ref = firebase.database().ref('materias/' +materia);
   const list = document.getElementById('posts');
   list.innerHTML = '';
   ref.on("child_added", function(snapshot){
     var item = snapshot.key;
     var Desc = snapshot.val().description;
     var first = snapshot.val().firstName;
     var last = snapshot.val().lastName;
     console.log(Desc, first,last);
     list.innerHTML += `<li>Descripción: ${Desc}<br>Nombre: ${first}<br>Apellido: ${last}<br></li>`;
 });
}
