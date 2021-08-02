import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Text,
  Button
} from '@chakra-ui/react'

const DeleteModal = (props) => {

  const confirmDelete = () => {
    console.log('apagar', props.hortId)
  }

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody pb='6'>
          <Text textAlign='center' fontSize='30px' >
            <b>Deseja realmente excluir este post?</b>
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={props.onClose}
            width='30%'
            marginRight='3'
            colorScheme='linkedin'
            borderRadius='100px'
          >
            Fechar
          </Button>
          <Button
            colorScheme='green'
            width='70%'
            marginRight='3'
            borderRadius='100px'
            onClick={confirmDelete}
          >Excluir</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default DeleteModal