import React, { useState } from 'react'
import {
  Flex,
  Image,
  IconButton, Divider,
  Box, Text, Spacer, Button
} from "@chakra-ui/react"
import Logo from '../../assets/Logo.svg'
import { ChevronDownIcon, AddIcon, EditIcon } from '@chakra-ui/icons'
import Back from '../../assets/top.svg'
import Caderno from '../../assets/caderno.svg'
import Money from '../../assets/money.svg'
import { Hort } from '../../components'
import HortModal from './HortModal'
import DeleteModal from './DeleteModal'


export const Home = () => {
  const [hortModal, setHortModal ] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [selectedHort, setSelectedHort] = useState(null)

  const handleOpenDeleteModal = (id) => {
    setSelectedHort(id)
    setDeleteModal(true)
  }

  const handleOpenEditModal = (id) => {
    setSelectedHort(id)
    setHortModal(true)
  }



  const horts = [
    {
      id: '1',
      firstName: "Maça",
      shade: "vermelha",
      url: "https://superprix.vteximg.com.br/arquivos/ids/175207-600-600/Maca-Argentina--1-unidade-aprox.-200g-.png?v=636294203590200000",
      description: "Maçã",
      average_pryce: "0,99",
      measurement: "R$1,20",
      categoryId: "6100aea3e8262f4a570da451"
    }
  ]

  return (
    <>
      <Flex
        bg='#E5E5E5'
        flexDirection='column'
        justifyContent='space-between'
        minHeight='200vh'


      >
        {/*Inicio do Header*/}
        <Flex
          bg='#FBFAFA' position='absolute' width='1920px'
          height='80px' left='-8px' top='0px'
          paddingY='2'
          justifyContent='space-around'
          alignItems='center'
        >
          <Image src={Logo} alt='Hortinjas Logo' position='absolute' width='280px'
            height='62px' left='420px' top='9px' />
          <Spacer />
          <Flex flexDirection='row' alignItems='flex-start' padding='12px 13px'>
            <Button
              position='absolute' bg='#D9D2CF' borderRadius='100px'
              width='302px' height='56px' left='844px' top='12px'
              rightIcon={<ChevronDownIcon />}
              onClick={() => console.log('selecionar categoria modal')}
            >Selecionar Categoria</Button>
            <Box>
              {/*COLOCAR SESSÃO IGUAL AOS BOTÕES DE EDITAR ONDE SE DIGITA UMA COISA*/}
            </Box>
          </Flex>
        </Flex>
        {/*Inicio do Body*/}
        <Flex>
          <Box>
            <Image src={Back} alt='' position='absolute' width={['100%', '816px', '816px', '816px']}
              height='160px' left='552px' top='112px' bg='#006b5c' borderRadius='32px' />
          </Box>
          <Flex flexDirection='row' justifyContent='space-around' alignItems='center' >
            <Box position='absolute' bg='#fff' borderRadius='32px'
              width='360px' height='160px' left='584px' top='178px' >

              <Text fontSize='18px' fontFamily='Poppins' fontWeight='bold' lineHeight='27px'
                position='absolute' width='211px' height='47px' left='24px' top='24px'  >
                Registros</Text>
              <Text fontSize='18px' fontFamily='Poppins' lineHeight='27px'
                position='absolute' width='211px' height='47px' left='24px' top='50px'  >
                Número de registro da Horta</Text>
              <Image src={Caderno} alt='' position='absolute' width='40px'
                height='40px' left='122px' top='104px' />
              <Text fontSize='24px' fontFamily='Poppins' lineHeight='36px'
                position='absolute' width='66px' height='36px' left='172px' top='106px'  >
                #03</Text>

            </Box>
            <Box position='absolute' bg='#fff' borderRadius='32px'
              width='360px' height='160px' left='976px' top='178px' >

              <Text fontSize='18px' fontFamily='Poppins' fontWeight='bold' lineHeight='27px'
                position='absolute' width='211px' height='47px' left='24px' top='24px'  >
                Valor Total</Text>
              <Text fontSize='18px' fontFamily='Poppins' lineHeight='27px'
                position='absolute' width='211px' height='47px' left='24px' top='50px'  >
                Preço total da Horta</Text>
              <Image src={Money} alt='' position='absolute' width='40px'
                height='40px' left='84px' top='104px' />
              <Text fontSize='24px' fontFamily='Poppins' lineHeight='36px'
                position='absolute' width='141px' height='36px' left='134px' top='106px'  >
                R$200,00</Text>

            </Box>
          </Flex>
        </Flex>
        {/*Inicio do Bloco de Ações*/}
        <Divider marginY='2' position='absolute' width='1080px' height='1px' left='420px' top='386px' bg='#111' />
        <Flex flexDirection='row' justifyContent='space-around' alignItems='center' >
          <Box>
            <Button
              position='absolute' bg='#006b5c' borderRadius='100px'
              width='360px' height='40px' left='584px' top='411px' color='#FBFAFA'
              rightIcon={<AddIcon />}
              onClick={() => setHortModal(true)}
            >Adicionar Hortaliça</Button>
            <Button
              position='absolute' bg='#006b5c' borderRadius='100px'
              width='360px' height='40px' left='976px' top='411px' color='#FBFAFA'
              rightIcon={<AddIcon />}
              onClick={() => console.log('abrir categoria modal')}
            >Adicionar Categoria</Button>
          </Box>
        </Flex>
        <Box position='absolute' width='221px' height='54px' left='420px' top='507px' >
          <Button
            marginX='4' fontWeight='bold' fontSize='23px' fontFamily='Poppins' lineHeight='54px'
            variant='ghost'
            rightIcon={<EditIcon />}
            onClick={() => console.log('bt Editarcategoria modal')}
          >Verduras</Button>
        </Box>
        <Flex flexDirection='row' justifyContent='flex-start' alignItems='flex-start'>
          <Flex
            flexDirection='row'
          >
            {horts.map(hort => (
              <Hort
                key={hort.id}
                firstName={hort.firstName}
                shade={hort.shade}
                url={hort.url}
                description={hort.description}
                average_pryce={hort.average_pryce}
                measurement={hort.measurement}
                categoryId={hort.categoryId}
                openEditModal={() => handleOpenEditModal(hort.id)}
                openDeleteModal={() => handleOpenDeleteModal(hort.id)} />

            ))}
          </Flex>




        </Flex>

        {/*Inicio do Footer*/}
        <Box marginY='4'>
          <Text textAlign='center' fontSize='15px' color='gray'>
            Copyright © 2021 Feito com ❤ por Kazap Tecnologia - Todos os direitos reservados
          </Text>
        </Box>
      </Flex>
      <HortModal
        isOpen={hortModal}
        onClose={() => {
          setHortModal(false)
          setSelectedHort(null)
        }}
        hortId={selectedHort}
      />
      <DeleteModal
        isOpen={deleteModal}
        onClose={() => {
          setDeleteModal(false)
          setSelectedHort(null)
        }}
        hortId={selectedHort}
      />
    </>
  )
}