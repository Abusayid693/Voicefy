import React, {useState, useEffect} from 'react';
import {
  VStack,
  Heading,
  Button,
  Text,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody
} from '@chakra-ui/react';
import {AddAlt32} from '@carbon/icons-react';
import useModalState from 'hooks/useModalState';
import Editor from 'containers/Editor';

const Index = () => {
  const {isOpen, setClose, setOpen} = useModalState();

  return (
    <React.Fragment>
      <Modal isOpen={isOpen} onClose={setClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Editor />
          </ModalBody>
        </ModalContent>
      </Modal>
      <VStack
        bg={'blue.100'}
        h={170}
        w={'100%'}
        maxW={260}
        borderRadius={15}
        alignItems="center"
        justifyContent={'center'}
        textAlign="center"
        pl={'1%'}
        pr={'1%'}
        onClick={setOpen}
        cursor="pointer"
      >
        <Heading fontSize={20} color={'white.100'}>
          Create Voiceovers
        </Heading>
        <Text fontSize={14} color={'white.100'}>
          Lorem ipsum dolor sit amet consectetur
        </Text>
        <AddAlt32 color="white" />
      </VStack>
    </React.Fragment>
  );
};

export default Index;
