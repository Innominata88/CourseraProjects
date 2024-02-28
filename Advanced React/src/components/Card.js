import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack bg="#ffffff" rounded="xl">
      <Image rounded="xl" src={imageSrc} />
      <VStack padding={4} alignItems={"flex-start"} spacing={4} h="100%">
        <Heading color="#000000" size="md" fontSize="lg" as="h3">{title}</Heading>
        <Text color="#677489" fontSize="md" h="100%">{description}</Text>
        <HStack color="#000000" fontSize="sm">
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  )
};

export default Card;