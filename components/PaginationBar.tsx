'use client';

import { Pagination } from 'antd';

interface PaginationBarProps {
    total: number;
    page: number;
    setPage: (page: number) => void;
}

export default function PaginationBar({ total, page, setPage }: PaginationBarProps) {
    return (
        <Pagination
            current={page}
            pageSize={8}
            total={total}
            onChange={setPage}
            style={{ marginTop: 20, textAlign: 'center' }}
        />
    );
}
