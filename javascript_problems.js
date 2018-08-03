var cars = ["Toyota", "Honda", "Telsa", "Chevy"];

document.getElementById("reverse").innerHTML = cars;

function reverseArray() {
    cars.reverse();

    document.getElementById("reverse").innerHTML = cars;
}
