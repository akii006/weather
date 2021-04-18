const submit = document.getElementById('serchbtn');
const city = document.getElementById('cityname');
const city_ = document.getElementById('city_name');
const temp = document.getElementById('tempp');
const temp_status = document.getElementById('temp_status');

const info = async(event) => {
    event.preventDefault();
    let cityval = city.value;

    if(cityval ===""){
        city_.innerText = `plz write the city name`;
    }
    else{
        try{
        let url= `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metrics&appid=d30db5caabdafddc7c113fb26894b278`;
        const response = await fetch(url);
        const data = await response.json();
        const arr = [data];

        temp.innerText = (Math.floor((arr[0].main.temp) - 273.15));         
        temp_status.innerText = arr[0].weather[0].main;         
        city_.innerText = `temp is :`;
        }
        catch{
        city_.innerText = `plz write the city name`;
        }
    }

}
submit.addEventListener('click',info);