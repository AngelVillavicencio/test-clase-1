"use client";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Carrito from "./_components/Carrito";
import ProductCard, { type Product } from "./_components/ProductCard";
import { useState } from "react";

const fakeProducts: Product[] = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Zapatillas deportivas rojas",
    rating: 4.8,
    reviewCount: 124,
    title: "Zapatillas Urban Run",
    formattedPrice: "$89.90",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Reloj minimalista negro",
    rating: 4.6,
    reviewCount: 78,
    title: "Reloj Minimal Black",
    formattedPrice: "$129.00",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Audifonos inalambricos",
    rating: 4.9,
    reviewCount: 203,
    title: "Audifonos Wave Pro",
    formattedPrice: "$149.50",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Mochila gris para laptop",
    rating: 4.7,
    reviewCount: 91,
    title: "Mochila City Pack",
    formattedPrice: "$64.99",
  },
];

export default function Home() {
  const [carrito, setCarrito] = useState<Product[]>([]);

  const addToCarrito = (item: Product) => {
    setCarrito((currentItems: Product[]) => [...currentItems, item]);
  };

  const removeCarrito = (_product: Product, index: number) => {
    setCarrito((currentItems: Product[]) =>
      currentItems.filter((_, currentIndex) => currentIndex !== index),
    );
  };

  return (
    <Box bg="gray.50" minH="100dvh" py={{ base: 10, md: 16 }}>
      <Container maxW="7xl">
        <Grid templateColumns={{ base: "1fr", xl: "2fr 1fr" }} gap={8}>
          <GridItem>
            <Heading size="2xl" color="gray.900">
              Productos destacados
            </Heading>
            <Text mt={3} maxW="2xl" color="gray.600" fontSize="lg">
              Esta lista usa datos falsos definidos localmente en una constante
              y renderiza una tarjeta por cada producto.
            </Text>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
