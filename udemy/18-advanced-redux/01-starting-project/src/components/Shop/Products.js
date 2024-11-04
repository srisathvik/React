import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My First Book',
    description: 'The first book i ever wrote',
  },
  {
    id: 'p2',
    price: 5,
    title: 'My Second Book',
    description: 'The second book i ever wrote',
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
          key={product.id}

          product={product}
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
