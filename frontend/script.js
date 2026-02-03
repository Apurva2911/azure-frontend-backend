function loadData() {
  fetch("https://devops-backend-demo-hdcab8asa3bwewaz.centralindia-01.azurewebsites.net/api/hello")
    .then(res => res.json())
    .then(data => {
      document.getElementById("result").innerText =
        data.message + " | " + data.time;
    })
    .catch(err => {
      document.getElementById("result").innerText = "Error calling backend";
    });
}
