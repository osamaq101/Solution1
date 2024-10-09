
//Q1
class Meditation {
    constructor(duration) {
        this.duration = duration;
    }

    start() {
        let count = this.duration;
        const countdown = setInterval(() => {
            if (count > 0) {
                console.log(count);
                count--;
            } else {
                clearInterval(countdown);
                console.log("Jay Guru Dev");
            }
        }, 1000);
    }
}

// Usage example:
const morning_meditation = new Meditation(5);
morning_meditation.start();
console.log(`Start meditation`);

//Q2


    

async function isPrime(number)
{

    return   new Promise((resolved, reject) => {
        for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
            if (n % i === 0) {
                reject({ prime: false });
            }
        }
        resolved({ prime: true });


    });
   
}


function test() {
    alert("start");
//console.log('start');
    (async () => {
        const result = await isPrime(17);
        alert(result); 
    })();


    alert("end");
   // console.log('end');

}
//q3
(async () => {
    try {
        
        const response = await fetch('https://dummyjson.com/recipes');
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

      
        const data = await response.json();

    
        const recipes = data.recipes;
        console.log("Recipe Names:");
        recipes.forEach(recipe => console.log(recipe.name));
    } catch (error) {
        console.error("Error fetching recipes:", error);
    }
})();
