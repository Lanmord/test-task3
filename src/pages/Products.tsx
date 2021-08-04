import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Products() {
  let { id } = useParams<{ id: string }>();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`/categories/${id}/products`).then(({ data }) => {
      setProducts(data);
      setIsLoading(false);
    });
    return setIsLoading(true);
  }, [id]);
  return (
    <div className="products">
      {isLoading ? (
        <span>Загрузка...</span>
      ) : products.length !== 0 ? (
        products.map(({ id, avatar }) => (
          <img key={id} className="products__item" src={avatar} alt={id}></img>
        ))
      ) : (
        <span>Нет данных</span>
      )}
    </div>
  );
}

export default Products;
