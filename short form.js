//short form
function addressMaker(city, state) {
    // const newAddress = {city: city, state: state};
    const newAddress = {city, state};
    console.log(newAddress);
}
addressMaker('Austin', 'Texas');

//challenge
function addressMaker2(address) {
const {city, state} = address;
const newAddress2 = {
    city,
    state,
    country: 'US'
};
console.log(`${newAddress2.city},
${newAddress2.state},
${newAddress2.country}`);
}
addressMaker2({city: 'Austin', state: 'Texas'});