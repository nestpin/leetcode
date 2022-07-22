let data = {
    "id":13,
    "price_code":'dd',
    "is_available":true,
    "brand":"nike",
    "tags":{a:23,foo:'bar'},
    "nominal_price":34.32,
    "location": [1,4,7,3,2,1,'hey yo'],
    "comment":'last entry'
}

if ('wrong_key' in data) console.log('key is present')
else                     console.log('key is not in obj/hashmap') // <--- this wil  be printed

if ('brand' in data) console.log('key is present') // <--- this wil  be printed
else                 console.log('key is not in obj/hashmap')

let current_key = 'nominal_price'
if (current_key in data) console.log('key is present') // <--- this wil be printed
else                     console.log('key is not in obj/hashmap')
// `if (current_key in data)` es lo mismo que `if ('nominal_price' in data)`
//
//
// // Let say you want to check a group of keys:
// // 'brand' , 'nominal_price' , 'location' , 'comment'
//
// // You can do it this way
// if ('brand' in data) // do something
//     if ('nominal_price' in data) // do something
//         if ('location' in data) // do something
//             if ('comment' in data) // do something
//
//
// // Or you can do it this way, is more flexible
let keys_to_check = ['brand','nominal_price','location','comment','Altura'];
for(let i = 0; i < keys_to_check.length; i++) { // or a foreach
 let current_key = keys_to_check[i];
 for (current_key in data) console.log('The Key => ',keys_to_check[i], ' is inside "Data"' )
    else                  console.log('The Key => ',keys_to_check[i], ' is not inside "Data"')
     }