function Uİ() {


}
Uİ.prototype.addCarToUİ = function (newCar) {

    const carList = document.getElementById("cars");
    carList.innerHTML += ` 
     <tr>
        <td><img src="${newCar.url}" class="img-fluid img-thumbnail"></td>
        <td>${newCar.title}</td>
        <td>${newCar.price}</td>
        <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
   </tr>
    
      `
}

Uİ.prototype.clearInputs=function(element1,element2,element3){
    element1.value="";
    element2.value="";
    element3.value="";
}

Uİ.prototype.displaymessage=function(message,type){

    const cardBody=document.querySelector(".card-body");

    //Alert Oluşturma
    const div=document.createElement("div");
    div.className=`alert alert-${type}`;
    div.textContent=message;

    cardBody.appendChild(div);

    setTimeout(function(){
        div.remove();
    },2000);

}

Uİ.prototype.LoadAllCars=function(cars){

    const carlist=document.getElementById("cars");

    cars.forEach(function(car){

        carlist.innerHTML+= ` 
        <tr>
           <td><img src="${car.url}" class="img-fluid img-thumbnail"></td>
           <td>${car.title}</td>
           <td>${car.price}</td>
           <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
      </tr>
       
         `




    });

}

Uİ.prototype.deletecarfromUİ=function(element){
    element.parentElement.parentElement.remove();
}
Uİ.prototype.clearAllCarsUİ=function(){
    const carlist=document.getElementById("cars");
    while(carlist.firstElementChild!==null){
        carlist.firstElementChild.remove();
    }

}

