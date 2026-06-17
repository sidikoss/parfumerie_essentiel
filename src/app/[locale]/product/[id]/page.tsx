import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { products } from "@/data/products";
import ProductDetailClient from "@/components/product/product-detail-client";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return { title: "Produit non trouvé — L'Essentiel" };
  }

  return {
    title: `${product.name} — ${product.brand} | L'Essentiel`,
    description: product.description,
    openGraph: {
      title: `${product.name} — ${product.brand} | L'Essentiel`,
      description: product.description,
      images: [{ url: product.image, width: 400, height: 400 }],
      type: "website",
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
