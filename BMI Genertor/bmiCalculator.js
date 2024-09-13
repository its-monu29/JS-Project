const form = document.querySelector('form');


form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')


    if(height === ''|| height < 0 || isNaN(height) ){
        results.innerHTML = `please give a valid height ${height}`;
    }
    else if(weight === ''|| weight < 0 || isNaN(weight) ){
        results.innerHTML = `please give a valid weight ${weight}`;
    }
    else{
       const bmi =  (weight / ((height*weight)/10000)).toFixed(3)
    //    show the results
    results.innerHTML = `<span>${bmi}</spna>`
    }

    if(weight < 18.6){
        results.innerHTML = `you are  under weight ${weight}`
    }
})
