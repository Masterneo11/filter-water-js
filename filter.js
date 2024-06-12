document.getElementById("Dr-Phil").addEventListener("click", (e) => {


    const input = [["salt", "dirt", "calcite", "uranium", "rubber"],
    ["uranium", "dirt"]]
    // Output: ["salt", "calcite", "rubber"]

    let nl = [];
    for (let i = 0; i < input.length; i++) {
        // console.log(i);
        
        for (let index = 0; index < input[i].length; index++) {
            if ( input[i][index] === "salt"){
                nl.push(input[i][index])

            }
            else if ( input[i][index] === "calcite"){
                nl.push(input[i][index]);
            }
            else if ( input[i][index] === "rubber"){
                nl.push(input[i][index]);
            }
        

            // input[i] is the outer lists.    [index] is the elements inside
    
        
        }
        
    }
    console.log(nl);
    document.getElementById("result").textContent = nl.join(', ');

});





// function filterWater(water, filter) {
//     return water.filter(item => !filter.includes(item));
// }

// document.getElementById("Dr-Phil").addEventListener("click", (e) => {
//     const input = [
//         ["salt", "dirt", "calcite", "uranium", "rubber"],
//         ["uranium", "dirt"]
//     ];

//     const water = input[0];
//     const filter = input[1];

//     const filteredWater = filterWater(water, filter);
//     document.getElementById("result").textContent = filteredWater.join(', ');

//     function filterWater(water, filter) {
//         return water.filter(item => !filter.includes(item));
//     }
// });
