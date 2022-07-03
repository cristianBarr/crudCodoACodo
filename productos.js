const productos = [
  { id: 1, name: "producto 1" },
  { id: 2, name: "producto 2" },
  { id: 3, name: "producto 3" },
];

const all = () => productos;

const find = (id) => productos.find((producto) => producto.id == id);

module.exports = {
  all,
  find,
};
