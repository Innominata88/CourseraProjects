import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import useScrollPosition from "../hooks/useScrollPosition";

const socials = [
  {
    key: "Email",
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    key: "GitHub",
    icon: faGithub,
    url: "https://github.com",
  },
  {
    key: "LinkedIn",
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    key: "Medium",
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    key: "StackOverflow",
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const previousScrollPositionRef = useRef(0);
  const scrollPosition = useScrollPosition();
  const [transform, setTransform] = useState("translateY(0)");

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() =>  {
    setTransform(`translateY(${previousScrollPositionRef.current < scrollPosition ? "-200px" : 0})`);
    previousScrollPositionRef.current = scrollPosition;
  }, [scrollPosition]);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      zIndex={50}
      transform={transform}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={8}>
              {socials.map((social) => <a href={social.url} key={social.key} target="_blank"><FontAwesomeIcon icon={social.icon} size="2x" /></a>)}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="/#projects" id="projects" onClick={handleClick("projects")}>Projects</a>
              <a href="/#contact-me" id="contactme" onClick={handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
