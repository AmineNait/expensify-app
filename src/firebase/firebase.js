import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyBRxffdVyseq78VpxTUUDhxFP_hw0JLO4E",
  authDomain: "expensify-4c448.firebaseapp.com",
  databaseURL: "https://expensify-4c448.firebaseio.com",
  projectId: "expensify-4c448",
  storageBucket: "expensify-4c448.appspot.com",
  messagingSenderId: "375408339395",
  appId: "1:375408339395:web:a041281d41c07b59a37576",
};
// Initialize Firebase
firebase.initializeApp(config);

const database = firebase.database();

database.ref("expenses").push({
  description: "Rent",
  note: "",
  amount: 109500,
  createdAt: 3216549436483684,
});

database.ref("expenses").push({
  description: "Phone Bill",
  note: "",
  amount: 5900,
  createdAt: 316873654261,
});

database.ref("expenses").push({
  description: "Food",
  note: "",
  amount: 1200,
  createdAt: 61874639871463897,
});

database.ref("notes/-MDhXv-_lPXa4Z9-3Rag").remove();
database.ref("notes").push({
  title: "Course Topics",
  body: "React, Python",
});

// database.ref().on(
//   "value",
//   (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   },
//   (e) => {
//     console.log("Error Fetching", e);
//   }
// );

// database
//   .ref()
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log("data Fetched: ", val);
//   })
//   .catch((error) => {
//     console.log("Error fetching data.", error);
//   });

// database
//   .ref()
//   .set({
//     name: "Amine Nait",
//     age: 33,
//     stressLevel: 6,
//     job: { title: "Software Developer", company: "Goolge" },
//     location: {
//       city: "Brossard",
//       country: "Canada",
//     },
//   })
//   .then(() => {
//     console.log("data saved");
//   })
//   .catch((error) => {
//     console.log("This failed.", error);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Gatineau",
// });

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log("Removed");
//   })
//   .catch((e) => {
//     console.log("Not Removed", e);
//   });
