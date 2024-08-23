const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 79.99,
      inStock: 12
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 149.99,
      inStock: 10
    }
];

export const listProducts = () => {
    return products;
}

export const purchaseProduct = (id,quantity) => {
    const [product] = products.filter((product) => product.id === parseInt(id));
    if(product.inStock > 0 && product.inStock >= quantity) {
        product.inStock -= quantity;
    } else {
        product.inStock = 0;
    }

    return products;
}