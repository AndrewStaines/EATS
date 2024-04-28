// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
import { getDatabase, onValue, update, set, ref } from "https://cdnjs.cloudflare.com/ajax/libs/firebase/10.10.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3Cb9hFPLhrQ3517YxnCljym7icNajGs8",
  authDomain: "vvs-batch.firebaseapp.com",
  databaseURL: "https://vvs-batch-default-rtdb.firebaseio.com",
  projectId: "vvs-batch",
  storageBucket: "vvs-batch.appspot.com",
  messagingSenderId: "1031564976655",
  appId: "1:1031564976655:web:aa24b314c14dc8f7b9797a",
  measurementId: "G-NB3W6ZEC1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
let i = 0;
onValue(ref(db, "/"), (snapshot) => {
  let obj = snapshot.val()
  for (let key in obj) {
    
    for (let keych in obj[key]) {
      {$("<tr id = row" + i + ">").appendTo("#table-ele");
        for (let keych2 in obj[key][keych]) {
          
          console.log(obj[key][keych][keych2]);
          $("<td id = rowele" + i + ">").text(obj[key][keych][keych2]).appendTo("#row" + i);
        }

      }
      i++
    }
    /* for (let key in obj){
      
        $("<tr id = row"+i+">").appendTo("#table-ele");
         for(let keych in obj[key]){
             
             $("<td id = rowele"+i+">").text(obj[key][keych]).appendTo("#row"+i);
         }
         i++;
      
      console.log(i);*/
  }
})
let y = 0
$("#search").click(() => {
  $("#sr-head").show();

  let j = 0;
  const dateValue = $('#datesearch').val();
  const [year, month, day] = dateValue.split('-');
  const datetimeValue = `${year}${parseInt(month, 10)}${parseInt(day, 10)}`;

  // Log the formatted date to the console

  let year1 = datetimeValue.slice(0, 4)
  let month1 = datetimeValue.slice(5, 8)
  let date1 = datetimeValue.slice(8, 10)
  let reference = datetimeValue;
  console.log(reference);
  onValue(ref(db, reference), (snapshot) => {
    let obj = snapshot.val();
    for (let mainkey in obj) {
      $("<tr id= rowsr" + y + ">").appendTo("#sr-table-ele");
      for (let subkey in obj[mainkey]) {
        console.log(obj[mainkey][subkey]);
        $("<td id = rowsrele " + j + ">").text(obj[mainkey][subkey]).appendTo("#rowsr" + y);
      }
      y++
    }
    /*  $("<tr id= rowsr"+y+">").appendTo("#sr-table-ele");
          for(let key in obj){
              
              $("<td id = rowsrele "+j+">").text(obj[key]).appendTo("#rowsr"+y);
              j++;
          }*/



  })

});
