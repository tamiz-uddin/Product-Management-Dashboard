'use client';

import { Input, Select, Space } from 'antd';

interface SearchFilterProps {
  search: string;
  setSearch: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  categories: string[];
}

export default function SearchFilter({
  search,
  setSearch,
  category,
  setCategory,
  categories,
}: SearchFilterProps) {
  return (
    <Space style={{ marginBottom: 20 }}>
      <Input
        placeholder="Search by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        allowClear
      />
      <Select
        placeholder="Filter by category"
        value={category}
        onChange={setCategory}
        allowClear
        style={{ width: 200 }}
      >
        {categories.map((cat: string) => (
          <Select.Option key={cat} value={cat} >
            {cat.toUpperCase()}
          </Select.Option>
        ))}
      </Select>
    </Space>
  );
}
