(function () {

    function bookTicket(source, destination, mode) {
        try {
            var data =substring.x();
            var discount;
            if (mode == "Flight") {
                discount = .1;
            }
            else if (mode == "Bus") {
                discount = .2;
            }
            else {
                discount = .05;
            }


            return {
                printTicket: function () {
                    console.log("--Dear Customer--");
                    console.log("Your Journey from: " + source);
                    console.log("To: " + destination + " is confirmed.");
                    console.log("Your total price: " + "1000");
                    console.log("Discount: " + 1000 * discount);
                    console.log("-- Wish you a happy journey");
                },
                calculateFinalPrice: function () {
                    console.log(1000 - (1000 * discount));
                }

            };
        }
        catch(e){
            console.log(e);
        }


    }
    var flightTicket = bookTicket("Hyderabad", "Delhi", "Flight");
    var busTicket = bookTicket("Hyderabad", "Vijayawada", "Bus");
    console.log(flightTicket);
    flightTicket.printTicket();
    flightTicket.calculateFinalPrice();
    busTicket.printTicket();
    busTicket.calculateFinalPrice();
})();

// function printLoop(minLimit, maxLimit) {

//     if (minLimit <= maxLimit) {
//         //console.log(minLimit);
//         minLimit++;
//         printLoop(minLimit, maxLimit);
//     }
// }
// //printLoop(0, 10);

// function compare() {

//     var t0 = performance.now();
//     for (var i = 0; i < 1000; i++) {
//         // console.log(i);
//     }
//     var t1 = performance.now();


//     var t2 = performance.now();
//     printLoop(0, 1000);
//     var t3 = performance.now();
//     console.log("--Forloop--");
//     console.log(t1 - t0);
//     console.log(t3 - t2);
// }

// compare();