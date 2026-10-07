const googleBtn = document.getElementById("googleBtn");
const provider = new firebase.auth.GoogleAuthProvider();

googleBtn.addEventListener("click", function () {
    firebase.auth().signInWithPopup(provider)
        .then(function (result) {
            const user = result.user;
            localStorage.setItem("userName", user.displayName);
            localStorage.setItem("userEmail", user.email);
            localStorage.setItem("userPhoto", user.photoURL);
            location.href = "account.html";
        })
        .catch(function (error) {
            alert("Sign in failed: " + error.message);
        });
});