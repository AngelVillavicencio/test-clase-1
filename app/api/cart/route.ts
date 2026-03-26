import { NextRequest, NextResponse } from "next/server";
import {
  addCartItem,
  clearCartItems,
  getCartItems,
  removeCartItem,
} from "@/app/_lib/cart-store";
import { type Product } from "@/app/_lib/product";

export const dynamic = "force-dynamic";

function isProduct(value: unknown): value is Product {
  if (!value || typeof value !== "object") {
    return false;
  }

  const product = value as Record<string, unknown>;

  return (
    typeof product.imageUrl === "string" &&
    typeof product.imageAlt === "string" &&
    typeof product.rating === "number" &&
    typeof product.reviewCount === "number" &&
    typeof product.title === "string" &&
    typeof product.formattedPrice === "string"
  );
}

export async function GET() {
  return NextResponse.json({ items: getCartItems() });
}

export async function POST(request: NextRequest) {
  const body: unknown = await request.json();

  if (!isProduct(body)) {
    return NextResponse.json(
      { message: "Producto invalido" },
      { status: 400 },
    );
  }

  return NextResponse.json({ items: addCartItem(body) }, { status: 201 });
}

export async function DELETE(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as
    | { index?: unknown }
    | null;

  if (body && typeof body.index === "number") {
    return NextResponse.json({ items: removeCartItem(body.index) });
  }

  return NextResponse.json({ items: clearCartItems() });
}
