function login() {
    var player1 = document.getElementById("player1_name").value;
    var player2 = document.getElementById("player2_name").value;
    if (player1 == "" || player1 == null) {
        window.alert("Please Enter Player1 Name");
    } else if(player2 == "" || player2 == null) {
        window.alert("Please Enter Player2 Name")
    } else {
    localStorage.setItem("Player1", player1);
    localStorage.setItem("Player2", player2);
    window.location = "math_game.html";
    }
}