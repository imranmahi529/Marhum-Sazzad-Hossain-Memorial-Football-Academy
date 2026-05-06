let count = localStorage.getItem("playerCount") || 0;
count++;
localStorage.setItem("playerCount", count);

let playerID = "MSH-" + String(count).padStart(3,'0');
document.getElementById("playerID").innerText = "Player ID: " + playerID;

// Name auto show in agreement
document.getElementById("name").addEventListener("input", function(){
    document.getElementById("displayName").innerText = this.value;
});

// Photo upload
function loadPhoto(event) {
    document.getElementById('photo').src = URL.createObjectURL(event.target.files[0]);
}

// Save
function saveData() {
    if(!document.getElementById("agree").checked){
        alert("অঙ্গীকারে সম্মতি দিন");
        return;
    }

    let data = {
        id: playerID,
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value
    };

    localStorage.setItem(playerID, JSON.stringify(data));
    alert("Saved Successfully!");
}

// PDF
function downloadPDF() {
    if(!document.getElementById("agree").checked){
        alert("অঙ্গীকারে সম্মতি দিন");
        return;
    }

    const element = document.getElementById("formArea");
    html2pdf().from(element).save(playerID + ".pdf");
}
