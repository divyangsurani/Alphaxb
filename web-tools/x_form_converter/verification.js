function checkIfChecked() {
    var checkbox = document.getElementById("myCheck");
    if (checkbox.checked) {
      alert("The checkbox is checked!");
    } else {
      alert("The checkbox is not checked!");
    }
}

document.getElementById("myCheck").onclick = checkIfChecked;
