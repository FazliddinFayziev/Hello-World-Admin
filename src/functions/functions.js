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

export const filterAndUploadIcons = (icons) => {
    let graph = {}
    for (let i = 0; i < icons.length; i++) {
        const readyObj = icons[i]
        const key = readyObj.name
        const value = readyObj.value
        if (value != "") {
            graph[key] = value
        }
    }
    return graph
}


export const formatCurrentTime = () => {
    const now = new Date();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0'); // Hours
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Minutes
    const seconds = now.getSeconds().toString().padStart(2, '0'); // Seconds

    return `${month}/${day}/${year} and ${hours}:${minutes}:${seconds}`;
}

