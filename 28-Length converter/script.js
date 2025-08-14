let input = document.getElementById("input");
let result = document.getElementById("result");

let inputType = document.getElementById("inputType");
let resultType = document.getElementById("resultType");

input.addEventListener("keyup", calculate);
inputType.addEventListener("change", calculate);
resultType.addEventListener("change", calculate);

function calculate() {

   let inputTypeValue = inputType.value;
   let resultTypeValue = resultType.value;

    if (inputTypeValue === "meter" && resultTypeValue === "kilometer") {
        result.value = Number(input.value) * 0.001;
    } else if (inputTypeValue === "meter" && resultTypeValue === "centimeter") {
        result.value = Number(input.value) * 100;
    } else if (inputTypeValue === "meter" && resultTypeValue === "foot") {
        result.value = Number(input.value) * 3.28084;
    } else if (inputTypeValue === "meter" && resultTypeValue === "inch") {
        result.value = Number(input.value) * 39.3700787402;
    } else if (inputTypeValue === "meter" && resultTypeValue === "meter") {
        result.value = input.value;
    }

    if (inputTypeValue === "kilometer" && resultTypeValue === "kilometer") {
        result.value = input.value;
    } else if (
        inputTypeValue === "kilometer" &&resultTypeValue === "centimeter") {
        result.value = Number(input.value) * 100000;
    } else if (inputTypeValue === "kilometer" && resultTypeValue === "foot") {
        result.value = Number(input.value) * 3280.839895;
    } else if (inputTypeValue === "kilometer" && resultTypeValue === "inch") {
        result.value = Number(input.value) * 39370.07874;
    } else if (inputTypeValue === "kilometer" && resultTypeValue === "meter") {
        result.value = Number(input.value) * 1000;
    }


    if (inputTypeValue === "centimeter" && resultTypeValue === "kilometer") {
        result.value = Number(input.value) * 0.00001;
    } else if (
        inputTypeValue === "centimeter" &&resultTypeValue === "centimeter") {
        result.value = input.value;
    } else if (inputTypeValue === "centimeter" && resultTypeValue === "foot") {
        result.value = Number(input.value) * 0.032808399;
    } else if (inputTypeValue === "centimeter" && resultTypeValue === "inch") {
        result.value = Number(input.value) * 0.3937007874;
    } else if (inputTypeValue === "centimeter" && resultTypeValue === "meter") {
        result.value = Number(input.value) * 0.01;
    }

    if (inputTypeValue === "foot" && resultTypeValue === "kilometer") {
        result.value = Number(input.value) * 0.0003048;
    } else if (inputTypeValue === "foot" && resultTypeValue === "centimeter") {
        result.value = Number(input.value) * 30.48;
    } else if (inputTypeValue === "foot" && resultTypeValue === "foot") {
        result.value = input.value;
    } else if (inputTypeValue === "foot" && resultTypeValue === "inch") {
        result.value = Number(input.value) * 12;
    } else if (inputTypeValue === "foot" && resultTypeValue === "meter") {
        result.value = Number(input.value) * 0.3048;
    }

    if (inputTypeValue === "inch" && resultTypeValue === "kilometer") {
        result.value = Number(input.value) * 0.0000254;
    } else if (inputTypeValue === "inch" && resultTypeValue === "centimeter") {
        result.value = Number(input.value) * 2.54;
    } else if (inputTypeValue === "inch" && resultTypeValue === "foot") {
        result.value = Number(input.value) * 0.0833333333;
    } else if (inputTypeValue === "inch" && resultTypeValue === "inch") {
        result.value = input.value;
    } else if (inputTypeValue === "inch" && resultTypeValue === "meter") {
        result.value = Number(input.value) * 0.0254;
    }
}
