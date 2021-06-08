circleArea = (radius) => {
    let area = Math.pow(radius, 2) * Math.PI;
    console.log(`Area of the circle: ${area}`);
}

circleCircumference = (radius) => {
    let circumference = Math.PI * 2 * radius;
    console.log(`Circumference of the circle: ${circumference}`);
}

module.exports = {
    circleArea,
    circleCircumference
}
