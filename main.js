

const img = document.getElementById("img");
const copyright = document.getElementById("copyright");
const date = document.getElementById("date");
const expl = document.getElementById("expl");
const zoom = document.getElementById("zoom");
const link = document.getElementById("link");
const subhead = document.getElementById("subhead");
const vid = document.getElementById("vid");

 
const url = 'https://api.nasa.gov/planetary/apod?&api_key=';
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

    expl.textContent = data.explanation;

    subhead.innerHTML = data.title;

    img.src = data.url;

    zoom.href = data.hdurl;

    if (data.hdurl === undefined) {
        console.log('Video not image today');
        zoom.href = data.url;
        link.href = data.url;
        img.src = '';
        link.classList.add('show');
        
    } 
    if (data.copyright === undefined) {
        copyright.textContent = '© ' + 'Nasa';
    }
    
}

fetchNASAData();
