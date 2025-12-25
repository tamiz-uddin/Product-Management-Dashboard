# Product Management Dashboard

A Next.js-based web application for managing and viewing product information, built with React, TypeScript, Ant Design, and Tailwind CSS.

## Features

- **Product Listing**: Displays a paginated list of products with cards showing key details like title, price, and thumbnail.
- **Search and Filtering**: Allows users to search products by title and filter by category for efficient browsing.
- **Product Details**: Dedicated page for viewing detailed information about a selected product.
- **Responsive Design**: Optimized for desktop and mobile devices using Ant Design components and Tailwind CSS.
- **Loading States**: Includes skeleton loaders for a smooth user experience during data fetching.
- **Navigation**: Back-to-previous functionality for easy navigation between pages.

## API Handling Explanation

The application integrates with the [DummyJSON API](https://dummyjson.com/products) to fetch product data. API calls are handled in `services/productApi.ts` using Axios:

- `fetchProducts()`: Retrieves a list of all products from the API endpoint.
- `fetchProductById(id)`: Fetches detailed information for a specific product by its ID.

Data is typed using the `Product` interface defined in `types/product.ts`, ensuring type safety throughout the application. The API responses are processed to populate the UI components, with error handling managed via React hooks and state management.

## How to Run

### Prerequisites
- Node.js (version 18 or higher)
- pnpm (package manager)

### Installation
1. Install dependencies:
   ```bash
   pnpm install
   ```

### Development
1. Start the development server:
   ```bash
   pnpm dev
   ```
2. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Build and Production
1. Build the application:
   ```bash
   pnpm build
   ```
2. Start the production server:
   ```bash
   pnpm start
   ```

### Linting
Run ESLint to check for code quality:
```bash
pnpm lint
```
