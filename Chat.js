const firebaseConfig = {
    apiKey: "AIzaSyAC1nOk89qvz9-YUXwRgd-hhLzJezYhvMU",
    authDomain: "calgaryhackathon-67df8.firebaseapp.com",
    databaseURL: "https://calgaryhackathon-67df8-default-rtdb.firebaseio.com/",
    projectId: "calgaryhackathon-67df8",
    storageBucket: "calgaryhackathon-67df8.appspot.com",
    messagingSenderId: "90074114709",
    appId: "1:90074114709:web:4650652206d4c25a46499c",
    measurementId: "G-GPL6JPKL4P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();


document.getElementById("send-message").addEventListener("submit", postChat);
function postChat(e) {
    e.preventDefault();
    const timestamp = Date.now();
    const chatTxt = document.getElementById("chat-txt");
    const message = chatTxt.value;
    chatTxt.value = "";
    db.ref("messages/" + timestamp).set({
        usr: "username",
        msg: message,
    });
}
const fetchChat = db.ref("messages/");
fetchChat.on("child_added", function (snapshot) {
    const messages = snapshot.val();
    const msg = "<li>" + messages.usr + " : " + messages.msg + "</li>";
    document.getElementById("messages").innerHTML += msg;
});
