import React from 'react';
import ProductCardLoading from './ProductCardLoading';
import { Col, Row } from 'antd';

const LoadingScleton = () => {
    return (
        <div>
            <Row gutter={[24, 24]} className="mb-8">
                {
                    Array.from({ length: 8 }).map((_, index) => (
                        <Col xs={24} sm={12} md={8} lg={6} key={index}>
                            <ProductCardLoading key={index} />
                        </Col>

                    ))
                }
            </Row>

        </div>
    );
};

export default LoadingScleton;