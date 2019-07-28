const TechtonicaGradDate = new Date(2019,11,18,18,30,0,0);

let myGradDate = TechtonicaGradDate.toDateString();
let graduationAnnouncement = TechtonicaGradDate.toLocaleDateString();
let graduationDayTime = TechtonicaGradDate.toLocaleTimeString();

const TechtonicaMiddleTeal = '#0093b5';

const body = document.querySelector('body');
const h1 = document.createElement('h1');
const p = document.createElement('p');
let announcement = `${graduationAnnouncement} at ${graduationDayTime}`;
p.innerText = 'Please join us on ' + announcement;
h1.style.color = TechtonicaMiddleTeal;
h1.textContent = 'Techtonica Graduation';
body.innerHTML = '';
// body.style.backgroundColor = "#efefef";
// body.style.textAlign = 'center'
body.style = `
background-color: #efefef;
text-align: center;
font-size: 3.5rem;
`
body.appendChild(h1);
h1.insertAdjacentElement('afterend',p);