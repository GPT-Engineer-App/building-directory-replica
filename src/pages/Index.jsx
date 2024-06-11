import { Box, Container, Flex, Heading, HStack, IconButton, Image, Input, InputGroup, InputLeftElement, Spacer, Text, VStack } from "@chakra-ui/react";
import { FaSearch, FaGlobe, FaUserCircle } from "react-icons/fa";

const buildings = [
  { name: "Building Name", address: "Address", image: "/images/building1.jpg" },
  { name: "Building Name", address: "Address", image: "/images/building2.jpg" },
  { name: "Building Name", address: "Address", image: "/images/building3.jpg" },
  { name: "Building Name", address: "Address", image: "/images/building4.jpg" },
  { name: "Building Name", address: "Address", image: "/images/building5.jpg" },
  { name: "Building Name", address: "Address", image: "/images/building6.jpg" },
  { name: "Building Name", address: "Address", image: "/images/building7.jpg" },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={4}>
      <Flex justify="space-between" align="center" mb={4}>
        <HStack spacing={4}>
          <Image src="/images/logo.png" alt="RealEstate" boxSize="40px" />
          <Heading size="md">RealEstate</Heading>
        </HStack>
        <HStack spacing={8}>
          <Text>Explore</Text>
          <Text>List your space</Text>
          <Text>Manage properties</Text>
          <Text>Bookings</Text>
          <Text>Inbox</Text>
          <Text>Help</Text>
          <FaGlobe />
          <FaUserCircle />
        </HStack>
      </Flex>
      <Box mb={8}>
        <Heading as="h1" size="2xl" mb={2}>Building Directory</Heading>
        <Text fontSize="lg" color="gray.600">Find a building by name or location</Text>
      </Box>
      <InputGroup mb={8}>
        <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
        <Input type="text" placeholder="Search by name, address or city..." />
      </InputGroup>
      <VStack spacing={4} align="stretch">
        {buildings.map((building, index) => (
          <Flex key={index} align="center" p={4} borderWidth="1px" borderRadius="md" boxShadow="sm">
            <Image src={building.image} alt={building.name} boxSize="60px" borderRadius="md" mr={4} />
            <Box>
              <Text fontWeight="bold">{building.name}</Text>
              <Text color="gray.500">{building.address}</Text>
            </Box>
            <Spacer />
            <IconButton aria-label="View" icon={<Text>View</Text>} />
          </Flex>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;