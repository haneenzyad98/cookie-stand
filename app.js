'use strict';

let shop =[];
let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
//---------------------------------------------
let parent = document.getElementById('parent')
let table = document.createElement('table');
parent.appendChild(table);
//----------------------------------------------

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//----------------------------------------------------

function City(Location, minCusPerHour, maxCusPerHour, avgCookPerCus, CEHour, Coeh) {
    this.Location = Location;
    this.minCusPerHour = minCusPerHour;
    this.maxCusPerHour = maxCusPerHour;
    this.avgCookPerCus = avgCookPerCus;
    this.CEHour = CEHour;
    this.Coeh = Coeh;
    this.total = 0;
      shop.push(this);
    }
//-------------------------------------------------
City.prototype.calCEHour= function(){
    for(let i = 0 ; i <hour.length; i++)
    { 
        this.CEHour.push(random(this.minCusPerHour,this
            .maxCusPerHour));   
    }}  
City.prototype.calCoeh=function(){
        for (let i=0;i<hour.length;i++){
 this.Coeh.push((Math.floor(this.
     CEHour[i]*this.avgCookPerCus)));
     this.total+=this.Coeh[i]}}
//-----------------------------------------------------
    //   for (let j=-1;j<hour.length;j++){
    //       let th =document.createElement('th')
    //       table.appendChild(th)
    //     th.textContent=hour[j]  }

//-------------------------------------------------------
// City.prototype.render=function(){

//         let tr = document.createElement('tr')
//         table.appendChild(tr);
//         let td = document.createElement('td') ; 
//         td.textContent = this.Location
//         tr.appendChild(td);

//         for(let i = 0 ; i <hour.length; i++)
//         { let td = document.createElement('td') ; 
//         tr.appendChild(td);
//         td.textContent = this.Coeh[i]    
//     }

//     let td1 = document.createElement('td') ; 
//      tr.appendChild(td1);  
//     td1.textContent =this.total;
//     }

//---------------------------------------------------
  
    
    let seattle=new City ('seattle','23','65','6.3',[],[]);
     let tokyo=new City ('tokyo','3','24','1.2',[],[]);
     let Dubai=new City ('Dubai','11','38','3.7',[],[]);
     let Paris=new City ('Paris','20','38','2.3',[],[]);
     let Lima=new City ('Lima','2','16','4.6',[],[]);
    
    
//---------------------------------------- 

 function mh(){
let headerRow=document.createElement('tr');
table.appendChild(headerRow);
let fth = document.createElement('th')
fth.textContent ='Name'
headerRow.appendChild(fth) 

for (let i=0;i<hour.length;i++){
    let the=document.createElement('th')
    headerRow.appendChild(the)
    the.textContent=hour[i];
}
let lastth=document.createElement('th')
lastth.textContent='Total'
headerRow.appendChild(lastth)
} 

City.prototype. rander=function(){
    let dataRow = document.createElement('tr');
    table.appendChild(dataRow);

    let namedata =document.createElement('td');
    dataRow.appendChild(namedata);
    namedata.textContent=this.Location;

    for (let i=0 ;i<hour.length;i++){
let tdelement=document.createElement('td');
tdelement.textContent=this.Coeh[i];
dataRow.appendChild(tdelement)}

let totald= document.createElement('td');
dataRow.appendChild(totald)
totald.textContent=this.total
}

let makefoo=function(){
    let footerrow =document.createElement('tr');
    table.appendChild(footerrow);
    let footerth =document.createElement('th');
    footerrow.appendChild(footerth);
    footerth.textContent ="Totals";

    let mtotal =0;
    for (let i =0;i<hour.length;i++){
        let total1 =0;

        for (let j=0;j<shop.length;j++){
           total1+=shop[j].Coeh[i]
            mtotal+=shop[j].Coeh[i]}

           footerth=document.createElement('th');
           footerrow.appendChild(footerth);
           footerth.textContent=total1;
    }
    let finth =document.createElement('th')
    footerrow.appendChild(finth);
    finth.textContent=mtotal
}
console.log(shop)
    mh();
   
 //------------------------------------------ 
    
     seattle.calCEHour()
     seattle.calCoeh()
     seattle.rander()
     //console.log(seattle);

     tokyo.calCEHour()
     tokyo.calCoeh()
     tokyo.rander()
     //console.log(tokyo);

     Dubai.calCEHour()
     Dubai.calCoeh()
     Dubai.rander()
     //console.log(Dubai);

     Paris.calCEHour()
     Paris.calCoeh()
     Paris.rander()
     //console.log(Paris);

     Lima.calCEHour()
     Lima.calCoeh()
     Lima.rander()
     //console.log(Lima)
     //---------------------------------------

makefoo();















