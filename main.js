let status=false;
// 
let arr=[{
              Name:"Varun",
              ID:1,
              skills:"ReactJS",
              project:"cognizant internal",
              HCM:"alex",
              placeholder:"https://cdn2.vectorstock.com/i/thumb-large/46/76/person-gray-photo-placeholder-man-material-design-vector-23804676.jpg"
 },
 {
              Name:"Arun",
              ID:2,
              skills:"Bootstrap",
              project:"cognizant internal",
              HCM:"alex",
              placeholder:"https://cdn2.vectorstock.com/i/thumb-large/46/76/person-gray-photo-placeholder-man-material-design-vector-23804676.jpg"
 },
 {
              Name:"Siri",
              ID:3,
              skills:"ReactJS",
              project:"cognizant internal",
              HCM:"alex",
              placeholder:"https://cdn3.vectorstock.com/i/thumb-large/55/92/person-gray-photo-placeholder-woman-vector-24715592.jpg"
     },
     {
              Name:"Vijay",
              ID:4,
              skills:"reactJS",
              project:"cognizant internal",
              HCM:"alex",
              placeholder:"https://cdn2.vectorstock.com/i/thumb-large/46/76/person-gray-photo-placeholder-man-material-design-vector-23804676.jpg"
     },
      {
              Name:"Shreya",
              ID:5,
              skills:"reactJS",
              project:"cognizant internal",
              HCM:"alex",
              placeholder:"https://cdn3.vectorstock.com/i/thumb-large/55/92/person-gray-photo-placeholder-woman-vector-24715592.jpg"
      },
      {
              Name:"Shyam",
              ID:6,
              skills:"reactJS",
              project:"cognizant internal",
              HCM:"alex",
              placeholder:"https://cdn2.vectorstock.com/i/thumb-large/46/76/person-gray-photo-placeholder-man-material-design-vector-23804676.jpg"
        },
        {
              Name:"Anisha",
              ID:7,
              skills:"reactJS",
              project:"cognizant internal",
              HCM:"alex",
              placeholder:"https://cdn3.vectorstock.com/i/thumb-large/55/92/person-gray-photo-placeholder-woman-vector-24715592.jpg"
        },
        {
              Name:"Waseem",
              ID:8,
              skills:"reactJS",
              project:"cognizant internal",
              HCM:"alex",
              placeholder:"https://cdn2.vectorstock.com/i/thumb-large/46/76/person-gray-photo-placeholder-man-material-design-vector-23804676.jpg"
        },
        {
              Name:"Pooja",
              ID:9,
              skills:"reactJS",
              project:"cognizant internal",
              HCM:"alex",
              placeholder:"https://cdn3.vectorstock.com/i/thumb-large/55/92/person-gray-photo-placeholder-woman-vector-24715592.jpg"
        },
        {
              Name:"Vignesh",
              ID:10,
              skills:"reactJS",
              project:"cognizant internal",
              HCM:"alex",
              placeholder:"https://cdn2.vectorstock.com/i/thumb-large/46/76/person-gray-photo-placeholder-man-material-design-vector-23804676.jpg"
         }]
                  
         myfunc();

  //---------------------------------------FUNCTION FOR EDITING THE ROW THING----------------                
  function edit(ind){
   let x=document.getElementById("skil"+ind);
   let y=document.getElementById("ed"+ind);
   x.innerHTML='<input type="text" id="entered'+ind+'">';
  y.innerHTML='<i class="far fa-save" onclick=save('+ind+')></i>'
   
   }

//------------------------------------------FUNCTION FOR SAVING THE ROW-----------------
   function save(ind){
    let data=document.getElementById("entered"+ind).value;
     let x=document.getElementById("skil"+ind);
     x.innerHTML=data;
     let y=document.getElementById("ed"+ind);
     let z=document.getElementById("skils"+ind);
     z.innerHTML="Skills: "+data;
     y.innerHTML='<i class="far fa-edit" onclick="edit('+ind+')"></i>'
   }
   let tab = document.getElementById("mytable")
//-----------------------FUNCTION FOR DELETING THE ROW--------------
  function odelete(ind){
   arr.splice(ind,1)
   let x= document.querySelectorAll("tr");
   x[ind+1].style.display="none"
  console.log(arr)
   odeletec(ind);
   }
  //-----------------------FUNCTION FOR DELETING THE CARD-----------
  function odeletec(ind){
   let x=document.getElementById("crd"+ind)
   x.style.display="none";
   odelete(ind);
  }
  //------------------------FUNCTION FOR SAVING THE CARD--------------------
  function savec(ind){
let data=document.getElementById("enteredc"+ind).value;
let z=document.getElementById("skilc"+ind);
z.innerHTML="Skills: "+data;
let x=document.getElementById("skil"+ind);
x.innerHTML=data;   
  }
  //-----------------------------FUNCTION FOR EDITING THE CARD---------------
  function editc(ind){
      let x=document.getElementById("skilc"+ind)
      x.innerHTML='<label for="enteredc'+ind+'">Skills:</label><input type="text" id="enteredc'+ind+'">';
      
  }
 
  for(let obj of arr){
   let row= tab.insertRow();
    let cell1=row.insertCell();
    let cell2=row.insertCell();
    let cell3=row.insertCell();
    cell3.id="skil"+arr.indexOf(obj);
    let cell4=row.insertCell();
    let cell5=row.insertCell();
    let cell6=row.insertCell();
    let cell7=row.insertCell();
    
    cell1.innerHTML=obj.Name;
    cell2.innerHTML=obj.ID;
    cell3.innerHTML=obj.skills;
    cell3.className="editable";
    cell4.innerHTML=obj.project;
    cell5.innerHTML=obj.HCM;
    cell6.innerHTML='<i class="far fa-edit" onclick="edit('+arr.indexOf(obj)+')"></i>'
    cell6.id="ed"+arr.indexOf(obj);
    cell7.innerHTML='<i class="far fa-minus-square" onclick="odelete('+arr.indexOf(obj)+')"></i>'

   }
 
  
    for(let obj of arr){
    let coll=document.createElement("div")
    coll.className="col";
    coll.id="crd"+arr.indexOf(obj);
    let el = document.createElement("div")
    el.className="card shadow m-5";
    
    let elh=document.createElement("div")
    elh.className="card-header bg-dark"
    el.appendChild(elh)
    elh.innerHTML='<i class="fas fa-times" style="color:red;float:right;font-size:30px" onclick="odeletec('+arr.indexOf(obj)+')"></i>'
    
    let el2=document.createElement("div")
    el2.className="card-body text-center"
    el.appendChild(el2);
    let imgg=document.createElement('img')
    imgg.src=obj.placeholder
    imgg.style.width="100%";
    el2.appendChild(imgg)
   let pname=document.createElement("p")
   pname.innerHTML="Name: "+ obj.Name
   el2.appendChild(pname)
   let pid=document.createElement("p")
   pid.innerHTML="ID: " + obj.ID
   pname.style.marginTop="20px";
   el2.appendChild(pid)
   let pskills=document.createElement("p")
   pskills.innerHTML="Skills: " + obj.skills
   pskills.id="skilc"+arr.indexOf(obj);
   el2.appendChild(pskills);
   let pproject=document.createElement("p")
   pproject.innerHTML="project:"+ obj.project
   el2.appendChild(pproject)
   let phcm=document.createElement("p")
   phcm.innerHTML="HCM: " + obj.HCM
   el2.appendChild(phcm)
  let elf=document.createElement("div")
  el.appendChild(elf);
  elf.innerHTML='<button class="btn btn-success" style="margin-bottom:10px;margin-left:50px" onclick="editc('+arr.indexOf(obj)+')">Edit</button> <button class="btn btn-primary" style="margin-bottom:10px;float:right;margin-right:50px" onclick="savec('+arr.indexOf(obj)+')">Save</button>'
  elf.id="but"+ arr.indexOf(obj);

  coll.appendChild(el)
   let p=document.getElementById("smc")
   p.appendChild(coll);
  }
 
function myfunc(arr){
 status=!status;
 if(!status){
   let x=document.getElementById("smc");
   let y=document.getElementById("con");
   let a=document.getElementById("grid");
   let b=document.getElementById("tableveiw");
   x.style.display="none";
   y.style.display="block";
   a.style.display="block";
   b.style.display="none";

 }
 else{
  let x=document.getElementById("smc");
  let y=document.getElementById("con");
  let a=document.getElementById("grid");
  let b=document.getElementById("tableveiw");
  x.style.display="flex";
  y.style.display="none";
  a.style.display="none";
   b.style.display="block";
 
 }
 
 

}