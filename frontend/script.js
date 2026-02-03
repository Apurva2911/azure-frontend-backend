function loadData() {
  fetch("https://devops-backend-demo.azurewebsites.net/api/hello")
    .then(res => res.json())
    .then(data => {
      document.getElementById("result").innerText =
        data.message + " | " + data.time;
    })
    .catch(err => {
      document.getElementById("result").innerText = "Error calling backend";
    });
}
