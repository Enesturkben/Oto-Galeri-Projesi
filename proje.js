const form=document.getElementById("car-form");
const titleElement=document.querySelector("#title");
const priceElement=document.querySelector("#price");
const urlElement=document.querySelector("#url");
const Cardbody=document.querySelectorAll(".card-body")[1];
const clear=document.getElementById("clear-cars");

//Uİ objesini Başlatma

const ui=new Uİ();

const stroge=new Stroge();

//Tüm eventleri Yükleme

eventlisteners();

function eventlisteners(){
    form.addEventListener("submit",addcar);

    document.addEventListener("DOMContentLoaded",function(){

        let cars= stroge.getCarsFromStroge();
        ui.LoadAllCars(cars);

    });

    Cardbody.addEventListener("click",deletecar);

    clear.addEventListener("click",clearAllCars);

    
}

function addcar(e){
    const title=titleElement.value;
    const price=priceElement.value;
    const url=urlElement.value;
    if(title==="" || price===""|| url===""){
        ui.displaymessage("Tüm Alanları Doldurunuz","danger");
    }
    else{
        //Yeni Araç Oluşcak
        const newCar=new car(title,price,url);
        ui.addCarToUİ(newCar); //Ara Yüze Araç Ekleme.

        stroge.addCarToStroge(newCar);

        ui.displaymessage("Araç Başarıyla Eklendi","success")
    }

    ui.clearInputs(titleElement,priceElement,urlElement);

    e.preventDefault();

   
}

function deletecar(e){
    if(e.target.id==="delete-car"){
        ui.deletecarfromUİ(e.target);

        stroge.deletecarfromstroge(e.target.parentElement.previousElementSibling.previousElementSibling);

        ui.displaymessage("Silme İşlemi Başarıyla Gerçekleşti.","success");
    }
}

function clearAllCars(){
    ui.clearAllCarsUİ();
    stroge.clearAllCarsStroge();
    ui.displaymessage("Tüm Araçlar Başarıyla Silindi","success");
}