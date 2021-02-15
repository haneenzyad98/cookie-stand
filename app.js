'use strict';

let hour = ['6am', '7am','8am', '9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']

function random(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

let seattle = {
    Location:'Seattle',
    minCusPerHour:23 ,
    maxCusPerHour :65 ,
    avgCookPerCus :6.3,
    CEHour:[],
    Coeh:[],
    total:0,

calcCEHour:function(){
        for(let i = 0 ; i <hour.length; i++)
        { this.CEHour.push(random(this.minCusPerHour,this
                .maxCusPerHour));   
        }},

calcCoeh:function(){
       for (let i=0;i<hour.length;i++){
this.Coeh.push(Math.floor(this.
    CEHour[i]*this.avgCookPerCus));
    this.total+=this.Coeh[i]
    
}
//console.log(this.Coeh)
},
rander:function(){
let parent=document.getElementById('parent');
let shpn =document.createElement('h3');
parent.appendChild(shpn);
shpn.textContent=this.Location;
let uol=document.createElement('ul');
parent.appendChild(uol);

for (let i=0;i<hour.length;i++){
let liit=document.createElement('li');
uol.appendChild(liit);
liit.textContent = `${hour[i]}: ${this.Coeh[i]} cookies` 

}
let totalit=document.createElement('li')
uol.appendChild(totalit)
totalit.textContent=`total: ${this.total} cookies`;
}}
seattle.calcCEHour();
seattle.calcCoeh();
seattle.rander();


/////////////////////////////////////
let tokyo = {
    Location:'tokyo',
    minCusPerHour:23 ,
    maxCusPerHour :65 ,
    avgCookPerCus :6.3,
    CEHour:[],
    Coeh:[],
    total:0,

calcCEHour:function(){
        for(let i = 0 ; i <hour.length; i++)
        { this.CEHour.push(random(this.minCusPerHour,this
                .maxCusPerHour));   
        }},

calcCoeh:function(){
       for (let i=0;i<hour.length;i++){
this.Coeh.push(Math.floor(this.
    CEHour[i]*this.avgCookPerCus));
    this.total+=this.Coeh[i]
    
}
//console.log(this.Coeh)
},
rander:function(){
let parent=document.getElementById('parent');
let shpn =document.createElement('h3');
parent.appendChild(shpn);
shpn.textContent=this.Location;
let uol=document.createElement('ul');
parent.appendChild(uol);

for (let i=0;i<hour.length;i++){
let liit=document.createElement('li');
uol.appendChild(liit);
liit.textContent = `${hour[i]}: ${this.Coeh[i]} cookies` 

}
let totalit=document.createElement('li')
uol.appendChild(totalit)
totalit.textContent=`total: ${this.total} cookies`;
}}
tokyo.calcCEHour();
tokyo.calcCoeh();
tokyo.rander();



///////////////////////////////////////
    
let Dubai = {
    Location:'Dubai',
    minCusPerHour:23 ,
    maxCusPerHour :65 ,
    avgCookPerCus :6.3,
    CEHour:[],
    Coeh:[],
    total:0,

calcCEHour:function(){
        for(let i = 0 ; i <hour.length; i++)
        { this.CEHour.push(random(this.minCusPerHour,this
                .maxCusPerHour));   
        }},

calcCoeh:function(){
       for (let i=0;i<hour.length;i++){
this.Coeh.push(Math.floor(this.
    CEHour[i]*this.avgCookPerCus));
    this.total+=this.Coeh[i]
    
}
//console.log(this.Coeh)
},
rander:function(){
let parent=document.getElementById('parent');
let shpn =document.createElement('h3');
parent.appendChild(shpn);
shpn.textContent=this.Location;
let uol=document.createElement('ul');
parent.appendChild(uol);

for (let i=0;i<hour.length;i++){
let liit=document.createElement('li');
uol.appendChild(liit);
liit.textContent = `${hour[i]}: ${this.Coeh[i]} cookies` 

}
let totalit=document.createElement('li')
uol.appendChild(totalit)
totalit.textContent=`total: ${this.total} cookies`;
}}
Dubai.calcCEHour();
Dubai.calcCoeh();
Dubai.rander();
////////////////////////////////
let Paris = {
    Location:'Paris',
    minCusPerHour:23 ,
    maxCusPerHour :65 ,
    avgCookPerCus :6.3,
    CEHour:[],
    Coeh:[],
    total:0,

calcCEHour:function(){
        for(let i = 0 ; i <hour.length; i++)
        { this.CEHour.push(random(this.minCusPerHour,this
                .maxCusPerHour));   
        }},

calcCoeh:function(){
       for (let i=0;i<hour.length;i++){
this.Coeh.push(Math.floor(this.
    CEHour[i]*this.avgCookPerCus));
    this.total+=this.Coeh[i]
    
}
//console.log(this.Coeh)
},
rander:function(){
let parent=document.getElementById('parent');
let shpn =document.createElement('h3');
parent.appendChild(shpn);
shpn.textContent=this.Location;
let uol=document.createElement('ul');
parent.appendChild(uol);

for (let i=0;i<hour.length;i++){
let liit=document.createElement('li');
uol.appendChild(liit);
liit.textContent = `${hour[i]}: ${this.Coeh[i]} cookies` 

}
let totalit=document.createElement('li')
uol.appendChild(totalit)
totalit.textContent=`total: ${this.total} cookies`;
}}
Paris.calcCEHour();
Paris.calcCoeh();
Paris.rander();
/////////////////////
let Lima = {
    Location:'Lima',
    minCusPerHour:23 ,
    maxCusPerHour :65 ,
    avgCookPerCus :6.3,
    CEHour:[],
    Coeh:[],
    total:0,

calcCEHour:function(){
        for(let i = 0 ; i <hour.length; i++)
        { this.CEHour.push(random(this.minCusPerHour,this
                .maxCusPerHour));   
        }},

calcCoeh:function(){
       for (let i=0;i<hour.length;i++){
this.Coeh.push(Math.floor(this.
    CEHour[i]*this.avgCookPerCus));
    this.total+=this.Coeh[i]
    
}
//console.log(this.Coeh)
},
rander:function(){
let parent=document.getElementById('parent');
let shpn =document.createElement('h3');
parent.appendChild(shpn);
shpn.textContent=this.Location;
let uol=document.createElement('ul');
parent.appendChild(uol);

for (let i=0;i<hour.length;i++){
let liit=document.createElement('li');
uol.appendChild(liit);
liit.textContent = `${hour[i]}: ${this.Coeh[i]} cookies` 

}
let totalit=document.createElement('li')
uol.appendChild(totalit)
totalit.textContent=`total: ${this.total} cookies`;
}}
Lima.calcCEHour();
Lima.calcCoeh();
Lima.rander();