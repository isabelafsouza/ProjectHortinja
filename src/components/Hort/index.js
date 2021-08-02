import React from 'react'
import {
  Flex,
  Image,
  Box, Text, Button
} from "@chakra-ui/react"
import Card from '../../assets/card.svg'
import Alface from '../../assets/alface.svg'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

const Hort = (props) => {
  return (
    <Box position='absolute' bg='#fbfafa' borderRadius='32px'
      width='340px' height='380px' left='420px' top='593px' >
      <Image src={Card} alt='' position='absolute' width='320px'
        height='160px' left='10px' top='10px' borderRadius='24px' />
      <Image src={props.url} alt='' position='absolute' width='100px'
        height='100px' left='24px' top='30px' border='2px'
        boxSizing='border-box' borderRadius='100px' />
      <Text fontSize='36px' fontWeight='bold' fontFamily='Poppins' lineHeight='40px' color='#fbfafa'
        position='absolute' width='119px' height='54px' left='140px' top='53px'  >
        {props.firstName}</Text>
      <Text fontSize='16px' fontWeight='bold' fontFamily='Poppins' lineHeight='24px'
        position='absolute' width='116px' height='24px' left='24px' top='186px'  >
        {props.firstName}</Text>
      <Text fontSize='14px' fontFamily='Poppins' lineHeight='21px'
        position='absolute' width='292px' height='84px' left='24px' top='226px'  >
        {props.description}</Text>
      <Flex flexDirection='row' justifyContent='space-around' alignItems='flex-start'>
        <Button
          position='absolute' bg='#db4444'
          width='32px' height='32px' left='20px' top='336px'
          rightIcon={<DeleteIcon />}
          onClick={props.openDeleteModal}
        ></Button>
        <Button
          position='absolute' bg='#757270'
          width='32px' height='32px' left='60px' top='336px'
          rightIcon={<EditIcon />}
          onClick={props.openEditModal}
        ></Button>

        <Text fontSize='16px' fontFamily='Poppins' lineHeight='18px' fontWeight='bold'
          position='absolute' width='57px' height='18px' left='177px' top='335px'  >
          Preço Medio: </Text>

        <Text fontSize='24px' fontFamily='Poppins' lineHeight='36px' fontWeight='bold' color='#006b5c'
          position='absolute' width='49px' height='36px' left='236px' top='332px'  >
          {props.average_pryce}</Text>


      </Flex>

    </Box>
  )
}

export default Hort