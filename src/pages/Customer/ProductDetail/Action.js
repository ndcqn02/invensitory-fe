

let totalItems = () => {
   let cart = JSON.parse(localStorage.getItem('cart'));
   let result = 0;
   console.log('at totalItems cart: ', cart)
   cart.forEach(item => {
    result += item.soLuongDat 
   });
   return result;
};

module.exports = {
    totalItems,
}


