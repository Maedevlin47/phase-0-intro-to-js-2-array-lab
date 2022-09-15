const cats=["Milo", "Otis", "Garfield"];



const copyOfCatsUsingSpreadOperator = [...cats];

const copyOfCatsUsingSlice = cats.slice();

function destructivelyAppendCat(name){
    cats.push("Ralph");
}

function destructivelyPrependCat(name){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name){
    cats.pop();
}

function destructivelyRemoveFirstCat(name){
    cats.shift();
}

function appendCat(name){
    let appendCat = "Broom";
    return [...cats, "Broom"];
    
    }

function prependCat(name){
    let prependCat = "Arnold";
    return ["Arnold", ...cats];
    }

function removeLastCat(){
    let removeLastCat = cats.slice();
    return cats.slice(0, -1);
}

function removeFirstCat(){
    let removeFirstCat = cats.slice();
    return cats.slice(1);
}
