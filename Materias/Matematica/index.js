  var materia = "matematica";
  var ref = firebase.database().ref('materias/' +materia);
  var postsDiv = document.getElementById('posts');

  ref.on("child_added", function(snapshot){
    console.log(snapshot.val().description);
    var item = snapshot.key;
    var Desc = snapshot.val().description;
    var first = snapshot.val().firstName;
    var last = snapshot.val().lastName;
    var num = snapshot.val().phoneNum;
    MostarDivs(first,last,Desc,num);


  });
 function MostarDivs(nombre, apee, descr, nume){
   // Create the DOM elements.
   var postDiv = document.createElement("div");

   var postNameDiv = document.createElement("div");
   var postDescDiv = document.createElement("div");
   var postNumDiv = document.createElement("div");

   // Set the content of each element.
   postNameDiv.innerHTML = nombre+" "+apee;
   postDescDiv.innerHTML = "Descripción:  "+descr;
   postNumDiv.innerHTML = "Número:  "+nume;

   // Set CSS classes on each div so they can be styled.
   postDiv.setAttribute("class", "post");
   postNameDiv.setAttribute("class", "post-name");
   postDescDiv.setAttribute("class", "post-desc");
   postNumDiv.setAttribute("class", "post-num");


   // Assemble the post div.
   postDiv.appendChild(postNameDiv);
   postDiv.appendChild(postDescDiv);
   postDiv.appendChild(postDescDiv);
   postDiv.appendChild(postNumDiv);

   // Add the post div to the container for posts.
   postsDiv.appendChild(postDiv);
 }
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
