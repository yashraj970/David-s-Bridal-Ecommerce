import React from 'react'
// import { Link as RouterLink } from 'react-router-dom'
import { Box,Text, Flex , Image, Heading, Input, Button } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

import {AiFillShop,AiOutlineMenu,AiOutlineSearch} from 'react-icons/ai'
import {ImLocation} from 'react-icons/im'
import {BiUser} from 'react-icons/bi'
import {FaShoppingBag} from 'react-icons/fa'

const Navbar = () => {
  return (<Box>
    <Flex textAlign={'center'} bg='white' h={'5vh'} w='100%' >
      <Box>
        <Image p={'1'} ml='15px' mr={'10px'}  w='100%%' h={'100%'} src='https://d1k0rbiro50qe0.cloudfront.net/davids-dark.svg' />
            </Box>
        <Flex marginLeft={'30px'} h='100%' w='1100px' bg={'#0d1a10'} >
            <Box>
        <Image p={'1'} ml='15px' mr={'10px'}  w='50%' src='https://d1k0rbiro50qe0.cloudfront.net/pearl-light.svg' />
            </Box>
            <Box mr={'300px'} >
        <Image p={'1'}  w='90%' src='https://d1k0rbiro50qe0.cloudfront.net/loyalty-light.svg' />
            </Box>
            <Box mt={'6px'} w={'500px'} >
             <Text fontSize={'14px'} color={'white'} >FREE shipping $120+ ends 2/27</Text>
            </Box>
            <Box mt={'6px'} w={'300px'}>
              <Heading fontSize={'20px'} color={'white'} >FIND A STORE</Heading>
            </Box>
        </Flex>
        <Flex color={'whiteAlpha.800'} bg={'rgb(244, 72, 100)'} w='20%' >
       <Box ml={'30px'} mt='6px' > <AiFillShop  size={'25px'} /></Box>
        <Box  mt={'6px'} > <Text>BOOK APPOINTMENT</Text></Box>
     </Flex>
    </Flex>
    
    {/* 2nd NavBar  */}

    <Flex ml={'15px'} h={'5vh'} mb={'10px'} mt={'20px'}>
      <Box ml={'20px'}><AiOutlineMenu size={'30px'}/></Box>
      <RouterLink to='/'>
      <Box ml={'20px'}><Image w={'90%'} src='https://d1k0rbiro50qe0.cloudfront.net/logo-full.svg' /> </Box>
      </RouterLink>
      <RouterLink to='/dressespage' >
         <Text ml={'10px'} fontSize={'17px'} >Shop</Text>
      </RouterLink>
        <Text ml={'10px'} fontSize={'16px'} >HOT DEALS</Text> 
        <Text ml={'10px'} fontSize={'16px'} >PLANNING</Text> 
        <Text ml={'10px'} fontSize={'16px'} >ABOUT</Text> 
      <Flex w='20%' >
       <Box mt={'3px'} ml={'15px'} mr={'5px'}> <AiFillShop  size={'20px'} /></Box>
        <Box  > <Text>BOOK APPOINTMENT</Text></Box>
        </Flex>
        {/* 2nd NavBar SearchBar */}
        <Flex ml={'210px'} >
          <Flex><Input border={'none'} borderBottom={'1px solid black'} placeholder='Search...' />
          <Button bgColor={'transparent'} ><AiOutlineSearch size={'25px'} /></Button></Flex>
          <Box mt={'7px'} ml={'17px'} ><ImLocation size={'22px'} /></Box>
          <Box mt={'7px'} ml={'31px'} ><BiUser size={'23px'} /></Box>
          <Box mt={'7px'} ml={'30px'} ><FaShoppingBag size={'21px'} /></Box>
        </Flex>
    </Flex>
    </Box>
  )
}

export default Navbar
