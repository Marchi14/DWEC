var car='{"make":"Honda Civic","year":2006,"price":18000,"owner":{"name":"Henry Lee","cellphone": "222-222-2222","address":{"street": "10 Main","city": "San Francisco","state": "CA"}},"dealer": "SF Honda"}';

var carJSON=JSON.parse(car);

console.log(carJSON.owner.address.street);