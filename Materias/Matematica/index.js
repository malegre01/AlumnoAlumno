  var materia = "matematica";
  var ref = firebase.database().ref('materias/' +materia);
  const list = document.getElementById('posts')
  const divNom = document.getElementById('name');
  const divApe = document.getElementById('surname');
  const divDesc = document.getElementById('description');
  const divNum = document.getElementById('telnumb');
  divNom.innerHTML = '';
  divApe.innerHTML = '';
  divDesc.innerHTML = '';
  divNum.innerHTML = '';
  ref.on("child_added", function(snapshot){
    console.log(snapshot.val().description);
    var item = snapshot.key;
    var Desc = snapshot.val().description.;
    var first = snapshot.val().firstName;
    var last = snapshot.val().lastName;
    var num = snapshot.val().phoneNum;

    list.innerHTML += `<li id="Skere">Descripción: ${Desc}<br>Nombre: ${first}<br>Apellido: ${last}<br><li id="Skere">Telefono: ${num}<br></li>`;

  });

function writeUserinSubject() {
  var userId = firebase.auth().currentUser.uid;
  var ref = firebase.database().ref('usuarios/'+userId);
  ref.once("value")
    .then(function(snapshot) {
      var name = snapshot.child("name").val(); // {first:"Ada",last:"Lovelace"}
      var firstName = snapshot.child("name").val(); // "Ada"
      var lastName = snapshot.child("surname").val(); // "Lovelace"
      var phoneNum = snapshot.child("phone").val(); // null
      console.log(materia);

      var about = document.getElementById('desc').value;

      firebase.database().ref('materias/' +materia+'/'+userId).set({
        //    uid:userId,
        description:about,
        firstName:firstName,
        lastName:lastName,
        phoneNum:phoneNum
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
