// const arr= [ 1, 2, 4, 5]

// for ( const num of arr)
// {
//     console.log(num)
// }

const map = new Map()

map.set('INS ', "India")
map.set('Usa', "United states of america")
map.set('fr',"france")
map.set("IN", "India");

//console.log(map);

// output is 
// Map(4) {
//     'in ' => 'India',
//     'Usa' => 'United states of america',
//     'fr' => 'france',
//     'IN' => 'India'
//   }


for (const [key, value] of  map)// differentate the array in form of key and value

{
    console.log(key, ":-", value);//destructure the array
} 
// output
// INS  :- India
// Usa :- United states of america
// fr :- france
// IN :- India