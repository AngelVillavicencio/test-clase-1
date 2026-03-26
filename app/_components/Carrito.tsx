import {
  Box,
  Button,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { type Product } from "../_lib/product";

type CarritoProps = {
  productos: Product[];
  onRemove?: (product: Product, index: number) => void;
};

export default function Carrito({ productos, onRemove }: CarritoProps) {
  return (
    <Box
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="2xl"
      bg="white"
      p={6}
      boxShadow="sm"
    >
      <HStack justify="space-between" mb={4}>
        <Text fontSize="xl" fontWeight="bold" color="gray.900">
          Carrito
        </Text>
        <Text color="gray.500">
          {productos.length} {productos.length === 1 ? "producto" : "productos"}
        </Text>
      </HStack>

      {productos.length === 0 ? (
        <Text color="gray.500">
          Tu carrito esta vacio. Agrega un producto para verlo aqui.
        </Text>
      ) : (
        <VStack align="stretch" gap={4}>
          {productos.map((product, index) => (
            <HStack
              key={`${product.title}-${index}`}
              align="center"
              justify="space-between"
              gap={4}
              borderWidth="1px"
              borderColor="gray.100"
              borderRadius="xl"
              p={3}
            >
              <HStack gap={3} flex="1">
                <Image
                  src={product.imageUrl}
                  alt={product.imageAlt}
                  boxSize="56px"
                  objectFit="cover"
                  borderRadius="lg"
                />
                <Stack gap={0}>
                  <Text fontWeight="semibold" color="gray.900">
                    {product.title}
                  </Text>
                  <Text color="gray.500" fontSize="sm">
                    {product.formattedPrice}
                  </Text>
                </Stack>
              </HStack>

              {onRemove ? (
                <Button
                  size="sm"
                  variant="outline"
                  colorPalette="red"
                  onClick={() => onRemove(product, index)}
                >
                  Quitar
                </Button>
              ) : null}
            </HStack>
          ))}
        </VStack>
      )}
    </Box>
  );
}
