

const img = document.getElementById("img");
const copyright = document.getElementById("copyright");
const date = document.getElementById("date");
const expl = document.getElementById("expl");
const zoom = document.getElementById("zoom");

const url = 'https://api.nasa.gov/planetary/apod?api_key=';
const key = api.API_KEY

const fetchNASAData = async () => {
    try {
        const response = await fetch(`${url}${key}`);
        const data = await response.json();
        console.log('NASA APOD data', data);
        displayData(data);
    } catch (error) {
        console.log(error);
    }
}

const displayData = data => {
    copyright.textContent = '© ' + ' ' + data.copyright;
  
    date.textContent = data.date;

    img.src = data.hdurl;

    expl.textContent = data.explanation;

    zoom.href = data.hdurl;
    
}

fetchNASAData();