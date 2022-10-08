//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {

    apiKey: "AIzaSyBYlHed_b8TiXwhubEg_gzw4E13E6upXmc",
  authDomain: "kwitter-app-cc946.firebaseapp.com",
  databaseURL: "https://kwitter-app-cc946-default-rtdb.firebaseio.com",
  projectId: "kwitter-app-cc946",
  storageBucket: "kwitter-app-cc946.appspot.com",
  messagingSenderId: "215440386089",
  appId: "1:215440386089:web:0e54c4adf5dc8888021438"

  };

 

  firebase.initializeApp(firebaseConfig);



welcomelabel = localStorage.getItem("loginusername");

document.getElementById("welcomelabelnamealsolabel").innerHTML = welcomelabel;



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("roomdiv").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;

     Room_names = childKey;

    //Start code

row = "<div class = 'room_name' id ="+Room_names+" onclick ='RedirectToRoomName(this.id)'>" +Room_names + "</div>";

document.getElementById("roomdiv").innerHTML += row;

    //End code

    });});}

getData();



function RedirectToRoomName(name) {

    localStorage.setItem("roomaddinput",name);

    window.location = "kwitter_page.html";

}



function logout() {

    localStorage.removeItem("loginusername");

    window.location = "index.html";

}



function addroom() {

    roomaddinputstore = document.getElementById("roomaddinput").value;

    firebase.database().ref("/").child(roomaddinputstore).update({

          purpose : "addrooms"

    });

    localStorage.setItem("roomaddinput",roomaddinputstore);

    window.location = "kwitter_page.html";

}