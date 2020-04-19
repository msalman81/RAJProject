document.getElementById("signup").addEventListener("submit", function(e) {
  e.preventDefault();
  let url = new URL('https://cors-anywhere.herokuapp.com/https://rajapi.herokuapp.com')
url.search = new URLSearchParams({
  fullName: document.querySelector(".UpFname").value,
  username:document.querySelector(".UpEmail").value,
  password:document.querySelector(".UpPassword").value
})
  fetch(url)
    .then((response) => {
      response.json().then((data)=>{
        console.log(data);
      })
    })
    .catch((data) => {
      console.log(data);
    });
});
document.getElementById("signin").addEventListener("submit", function(e) {
  e.preventDefault();
  console.log("running2");
  let url = new URL('https://cors-anywhere.herokuapp.com/https://rajapi.herokuapp.com/login')
url.search = new URLSearchParams({
  username:document.querySelector(".InEmail").value,
  password:document.querySelector(".InPassword").value
})
console.log(url);
  fetch(url,{method:"POST"})
    .then((response) => {
      response.json().then((data)=>{
        console.log(data);
      })
    })
    .catch((data) => {
      console.log(data);
    });
});
