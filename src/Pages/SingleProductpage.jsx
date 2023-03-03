import { Box,Text,Image,Heading, Flex,Button,useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const SingleProductpage = () => {
  const {id} = useParams()
  const toast = useToast()

  const [singleDress , setDress] = useState({});

  
  const HandleCart = (dress)=>{
    let cartData = JSON.parse(localStorage.getItem('cart'))||[];
    let alreadyincart = false;
          for(let i=0 ; i<cartData.length ; i++){
            if(cartData[i].id == dress.id){
              alreadyincart = true
              break
            }
          }
          if(alreadyincart){
            toast({
              description: "Product Already in Cart.",
              status: 'error',
              duration: 3000,
              isClosable: true,
            })
          } else{
    cartData = [...cartData,dress]
    localStorage.setItem('cart' , JSON.stringify(cartData));
    toast({
      description: "Product Added to Cart.",
      status: 'success',
      duration: 6000,
      isClosable: true,
    })
  }
  }

  const getData = ()=>{
    axios.get(`https://639b3492d5141501974eaf28.mockapi.io/nykaa?id=${id}`)
    .then((data)=>{
      console.log(data.data)
      setDress(data.data[0]) 
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  
  useEffect(()=>{
    getData()
  },[id])

  // const {category,details,image,name,price,quantity ,ratings} = singleDress;


  return (
    <Box mt={'50px'}>
      <Flex>
      <Box  ml={['20px','100px']} w={'25%'} >
        <Image w={'100%'} src={singleDress.image} />
      </Box>
      <Box w={'40%'} mt={['1%' ,'6%']} textAlign={'center'} >
            <Heading fontSize={'18px'}>{singleDress.name}</Heading> <br />
            <Text>Rs.{singleDress.price}</Text><br />
            <Text>Category - {singleDress.category}</Text><br />
            <Text>Extra Details - {singleDress.details}</Text>
            <Text>Rating - {singleDress.ratings}</Text> <br />
            <Button
            bg={'blue.300'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
             onClick={()=> HandleCart(singleDress)  } >Add to Cart</Button>
      </Box>
      </Flex>
    </Box>
  )
}

export default SingleProductpage
