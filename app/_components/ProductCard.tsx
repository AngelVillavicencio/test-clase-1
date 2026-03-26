import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import { type Product } from "../_lib/product";

export type ProductCardProps = Product & {
  addToCarrito: () => void;
};

export default function ProductCard({
  imageUrl,
  imageAlt,
  rating,
  reviewCount,
  title,
  formattedPrice,
  addToCarrito,
}: ProductCardProps) {
  return (
    <>
      <Box maxW="sm" borderWidth="1px">
        <Image src={imageUrl} alt={imageAlt} />

        <Box p="4" spaceY="2">
          <HStack>
            <HStack gap="1" fontWeight="medium">
              <Text>
                {rating} ({reviewCount})
              </Text>
            </HStack>
          </HStack>
          <Text fontWeight="medium" color="fg">
            {title}
          </Text>
          <HStack color="fg.muted">{formattedPrice}</HStack>
          <Button onClick={addToCarrito}>Añadir carrito</Button>
        </Box>
      </Box>
    </>
  );
}
