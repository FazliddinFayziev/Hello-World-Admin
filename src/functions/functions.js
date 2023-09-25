export const formatPrice = (price) => {
    const priceString = price.toString();
    const formattedPrice = priceString.split('').reverse().join('').replace(/(\d{3}(?=\d))/g, '$1 ').split('').reverse().join('');
    return formattedPrice;
};