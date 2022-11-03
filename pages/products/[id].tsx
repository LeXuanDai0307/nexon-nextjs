import * as React from "react";
import path from "path";
import fs from "fs/promises";

export interface IProductDetailsProps {
  product: any;
}

export default function ProductDetails({ product }: IProductDetailsProps) {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </div>
  );
}

export async function getStaticProps(context: any) {
  console.log("Re-fetching");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await (await fs.readFile(filePath)).toString();
  const data = JSON.parse(jsonData);

  const { params } = context;
  const product = data.products.find((p: any) => p.id == params.id);

  return {
    props: {
      product: product,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "p1" } },
      { params: { id: "p2" } },
      { params: { id: "p3" } },
      { params: { id: "p4" } },
    ],
    fallback: false,
  };
}
