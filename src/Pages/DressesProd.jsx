import { Box,Grid,GridItem,Text,Image, Heading, Button, useToast} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CartPage from './CartPage'


const DressesProd = () => {
  const [dresses , setDress] = useState([])
  const [loading , setLoading] = useState(false)
  const toast = useToast()



  const getData = ()=>{
    setLoading(true)
    axios.get(`https://639b3492d5141501974eaf28.mockapi.io/nykaa`)
    .then((data)=>{
      console.log(data.data);
      setDress(data.data)
      setLoading(false)
    })
    .catch((err)=>{
      console.log(err);
    })
  }

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
  useEffect(()=>{
    getData()
  },[])

  if(loading){
    return <Heading mt={'60px'} textAlign={'center'} >Loading...</Heading>
  }
  return (
  <Box w={'90%'} margin='auto' >
    <Grid mt={'40px'} templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)','repeat(4, 1fr)']} gap={6}>
      {
        dresses.map((dress)=>(
          <GridItem textAlign={'center'} key={dress.id} >
            <Image w={'100%'} src={dress.image} />
            <Heading fontSize={'18px'}>{dress.name}</Heading>
            <Text>Rs.{dress.price}</Text>
            <Text>Rating - {dress.ratings}</Text>
            <Button
            bg={'blue.300'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
             onClick={()=> HandleCart(dress)  } >Add to Cart</Button>
          </GridItem>
        ))
      }
      
    </Grid>
  </Box>
  )
}

export default DressesProd


