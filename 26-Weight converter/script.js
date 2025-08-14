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

//  kilogram
    if (inputTypeValue === "kilogram" && resultTypeValue === "gram") {
        result.value = Number(input.value) * 1000;
    } else if (inputTypeValue === "kilogram" && resultTypeValue === "milligram") {
        result.value = Number(input.value) * 1000000;
    } else if (inputTypeValue === "kilogram" && resultTypeValue === "decigram") {
        result.value = Number(input.value) * 10000;
    } else if (inputTypeValue === "kilogram" && resultTypeValue === "pounds") {
        result.value = Number(input.value) * 2.2046266;
    } else if (inputTypeValue === "kilogram" && resultTypeValue === "kilogram") {
        result.value = input.value;
    }

    if (inputTypeValue === "gram" && resultTypeValue === "kilogram") {
        result.value = Number(input.value) * 0.001;
    } else if (inputTypeValue === "gram" && resultTypeValue === "milligram") {
        result.value = Number(input.value) * 1000;
    } else if (inputTypeValue === "gram" && resultTypeValue === "decigram") {
        result.value = Number(input.value) * 10;
    } else if (inputTypeValue === "gram" && resultTypeValue === "pounds") {
        result.value = Number(input.value) * 0.0022046266;
    } else if (inputTypeValue === "gram" && resultTypeValue === "gram") {
        result.value = input.value;
    }

    if (inputTypeValue === "milligram" && resultTypeValue === "kilogram") {
        result.value = Number(input.value) * 0.000001;
    } else if (inputTypeValue === "milligram" && resultTypeValue === "gram") {
        result.value = Number(input.value) * 0.001;
    } else if (inputTypeValue === "milligram" && resultTypeValue === "decigram") {
        result.value = Number(input.value) * 0.01;
    } else if (inputTypeValue === "milligram" && resultTypeValue === "pounds") {
        result.value = Number(input.value) * 0.0000022046266;
    } else if (inputTypeValue === "milligram" && resultTypeValue === "milligram") {
        result.value = input.value;
    }

    if (inputTypeValue === "decigram" && resultTypeValue === "kilogram") {
        result.value = Number(input.value) * 0.0001;
    } else if (inputTypeValue === "decigram" && resultTypeValue === "gram") {
        result.value = Number(input.value) * 0.1;
    } else if (inputTypeValue === "decigram" && resultTypeValue === "milligram") {
        result.value = Number(input.value) * 100;
    } else if (inputTypeValue === "decigram" && resultTypeValue === "pounds") {
        result.value = Number(input.value) * 0.00022046266;
    } else if (inputTypeValue === "decigram" && resultTypeValue === "decigram") {
        result.value = input.value;
    }

    if (inputTypeValue === "pounds" && resultTypeValue === "kilogram") {
        result.value = Number(input.value) * 0.453592;
    } else if (inputTypeValue === "pounds" && resultTypeValue === "gram") {
        result.value = Number(input.value) * 453.592;
    } else if (inputTypeValue === "pounds" && resultTypeValue === "milligram") {
        result.value = Number(input.value) * 453592.37;
    } else if (inputTypeValue === "pounds" && resultTypeValue === "decigram") {
        result.value = Number(input.value) * 4535.92;
    } else if (inputTypeValue === "pounds" && resultTypeValue === "pounds") {
        result.value = input.value;
    }

}
