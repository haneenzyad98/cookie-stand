'use strict';

let hour = ['6am', '7am','8am', '9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']


let seattle = {
    Location:'Seattle',
    minCusPerHour:23 ,
    maxCusPerHour :65 ,
    avgCookPerCus :6.3,
    cookPerHour:[],

    
    render:function (){
        let parent=document.getElementById('mainpage')
        let ulEl = document.createElement('ul');
        let shopName = document.createElement('h1');
        shopName.textContent=this.Location;
        parent.appendChild(shopName);
        parent.appendChild(ulEl);
        let liEl;
        let total = 0; 
        for(let i = 0 ; i <hour.length; i++)
        { 

            this.cookPerHour.push(Math.floor((Math.random() * (1+this.maxCusPerHour-this.minCusPerHour) +this.minCusPerHour)*this.avgCookPerCus));
            total =  total+this.cookPerHour[i] 
        
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
           
            liEl.textContent = hour[i]+' : ' + this.cookPerHour[i];
            
           
            }
            liEl.textContent= 'total : ' + total;
    
            },


}
   

seattle.render();


  

let tokyo = {
    Location:'Tokyo',
    minCusPerHour:3 ,
    maxCusPerHour :24 ,
    avgCookPerCus :1.2,
    cookPerHour:[],
    render:function (){
        let parent=document.getElementById('mainpage')
        let ulEl = document.createElement('ul');
        let shopName = document.createElement('h1');
        shopName.textContent=this.Location;
        parent.appendChild(shopName);
        parent.appendChild(ulEl);
        let liEl; 
        let total=0;
        for(let i = 0 ; i <hour.length; i++)
        {
            this.cookPerHour.push(Math.floor((Math.random() * (1+this.maxCusPerHour-this.minCusPerHour) +this.minCusPerHour)*this.avgCookPerCus));
            total =  total+this.cookPerHour[i] 
        
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
           
            liEl.textContent = hour[i]+' : ' + this.cookPerHour[i];
            
           
            }
            liEl.textContent= 'total : ' + total;}

           
};

tokyo.render();


   

    


let dubai = {
    Location:'Dubai',
    minCusPerHour:11 ,
    maxCusPerHour:38 ,
    avgCookPerCus:3.7,
    cookPerHour:[],
    render:function (){
        let parent=document.getElementById('mainpage')
        let ulEl = document.createElement('ul');
        let shopName = document.createElement('h1');
        shopName.textContent=this.Location;
        parent.appendChild(shopName);
        parent.appendChild(ulEl);
        let liEl; 
        let total=0;
        for(let i = 0 ; i <hour.length; i++)
        {
            this.cookPerHour.push(Math.floor((Math.random() * (1+this.maxCusPerHour-this.minCusPerHour) +this.minCusPerHour)*this.avgCookPerCus));
            total =  total+this.cookPerHour[i] 
        
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
           
            liEl.textContent = hour[i]+' : ' + this.cookPerHour[i];
            
           
            }
            liEl.textContent= 'total : ' + total;}

           
};



dubai.render();





let paris = {
    Location:'Paris',
    minCusPerHour:20,
    maxCusPerHour :38 ,
    avgCookPerCus :2.3,
    cookPerHour:[],
    render:function (){
        let parent=document.getElementById('mainpage')
        let ulEl = document.createElement('ul');
        let shopName = document.createElement('h1');
        shopName.textContent=this.Location;
        parent.appendChild(shopName);
        parent.appendChild(ulEl);
        let liEl; 
        let total=0;
        for(let i = 0 ; i <hour.length; i++)
        {
            this.cookPerHour.push(Math.floor((Math.random() * (1+this.maxCusPerHour-this.minCusPerHour) +this.minCusPerHour)*this.avgCookPerCus));
            total =  total+this.cookPerHour[i] 
        
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
           
            liEl.textContent = hour[i]+' : ' + this.cookPerHour[i];
            
           
            }
            liEl.textContent= 'total : ' + total;}

           
};

paris.render();






let lima = {
    Location:'Lima',
    minCusPerHour:2,
    maxCusPerHour:16,
    avgCookPerCus:4.6,
    cookPerHour:[],
    render:function (){
        let parent=document.getElementById('mainpage')
        let ulEl = document.createElement('ul');
        let shopName = document.createElement('h1');
        shopName.textContent=this.Location;
        parent.appendChild(shopName);
        parent.appendChild(ulEl);
        let liEl; 
        let total=0;
        for(let i = 0 ; i <hour.length; i++)
        {
            this.cookPerHour.push(Math.floor((Math.random() * (1+this.maxCusPerHour-this.minCusPerHour) +this.minCusPerHour)*this.avgCookPerCus));
            total =  total+this.cookPerHour[i] 
        
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
           
            liEl.textContent = hour[i]+' : ' + this.cookPerHour[i];
            
            }
            liEl.textContent= 'total : ' + total;}

    

};

lima.render();

// let image = document.createElement('img');
// parent.appendChild(image);
//  image.setAttribute('src','img/' + salmon+'.png');

  


