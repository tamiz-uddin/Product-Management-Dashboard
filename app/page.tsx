import HomePage from '@/components/Home/HomePageContent';
import  { Suspense } from 'react';

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePage />
    </Suspense>
  );
};

export default page;