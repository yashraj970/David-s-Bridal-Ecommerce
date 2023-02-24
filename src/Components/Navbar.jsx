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
    <Flex flexDirection={['column','column','column','row','row','row']} textAlign={'center'} bg='white' h={'5vh'} w={['100%']} >
      <Box w={'8%'}>
    <RouterLink to='/'>
        <Image p={'1'} ml={['3px','3px','6px','15px','15px','15px']} mr={'10px'}  w={['20%','20%','30%','30%','100%','100%']} h={'100%'} src='https://d1k0rbiro50qe0.cloudfront.net/davids-dark.svg' />
    </RouterLink>
      </Box>
        <Flex marginLeft={'30px'} h='100%' w={['500px','500px','500px','900px','1000px','1100px']} bg={'#0d1a10'} >
            <Box>
        <Image p={'1'} ml={['3px','3px','6px','15px','15px','15px']} mr={'10px'}  w={['30%','30%','50%','50%']} src='https://d1k0rbiro50qe0.cloudfront.net/pearl-light.svg' />
            </Box>
            <Box mr={['100px','100px','300px','300px']} >
        <Image p={'1'}  w={['50%','50%','90%','90%']} src='https://d1k0rbiro50qe0.cloudfront.net/loyalty-light.svg' />
            </Box>
            <Box mt={'6px'} w={['100px','100px','100px','300px','500px','500px']} >
             <Text fontSize={['3px','3px','6px','20px','14px','14px']} color={'white'} >FREE shipping $120+ ends 2/27</Text>
            </Box>
            <Box mt={'6px'} w={'300px'}>
              <Heading fontSize={['6px','6px','6px','20px','20px','20px']} color={'white'} >FIND A STORE</Heading>
            </Box>
        </Flex>
        <Flex color={'whiteAlpha.800'} bg={'rgb(244, 72, 100)'} w='20%' >
       <Box ml={['3px','3px','6px','20px','30px','30px']} mt='6px' > <AiFillShop  size={'24px'} /></Box>
        <Box  mt={'6px'} > <Text>BOOK APPOINTMENT</Text></Box>
     </Flex>
    </Flex>
    
    {/* 2nd NavBar  */}

    <Flex ml={['3px','3px','6px','15px','15px','15px']} h={'5vh'} mb={'10px'} mt={'20px'}>
      <Box ml={['3px','3px','6px','20px','20px','20px']}><AiOutlineMenu size={'30px'}/></Box>
      <RouterLink to='/'>
      <Box ml={['3px','3px','6px','20px','20px','20px']}><Image w={['50%','50%','90%','90%']} src='https://d1k0rbiro50qe0.cloudfront.net/logo-full.svg' /> </Box>
      </RouterLink>
      <RouterLink to='/dressespage' >
         <Text ml={['3px','3px','6px','10px','10px','10px']} fontSize={'16px'} >Shop</Text>
      </RouterLink>
      <RouterLink to='/dressespage' >
        <Text ml={'12px'} fontSize={['4px','4px','8px','16px','16px','16px']} >HOT DEALS</Text> 
      </RouterLink>
        <Text ml={['3px','3px','6px','10px','10px','13px']} fontSize={['4px','4px','8px','16px','16px','16px']} >PLANNING</Text> 
        <Text ml={['3px','3px','6px','10px','10px','13px']} fontSize={['4px','4px','8px','16px','16px','16px']} >ABOUT</Text> 
      <Flex w='20%' >
       <Box mt={'3px'} ml={['2px','2px','2px','15px','15px','15px']} mr={'5px'}> <AiFillShop  size={'20px'} /></Box>
        <Box  > <Text>BOOK APPOINTMENT</Text></Box>
        </Flex>
        {/* 2nd NavBar SearchBar */}
        <Flex ml={['50px','50px','50px','210px','210px','210px']} >
          <Flex><Input border={'none'} borderBottom={'1px solid black'} placeholder='Search...' />
          <Button bgColor={'transparent'} ><AiOutlineSearch size={['10px','10px','10px','25px','25px','25px']} /></Button></Flex>
          <Box mt={'7px'} ml={['5px','5px','17px','17px']} ><ImLocation size={'25px'} /></Box>
          <Box mt={'7px'} ml={['5px','5px','31px','31px']} ><BiUser size={'25px'} /></Box>
          <RouterLink to={'/cartpage'} >
          <Box mt={'7px'} ml={['5px','5px','31px','31px']} ><FaShoppingBag size={'25px'} /></Box>
          </RouterLink>
        </Flex>
    </Flex>
    </Box>
  )
}

export default Navbar
