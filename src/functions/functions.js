export const formatPrice = (price) => {
    const priceString = price.toString();
    const formattedPrice = priceString.split('').reverse().join('').replace(/(\d{3}(?=\d))/g, '$1 ').split('').reverse().join('');
    return formattedPrice;
};

export const filterIcons = (icons) => {
    let obj = {}
    for (let value in icons[0]) {
        if (icons[0][value] !== "" && value !== "_id") {
            obj[value] = icons[0][value]
        }
    }
    return obj
}

