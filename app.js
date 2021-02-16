'use strict';


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
    this.Location = Location
    this.minCusPerHour = minCusPerHour
    this.maxCusPerHour = maxCusPerHour
    this.avgCookPerCus = avgCookPerCus
    this.CEHour = CEHour
    this.Coeh = Coeh
    this.total = 0
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
      for (let j=-1;j<hour.length;j++){
          let th =document.createElement('th')
          table.appendChild(th)
        th.textContent=hour[j]  }
//-------------------------------------------------------
City.prototype.render=function(){

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

    let td1 = document.createElement('td') ; 
     tr.appendChild(td1);  
    td1.textContent =this.total;
    }

//---------------------------------------------------
     let seattle=new City ('seattle','23','65','6.3',[],[]);
     let tokyo=new City ('tokyo','3','24','1.2',[],[]);
     let Dubai=new City ('Dubai','11','38','3.7',[],[]);
     let Paris=new City ('Paris','20','38','2.3',[],[]);
     let Lima=new City ('Lima','2','16','4.6',[],[]);
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

     Lima.calCEHour()
     Lima.calCoeh()
     Lima.render()
     console.log(Lima)
     //---------------------------------------
    
let tr = document.createElement('tr')
    table.appendChild(tr);
    let th = document.createElement('th')
    tr.appendChild(th)
    th.textContent='total'
    for (let z=0;z<15;z++){
 
    let th = document.createElement('th')
    tr.appendChild(th)
    }
















