function show_result() {
    let K = document.querySelector("#K").value;
    let A = document.querySelector("#A").value;
    let L = document.querySelector("#L").value;
    let T1 = document.querySelector("#T1").value;
    let T2 = document.querySelector("#T2").value;

    let Q = (parseFloat(K) * parseFloat(A) * (parseFloat(T1) - parseFloat(T2))) / parseFloat(L)
    document.querySelector(".Q").innerHTML = Q;
}