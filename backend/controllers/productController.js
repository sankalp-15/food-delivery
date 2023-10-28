
const getSingleProduct =(req, res) =>{
    console.log(req.params.id);
    const id =req.params.id;

    res.send([

    ]);
};

const getcategories = (req, res) => {
};

const postCategories = (req, res) => {
};

module.exports = {
    getProducts,
    getSingleProduct,
    getcategories,
    postCategories,
};
const getProducts = (req, res) => {
  console.log("Check");
  res.send([
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    }
  ]);
};

module.exports = { getProducts };