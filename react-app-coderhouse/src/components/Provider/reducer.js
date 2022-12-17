export default function reducer(store, action) {
  const { type, payload } = action;

  switch (type) {
    case "remove-item": {
      const { id } = payload;

      const result = store.products.map((product) => {
        if (product.id === id) {
          product.amount = product.amount - 1;
        }

        return product;
      });

      return { products: result };
    }
    case "add-item": {
      const { id } = payload;

      const result = store.products.map((product) => {
        if (product.id === id) {
          product.amount = product.amount + 1;
        }

        return product;
      });

      return { products: result };
    }
    default: {
    }
  }
}
