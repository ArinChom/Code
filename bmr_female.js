function showBMR() {
    let weight = parseFloat(document.getElementById("weight").value)
    let height = parseFloat(document.getElementById("height").value)
    let age = parseFloat(document.getElementById("age").value)
    document.getElementById("output").innerText = 665 + (9.6 *weight) + (1.8 * height) - (4.7 * age)+" แคลอรี่" || "ยังไม่มีข้อมูล"
}