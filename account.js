const name = localStorage.getItem("userName");
const email = localStorage.getItem("userEmail");

if (name && email) {
    document.getElementById("accName").textContent = name;
    document.getElementById("accEmail").textContent = email;
    document.getElementById("accAvatar").textContent = name.charAt(0).toUpperCase();
}