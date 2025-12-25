/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useEffect, useState } from 'react';
import { Row, Col, Spin, Alert } from 'antd';
import { fetchProducts } from '@/services/productApi';
import ProductCard from '@/components/ProductCard';
import SearchFilter from '@/components/SearchFilter';
import PaginationBar from '@/components/PaginationBar';
import { Product } from '@/types/product';
import { useDebounce } from '@/hooks/useDebounce';
import { useRouter, useSearchParams } from 'next/navigation';
import LoadingScleton from '@/components/LoadingScleton';

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState<string>("");
  const [page, setPage] = useState(1);
  const debouncedSearch = useDebounce(search, 500);

  // fetching products on component mount
  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(() => setError('Failed to load products'))
      .finally(() => setLoading(false));
  }, []);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const urlSearch = searchParams.get('search') || '';
    const urlCategory = searchParams.get('category') || '';
    const urlPage = Number(searchParams.get('page') || 1);

    setSearch(urlSearch);
    setCategory(urlCategory);
    setPage(urlPage);
  }, [searchParams]);

  useEffect(() => {
    const params = new URLSearchParams();

    if (search) params.set('search', search);
    if (category) params.set('category', category);
    if (page > 1) params.set('page', page.toString());

    router.replace(`?${params.toString()}`, { scroll: false });
  }, [search, category, page, router]);

  // reset pagination when filters change but not on page change
  useEffect(() => {
    if (page !== 1) setPage(1);
  }, [debouncedSearch, category]);

  const categories = [...new Set(products.map(p => p.category))];

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(debouncedSearch.toLowerCase()) &&
    (!category || p.category === category)
  );

  const pageData = filtered.slice((page - 1) * 8, page * 8);

  if (error) return <Alert type="error" message={error} />;

  return (
    <div className='container mx-auto px-4 py-8 bg-gray-50 min-h-screen'>
      <h1 className='text-4xl font-semibold text-center mb-8 text-gray-800'>Product Management Dashboard</h1>

      <div className="mb-8">
        <SearchFilter
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          categories={categories}
        />
      </div>
      {
        loading ? <LoadingScleton /> :
          <Row gutter={[24, 24]} className="mb-8">
            {pageData.map(product => (
              <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
      }

      <div className={`${loading ? 'hidden' : 'flex'} justify-center`}>
        <PaginationBar
          total={filtered.length}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
}
