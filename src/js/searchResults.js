import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';

function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name) || '';
}

document.addEventListener('DOMContentLoaded', async () => {
  const query = getQueryParam('search').toLowerCase();
  const heading = document.getElementById('results-heading');
  heading.textContent = query
    ? `Results for “${decodeURIComponent(query)}”`
    : 'All Products';

  
  const dataSrc = new ProductData('./public/json/tents.json');


  const all = await dataSrc.getData();
 
  const filtered = all.filter(p =>
    p.Name.toLowerCase().includes(query) ||
    p.Brand.Name.toLowerCase().includes(query)
  );


  const listEl = document.getElementById('search-results');
  const pl = new ProductList(null, { getData: () => Promise.resolve(filtered) }, listEl);
  pl.init();
});
