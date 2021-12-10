var player1_name = localStorage.getItem("Player1");
var player2_name = localStorage.getItem("Player2");
var player1_score = 0;
var player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("questionturn").innerHTML = "Question Turn&nbsp; - " + player1_name;
document.getElementById("answerturn").innerHTML = "Answer Turn&nbsp; - " + player2_name;

function send() {
    num1 = document.getElementById("number1").value;
    num2 = document.getElementById("number2").value;
    if (num1 == "" || num1 == null) {
        window.alert("Please Enter The Number1");
    } else if (num2 == "" || num2 == null) {
        window.alert("Please Enter The Number2")
    } else {
        actual_answer = parseInt(num1) * parseInt(num2);
        question_number = "<h4>" + num1 + "X" + num2 + "</h4>";
        input_box = "<br> Answer: <input type='number' class='form-control' id='answer_input_box'>";
        button = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
        row = question_number + input_box + button;
        document.getElementById("output").innerHTML = row;
        document.getElementById("number1").value = "";
        document.getElementById("number2").value = "";
    }
}

questionturn = "Player1";
answerturn = "Player2";

function check() {
    userans = document.getElementById("answer_input_box").value;
    if (userans == "" || userans == null) {
        window.alert("Please Enter Your Answer");
    } else {
        if (userans == actual_answer) {
            if (answerturn == "Player2") {
                player2_score = player2_score + 1;
                document.getElementById("player2_score").innerHTML = player2_score;
                window.alert(player2_name + " " + "scored 1 point");
            } else {
                player1_score = player1_score + 1;
                document.getElementById("player1_score").innerHTML = player1_score;
                window.alert(player1_name + " " + "scored 1 point");
            }
        }
        if (questionturn == "Player1") {
            questionturn = "Player2";
            document.getElementById("questionturn").innerHTML = "Question Turn&nbsp; - " + player2_name;
        } else {
            questionturn = "Player1";
            document.getElementById("questionturn").innerHTML = "Question Turn&nbsp; - " + player1_name;
        }
        if (answerturn == "Player1") {
            answerturn = "Player2";
            document.getElementById("answerturn").innerHTML = "Answer Turn&nbsp; - " + player2_name;
        } else {
            answerturn = "Player1";
            document.getElementById("answerturn").innerHTML = "Answer Turn&nbsp; - " + player1_name;
        }
        document.getElementById("output").innerHTML = "";
    }
    }