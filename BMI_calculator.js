document.getElementById("submit").addEventListener("click", function() {
    event.preventDefault();
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var bmi = (weight * 10000) / (height * height);
    var result = document.getElementById("result");
    document.getElementById("result").textContent = bmi.toFixed(2)
});
