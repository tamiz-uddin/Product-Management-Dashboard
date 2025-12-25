import { Skeleton } from 'antd';

const ProductCardLoading = () => {
    return (
        <div>
            <Skeleton.Image active={true} style={{
                width: 350,
                height: 300
            }}/>
            <Skeleton active={true} paragraph={{ rows: 3 }} style={{ marginTop: 16 }}/>
        </div>
    );
};

export default ProductCardLoading;