const logo = document.querySelectorAll("#logo path");

logo.forEach((path, index) => {
    console.log(`Path ${index} is ${path.getTotalLength()} width`);
});