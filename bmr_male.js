function showBMR() {
    let weight = parseFloat(document.getElementById("weight").value)
    let height = parseFloat(document.getElementById("height").value)
    let age = parseFloat(document.getElementById("age").value)
    document.getElementById("output").innerText = 66 + (13.7 * weight) + (5 * height) - (6.8 * age) +" แคลอรี่" || "ยังไม่มีข้อมูล"
}