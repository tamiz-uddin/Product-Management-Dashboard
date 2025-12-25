import HomePage from '@/components/Home/HomePageContent';
import { Spin } from 'antd';
import  { Suspense } from 'react';

const page = () => {
  return (
    <Suspense fallback={<Spin fullscreen size="large"/>}>
      <HomePage />
    </Suspense>
  );
};

export default page;