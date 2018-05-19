const functions = require('firebase-functions'),
  admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

// When a user deletes their account, clean up after them
exports.cleanupUser = functions.auth.user().onDelete(event => {
  //console.log(event.data)
  return admin.database().ref(`/users/${event.data.uid}`).remove();
});

// Clean up datas
exports.updateUsersDataArchitecture = functions.https.onRequest((req, res) => {
  admin.database().ref().child('users').once('value')
    .then(snap => {
      snap.forEach(childSnap => {
        //console.log(childSnap.child("error").exists())
        if (!childSnap.child("test").exists()) {
          console.log(childSnap.child("uid").val())
        /*let payload = {

        }
        let cleanedUser = Object.assign({}, childSnap.val(), payload)
        admin.database().ref('users/' + childSnap.child("uid").val()).update(cleanedUser)*/
        }
      })
      return
    })
})

// Clean up datas
exports.updateUsersDataArchitectureSe = functions.https.onRequest((req, res) => {
  admin.database().ref().child('users').once('value')
    .then(snap => {
      snap.forEach(childSnap => {
        //console.log(childSnap.child("error").exists())

        let payload = {
          'battleInProgress':null
        }
        let cleanedUser = Object.assign({}, childSnap.val(), payload)
        admin.database().ref('users/' + childSnap.child("uid").val()).update(cleanedUser)
        
      })
      return
    })
})

// Clean up datas
exports.updateUsersDataArchitectureThird = functions.https.onRequest((req, res) => {
  admin.database().ref().child('users').once('value')
    .then(snap => {
      snap.forEach(childSnap => {
        //console.log(childSnap.child("error").exists())

        let payload = {
          'mode':null
        }
        let cleanedUser = Object.assign({}, childSnap.val(), payload)
        admin.database().ref('users/' + childSnap.child("uid").val()).update(cleanedUser)
        
      })
      return
    })
})
// Clean up unactive users
exports.updateUsers = functions.https.onRequest((req, res) => {

  admin.database().ref('users').once('value')
    .then(snap => {
      snap.forEach(childSnap => {
        //console.log(childSnap.child("error").exists())
        //console.log(childSnap.val().uid)
        if (childSnap.val().bestCombo <= 10) {
          admin.auth().deleteUser(childSnap.val().uid)
            .then(function () {
              console.log("Successfully deleted user");
            })
            .catch(function (error) {
              console.log("Error deleting user:", error);
            });
        }
      })
      return
    })
})

exports.updateOneUser = functions.https.onRequest((req, res) => {
  uidUser = "2BBMXfEt1WPyOcyvlr7Nvn0stk83"
  admin.auth().deleteUser(uidUser)
    .then(function () {
      console.log("Successfully deleted user");
    })
    .catch(function (error) {
      console.log("Error deleting user:", error);
    });

  return

})


