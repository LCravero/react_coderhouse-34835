export default function ProductList() {
  const products = [
    {
      id: "uno",
      name: "Camiseta",
      price: 100,
    },
    {
      id: "dos",
      name: "Botines",
      price: 230,
    },
    {
      id: 3,
      name: "Bubuzela",
      price: 15,
    },
  ];

  return (
    <div className="product-list__container">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            Nombre: {product.name} | Price: {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
