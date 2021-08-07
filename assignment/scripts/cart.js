console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item){
    console.log('in addItem');
    basket.push(item);
    return true;
}//end addItem

console.log('running addItem', addItem('blanket'));
console.log(`The items in the basket are ${basket}`);
console.log( 'running addItem', addItem('umbrella'));
console.log(`The items in the basket are now ${basket}`);
console.log('running addItem', addItem('sunscreen'));
console.log(`Now the items in the basket are ${basket}`);

function listItems(){
    console.log( 'in listItems');
    for(let i=0; i<basket.length; i++ ){
    console.log(`The basket item is ${basket[i]}`);
    }//end for loop
}//end listItems

listItems();

function empty(){
    console.log('in empty');
    let emptyBasket = [];
    basket = emptyBasket;
}//end empty
console.log('running empty', empty());
console.log(`The basket items are ${basket}`);

//STRETCH GOALS
console.log('Stretch Goals');

const maxItems = 5;

function isFull( basket){
    console.log( 'in isFull ', basket );
    if( basket.length < maxItems ){
        return false;
    }//end check
    else{
        return true;
    }//end else
}//end isFull
console.log('running isFull', isFull(basket));
console.log( 'running isFull', ['mango', 'apple', 'strawberry', 'peach']);
console.log( 'running isFull', [3,4,5,6,7,8,9])
