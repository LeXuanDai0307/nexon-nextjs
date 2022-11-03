import path from "path";
import fs from "fs/promises";
import Link from "next/link";

export interface IProductsPageProps {
  products: any[];
}

export default function ProductsPage({ products }: IProductsPageProps) {
  return (
    <div>
      <h1>Products Page</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}> {product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await (await fs.readFile(filePath)).toString();
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
    revalidate: 5,
  };
}
