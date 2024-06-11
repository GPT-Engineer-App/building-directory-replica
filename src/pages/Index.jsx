import { useState } from "react";
import { Box, Container, Flex, Heading, HStack, IconButton, Image, Input, InputGroup, InputLeftElement, Spacer, Text, VStack } from "@chakra-ui/react";
import { FaSearch, FaGlobe, FaUserCircle } from "react-icons/fa";

const generateRandomBuildings = (num) => {
  const buildings = [];
  for (let i = 0; i < num; i++) {
    buildings.push({
      name: `Building ${i + 1}`,
      address: `Address ${i + 1}, City ${i + 1}`,
      image: `/images/building${(i % 7) + 1}.jpg`,
    });
  }
  return buildings;
};

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [buildings, setBuildings] = useState(generateRandomBuildings(20));

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBuildings = buildings.filter(
    (building) =>
      building.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      building.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        <Input
          type="text"
          placeholder="Search by name, address or city..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </InputGroup>
      <VStack spacing={4} align="stretch">
        {filteredBuildings.map((building, index) => (
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