import React, { useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl, FormLabel, Input, Select, Textarea,
  Button
} from '@chakra-ui/react'



const HortModal = (props) => {

  const [categoryId, setCategoryId] = useState('')
  const [firstName, setFirstName] = useState('')
  const [shade, setShade] = useState('')
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')
  const [average_pryce, setAverage_Price] = useState('')
  const [measurement, setMeasurement] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (props.hortId) {
      console.log('Atualizando', props.hortId)
      console.log({
        categoryId, firstName, shade, url, description, average_pryce, measurement
      })
    } else {
      console.log('Criando', {
        categoryId, firstName, shade, url, description, average_pryce, measurement
      })
    }
  }


  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign='center' >Nova Hortaliça</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <FormControl >
              <FormLabel>Nome</FormLabel>
              <Input
                placeholder='Nome, ex:Tomate'
                id='firstName'
                name='firstName'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormControl>

            <FormControl mt='4'>
              <FormLabel>Nome da Imagem</FormLabel>
              <Input
                placeholder='Url da Imagem'
                id='url'
                name='url'
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </FormControl>

            <FormControl mt='4'>
              <FormLabel>Tonalidade</FormLabel>
              <Input
                placeholder='Tonalidade, ex: Vermelho'
                id='shade'
                name='shade'
                value={shade}
                onChange={(e) => setShade(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Categoria</FormLabel>
              <Select
                placeholder='Selecione a Categoria'
                id='category'
                name='category'
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
              >
                <option key='1' value='1'>
                  Verduras
                </option>
              </Select>

            </FormControl>

            <FormControl mt='4'>
              <FormLabel>Preço Médio de Mercado</FormLabel>
              <Input
                placeholder='Preço, ex: 2,99'
                id='average_pryce'
                name='average_pryce'
                value={average_pryce}
                onChange={(e) => setAverage_Price(e.target.value)}
              />
            </FormControl>

            <FormControl mt='4'>
              <FormLabel>Medida</FormLabel>
              <Select
                placeholder='Medida, ex: Quilo ou Unidade'
                id='measurement'
                name='measurement'
                value={measurement}
                onChange={(e) => setMeasurement(e.target.value)}
              >
                <option key='1' value='1'>
                  Quilo
                </option>
                <option key='2' value='2'>
                  Unidade
                </option>
              </Select>

            </FormControl>

            <FormControl mt='4'>
              <FormLabel>Descrição</FormLabel>
              <Input
                placeholder='Descrição, ex: O tomate vem de familia...'
                id='description'
                name='description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>

          </ModalBody>
          <ModalFooter>

            <Button
              onClick={props.onClose}
              width='30%'
              marginRight='3'
              colorScheme='blackAlpha'
              borderRadius='100px'
            >
              Fechar
            </Button>
            <Button
              colorScheme='green'
              width='70%'
              marginRight='3'
              borderRadius='100px'
              type='submit'
            >Criar Hortaliça</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}

export default HortModal