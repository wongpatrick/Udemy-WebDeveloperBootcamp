var player1 = document.querySelector("#p1");
var player2 = document.querySelector("#p2");
var p1ScoreHtml = document.querySelector("#p1score");
var p2ScoreHtml = document.querySelector("#p2score");
var resetHtml = document.querySelector("#reset");
var settingHtml = document.querySelector("#setting");
var settingChange = document.querySelector("#settingChange");

var finalScore = 5;
var p1Score = 0;
var p2Score = 0;



player1.addEventListener("click", function(){
    if (p1Score < finalScore && p2Score < finalScore) {
        p1Score ++
        p1ScoreHtml.textContent = p1Score
        if (p1Score == finalScore) {
            p1ScoreHtml.style.color = "green";
        }
    }
});
player2.addEventListener("click", function(){
    if (p1Score < finalScore && p2Score < finalScore) {
        p2Score ++
        p2ScoreHtml.textContent = p2Score
        if (p2Score == finalScore) {
            p2ScoreHtml.style.color = "green";
        }
    }
});

resetHtml.addEventListener("click", function(){
    p1Score = 0;
    p2Score = 0;
    p2ScoreHtml.textContent = p2Score
    p1ScoreHtml.textContent = p1Score
    p2ScoreHtml.style.color = "black";
    p1ScoreHtml.style.color = "black";
});

settingChange.addEventListener("change", function(){
    finalScore = settingChange.value;
    setting.textContent = finalScore;
})
