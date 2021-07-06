
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBbzr0UgytM7F8GfaU6Kt1K1btKK3rYxrE",
      authDomain: "kwitter-e2571.firebaseapp.com",
      databaseURL: "https://kwitter-e2571-default-rtdb.firebaseio.com",
      projectId: "kwitter-e2571",
      storageBucket: "kwitter-e2571.appspot.com",
      messagingSenderId: "627237959937",
      appId: "1:627237959937:web:450834c0b01bf81aab8300"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

    function addRoom(){
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });

          localStorage.setItem("room_name", room_name);
          window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name - " + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr></hr>";
      document.getElementById("output").innerHTML += row;
      
      });});}

      getData();

      function redirectToRoomName(name){
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location="kwitter_page.html";
      }

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
window.location="index.html";
}
