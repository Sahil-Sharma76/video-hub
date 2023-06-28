import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Button,
  useDisclosure,
  DrawerHeader,
  VStack,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        zIndex={'overlay'}
        colorScheme="purple"
        pos={'fixed'}
        top={4}
        left={4}
        p={0}
        w={10}
        h={10}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={20} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader>VIDEO HUB</DrawerHeader>

          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button onClick={onClose} colorScheme="purple" variant={'ghost'}>
                <Link to={'/'}>Home</Link>
              </Button>

              <Button onClick={onClose} colorScheme="purple" variant={'ghost'}>
                <Link to={'/videos'}>Videos</Link>
              </Button>

              <Button onClick={onClose} colorScheme="purple" variant={'ghost'}>
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>

              <Button onClick={onClose} colorScheme="purple" variant={'ghost'}>
                <Link to={'/upload'}>Upload Video</Link>
              </Button>
            </VStack>

            <HStack
              pos={'absolute'}
              bottom={10}
              left={0}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button colorScheme="purple">
                <Link to={'/login'}>Login</Link>
              </Button>

              <Button colorScheme="purple" variant={'outline'}>
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
