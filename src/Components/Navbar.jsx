import React from 'react'
import { Box,Text, Flex , Image, Heading, Input, Button, Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

import {AiFillShop,AiOutlineMenu,AiOutlineSearch} from 'react-icons/ai'
import {ImLocation} from 'react-icons/im'
import {BsFillCartCheckFill} from 'react-icons/bs'

const Navbar = () => {
  const { loginWithRedirect,logout,isAuthenticated } = useAuth0();

  
  return (<Box>
    <Flex flexDirection={['column','column','column','row','row','row']} textAlign={'center'} bg='white' h={'5vh'} w={['100%']} >
      <Box w={'8%'}>
    <RouterLink to='/'>
        <Image p={'1'} ml={['3px','3px','6px','15px','15px','15px']} mr={'10px'}  w={['80%','80%','80%','80%','100%','100%']} h={'100%'} src='https://d1k0rbiro50qe0.cloudfront.net/davids-dark.svg' />
    </RouterLink>
      </Box>
        <Flex marginLeft={'30px'} h='100%' w={['360px','500px','700px','900px','1000px','1100px']} bg={'#0d1a10'} >
            <Box>
        <Image p={'1'} ml={['3px','3px','6px','15px','15px','15px']} mr={'10px'}  w={['30%','30%','50%','50%']} src='https://d1k0rbiro50qe0.cloudfront.net/pearl-light.svg' />
            </Box>
            <Box mr={['100px','100px','300px','300px']} >
        <Image p={'1'}  w={['50%','50%','90%','90%']} src='https://d1k0rbiro50qe0.cloudfront.net/loyalty-light.svg' />
            </Box>
            <Box mt={'6px'} w={['0px','0px','100px','300px','500px','500px']} >
             <Text fontSize={['0px','0px','6px','20px','14px','14px']} color={'white'} >FREE shipping $120+ ends 2/27</Text>
            </Box>
            <Box mt={'6px'} w={'300px'}>
              <Heading fontSize={['6px','6px','6px','20px','20px','20px']} color={'white'} >FIND A STORE</Heading>
            </Box>
        </Flex>
        <Flex color={'whiteAlpha.800'} bg={'rgb(244, 72, 100)'} w={['0px','0px','0px','265px','265px','265px']} >
       <Box ml={['0px','3px','6px','20px','30px','30px']} mt='6px' > <AiFillShop  size={'23px'} /></Box>
        <Box  mt={'6px'} > <Text fontSize={['0px','0px','8px','16px','16px','16px']}>BOOK APPOINTMENT</Text></Box>
     </Flex>
    </Flex>
    
    {/* 2nd NavBar  */}

    <Flex ml={['3px','3px','6px','15px','15px','15px']} h={'5vh'} mb={'10px'} mt={'20px'}>
      <Box ml={['3px','3px','6px','20px','20px','20px']}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<AiOutlineMenu size={'25px'}/>}
          variant='outline'
        />
        <MenuList>
          <RouterLink to={'/'} ><MenuItem>Home</MenuItem></RouterLink>
          <RouterLink to={'/dressespage'} ><MenuItem>Shop</MenuItem></RouterLink>
          <RouterLink to={'/cartpage'} ><MenuItem>Cart</MenuItem></RouterLink>
        </MenuList>
    </Menu> 
         </Box>
      <RouterLink to='/'>
      <Box ml={['3px','3px','6px','20px','20px','20px']}><Image w={['50%','50%','90%','90%']} src='https://d1k0rbiro50qe0.cloudfront.net/logo-full.svg' /> </Box>
      </RouterLink>
      <RouterLink to='/dressespage' >
         <Text ml={['3px','3px','6px','10px','10px','10px']} fontSize={'16px'} >Shop</Text>
      </RouterLink>
      <RouterLink to='/dressespage' >
        <Text ml={'12px'} fontSize={['0px','0px','8px','16px','16px','16px']} >HOT DEALS</Text> 
      </RouterLink>
        <Text ml={['3px','3px','6px','10px','10px','13px']} fontSize={['0px','0px','8px','16px','16px','16px']} >PLANNING</Text> 
        <Text ml={['3px','3px','6px','10px','10px','13px']} fontSize={['0px','0px','8px','16px','16px','16px']} >ABOUT</Text> 
      <Flex w='20%' >
       <Box mt={'3px'} ml={['2px','2px','2px','15px','15px','15px']} mr={'5px'}> <AiFillShop  size={'20px'} /></Box>
        <Box  > <Text fontSize={['0px','0px','8px','16px','16px','16px']}>BOOK APPOINTMENT</Text></Box>
        </Flex>
        {/* 2nd NavBar SearchBar */}
        <Flex ml={['25px','25px','50px','210px','210px','210px']} alignItems={'center'} >
          <Flex><Input border={'none'} borderBottom={'1px solid black'} placeholder='Search...' />
          <Button bgColor={'transparent'} ><AiOutlineSearch size={['10px','10px','10px','25px','25px','25px']} /></Button></Flex>
          <Box  ml={['5px','5px','17px','17px']} ><ImLocation size={'25px'} /></Box>
          <Box  ml={['5px','5px','22px','22px']} >
            { isAuthenticated ? (<Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
            </Button>) : (<Button onClick={() => loginWithRedirect()}>Log In</Button>)

            }
          </Box>
          <RouterLink to={'/cartpage'} >
          <Box  ml={['5px','5px','23px','23px']} ><BsFillCartCheckFill size={'25px'} /></Box>
          </RouterLink>
        </Flex>
    </Flex>
    </Box>
  )
}

export default Navbar
