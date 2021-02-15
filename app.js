'use strict';


let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
let parent = document.getElementById('parent')
let table = document.createElement('table');
parent.appendChild(table);

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function city(Location, minCusPerHour, maxCusPerHour, avgCookPerCus, CEHour, Coeh, total) {
    this.Location = Location
    this.minCusPerHour = minCusPerHour
    this.maxCusPerHour = maxCusPerHour
    this.avgCookPerCus = avgCookPerCus
    this.CEHour = CEHour
    this.Coeh = Coeh
    this.total = total
}
city.prototype.calCEHour= function(){
    for(let i = 0 ; i <hour.length; i++)
    { 
        this.CEHour.push(random(this.minCusPerHour,this
            .maxCusPerHour));   
    }}

    city.prototype.calCoeh=function(){
        for (let i=0;i<hour.length;i++){
 this.Coeh.push((Math.floor(this.
     CEHour[i]*this.avgCookPerCus)));
     this.total+=this.Coeh[i]}}

// // to fill first row in tabel
// for (let i=0;i<hour.length;i++){
//     let th1 =document.createElement('th');
//         headerRow.appendChild(th1);
//         th1.textContent=hour[i];
//         }


     city.prototype.render=function(){

        let tr = document.createElement('tr')
        table.appendChild(tr);
        let td = document.createElement('td') ; 
        td.textContent = this.Location
        tr.appendChild(td);

        for(let i = 0 ; i <hour.length; i++)
        { let td = document.createElement('td') ; 
        tr.appendChild(td);
        td.textContent = this.Coeh[i]
        }

     }


     let seattle=new city ('seattle','23','65','6.3',[],[]);
     let tokyo=new city ('tokyo','3','24','1.2',[],[]);
     let Dubai=new city ('Dubai','11','38','3.7',[],[]);
     let Paris=new city ('Paris','20','38','2.3',[],[]);
     let Lima=new city ('Lima','2','16','4.6',[],[]);
     seattle.calCEHour()
     seattle.calCoeh()
     seattle.render()
     console.log(seattle);

     tokyo.calCEHour()
     tokyo.calCoeh()
     tokyo.render()
     console.log(tokyo);

     Dubai.calCEHour()
     Dubai.calCoeh()
     Dubai.render()
     console.log(Dubai);

     Paris.calCEHour()
     Paris.calCoeh()
     Paris.render()
     console.log(Paris);











