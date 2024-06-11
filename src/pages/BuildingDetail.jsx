import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import KanbanBoard from '../components/KanbanBoard';

const buildings = [
  { id: 1, name: "Building 1", address: "Address 1, City 1", image: "/images/building1.jpg" },
  { id: 2, name: "Building 2", address: "Address 2, City 2", image: "/images/building2.jpg" },
  { id: 3, name: "Building 3", address: "Address 3, City 3", image: "/images/building3.jpg" },
  { id: 4, name: "Building 4", address: "Address 4, City 4", image: "/images/building4.jpg" },
  { id: 5, name: "Building 5", address: "Address 5, City 5", image: "/images/building5.jpg" },
  { id: 6, name: "Building 6", address: "Address 6, City 6", image: "/images/building6.jpg" },
  { id: 7, name: "Building 7", address: "Address 7, City 7", image: "/images/building7.jpg" },
];

const BuildingDetail = () => {
  const { id } = useParams();
  const building = buildings.find((b) => b.id === parseInt(id));

  if (!building) {
    return <Text>Building not found</Text>;
  }

  return (
    <Container maxW="container.md" py={4}>
      <Box mb={4}>
        <Heading as="h1" size="2xl" mb={2}>{building.name}</Heading>
        <Text fontSize="lg" color="gray.600">{building.address}</Text>
      </Box>
      <Image src={building.image} alt={building.name} borderRadius="md" />
      <Box mt={8}>
        <Heading as="h2" size="lg" mb={4}>Maintenance Tasks</Heading>
        <KanbanBoard />
      </Box>
    </Container>
  );
};

export default BuildingDetail;