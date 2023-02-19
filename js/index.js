document.getElementById('card-one').addEventListener('click', function () {
    const cardOneTitle = document.getElementById('card-one-title').innerText;
    const areaValue = document.getElementById('area-value').innerText;
    const fieldOne = document.getElementById('field-one').value;
    const fieldTwo = document.getElementById('field-two').value;
    
    const cardResultOne = parseFloat(areaValue) * parseFloat(fieldOne) * parseFloat(fieldTwo);
    console.log(cardResultOne.toFixed(2) );
    
    
})

document.getElementById('card-two').addEventListener('click', function () {
    const cardTwoTitle = document.getElementById('card-two-title').innerText;
    console.log(cardTwoTitle);
    const fieldThree = document.getElementById('field-three').value;
    const fieldFour = document.getElementById('field-four').value;
    
    const cardResultTwo =  parseFloat(fieldThree) * parseFloat(fieldFour);
    console.log(cardResultTwo.toFixed(2));
    
})

document.getElementById('card-three').addEventListener('click', function () {
    const cardThreeTitle = document.getElementById('card-title-three').innerText;
    console.log(cardThreeTitle);
    const textOne = document.getElementById('text-one').innerText;
    const textTwo = document.getElementById('text-two').innerText;
    
    const cardResultThree =  parseFloat(textOne) * parseFloat(textTwo);
    console.log(typeof cardResultThree);
    
})

document.getElementById('card-four').addEventListener('click', function () {
    const cardFourTitle = document.getElementById('card-title-four').innerText;
    console.log(cardFourTitle);
    const areaValue = document.getElementById('area-value').innerText
    const textOne = document.getElementById('text-one').innerText;
    const textTwo = document.getElementById('text-two').innerText;

    const careResultFour = parseFloat(areaValue) * parseFloat(textOne) * parseFloat(textTwo);
    console.log( typeof careResultFour);

})

document.getElementById('card-five').addEventListener('click', function () {
    const areaValue = document.getElementById('area-value').innerText;
    const textOne = document.getElementById('text-one').innerText;
    const textTwo = document.getElementById('text-two').innerText;

    const cardResultFive = parseFloat(areaValue) * parseFloat(textOne) * parseFloat(textTwo);
    console.log(cardResultFive);
})








// Extra work code
