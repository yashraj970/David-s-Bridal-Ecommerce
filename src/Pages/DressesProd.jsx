// 

import { Box,Grid,GridItem,Text,Image, Heading, Button} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


const DressesProd = () => {
  const [dresses , setDress] = useState([])
  const [loading , setLoading] = useState(false)



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
  useEffect(()=>{
    getData()
  },[])

  if(loading){
    return <Heading mt={'60px'} textAlign={'center'} >Loading...</Heading>
  }
  return (
  <Box w={'90%'} margin='auto' >
    <Grid mt={'40px'} templateColumns='repeat(4, 1fr)' gap={6}>
      {
        dresses.map((dress)=>(
          <GridItem textAlign={'center'} key={dress.id} >
            <Image w={'100%'} src={dress.image} />
            <Heading fontSize={'18px'}>{dress.name}</Heading>
            <Text>Rs.{dress.price}</Text>
            <Text>Rating - {dress.ratings}</Text>
            <Button >Add to Cart</Button>
          </GridItem>
        ))
      }
    </Grid>
  </Box>
  )
}

export default DressesProd
