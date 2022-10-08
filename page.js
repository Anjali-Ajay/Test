//YOUR FIREBASE LINKS

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



username = localStorage.getItem("loginusername");

Room_names = localStorage.getItem("roomaddinput");



function onclick() {

    msgstore = document.getElementById("send_me_the_message").value;

    firebase.database().ref(Room_names).push({

          name:username,

          message:msgstore,

          likes:0

    });

}



function logout() {

    localStorage.removeItem("loginusername");

    localStorage.removeItem("roomaddinput");

    window.locationreplace("index.html");

}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {

       firebase_message_id = childKey;

       message_data = childData;

//Start code



//End code

    } });  }); }

getData();