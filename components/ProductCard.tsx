'use client';

import { Card } from 'antd';
import { Product } from '@/types/product';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter();

  return (
    <Card
      hoverable
      cover={
        <div className="aspect-square relative overflow-hidden">
          <Image
            fill
            src={product.thumbnail}
            alt={product.title}
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      }
      onClick={() => router.push(`/product/${product.id}`)}
      className="transition-shadow duration-300 hover:shadow-lg"
    >
      <Card.Meta
        title={product.title}
        description={
          <div>
            <p className="text-gray-600 mb-1">{product.category}</p>
            <strong className="text-lg text-green-600">${product.price}</strong>
          </div>
        }
      />
    </Card>
  );
}
