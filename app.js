function split() {
    let amt = document.getElementById('amount').value;
    let persons = document.getElementById('persons').value;
    let result = (amt / persons).toFixed(2);
    document.getElementById('result').innerText = result;

    let x = document.getElementById("metric");
    x.style.color = "red";
    x.style.display = "block"
}