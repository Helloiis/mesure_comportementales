function savedata (data) {

    // Creating a XHR object
    let xhr = new XMLHttpRequest();
    let url = "../savedata.php";

    // open a connection
    xhr.open ("POST", url, true);

    // Set the request header i.e. which type of content you are sending
    xhr.setRequestHeader ("Content-Type", "application/json");

    // Sending data with the request
    console.log(data);
    xhr.send (JSON.stringify (data));
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function isHidden(el) {
    var style = window.getComputedStyle(el);
    return (style.display === 'none')
}

function repondre() {
  document.getElementById("btn_repondre").hidden = "true";
  document.getElementById("btn_yes").hidden = false;
  document.getElementById("btn_no").hidden = false;
}