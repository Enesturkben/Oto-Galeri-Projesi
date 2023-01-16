function Stroge() {

    Stroge.prototype.addCarToStroge = function (newCar) {

        let cars=this.getCarsFromStroge();

        cars.push(newCar);
        localStorage.setItem("cars",JSON.stringify(cars))

    
    }

}

Stroge.prototype.getCarsFromStroge = function () {

    let cars;

    if (localStorage.getItem("cars") === null) {

        cars = [];
    }
    else {
        cars = JSON.parse(localStorage.getItem("cars"));
    }
    return cars;

}
Stroge.prototype.deletecarfromstroge=function(cartitle){
    let cars=this.getCarsFromStroge();

    cars.forEach(function(car,index){
        cars.splice(index,1);

        localStorage.setItem("cars",JSON.stringify(cars));

    });

}

Stroge.prototype.clearAllCarsStroge=function(){
    localStorage.removeItem("cars");
}