export const formatPrice = (price) => {
    const priceString = price.toString();
    const formattedPrice = priceString.split('').reverse().join('').replace(/(\d{3}(?=\d))/g, '$1 ').split('').reverse().join('');
    return formattedPrice;
};

export const filterIcons = (icons) => {
    for (let value in icons[0]) { if (icons[0][value] === "") { delete icons[0][value] } }
    return icons
}