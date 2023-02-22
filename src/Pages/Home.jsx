import { Box,Image } from '@chakra-ui/react'
import HomePoster from '../Images/HomePoster.png'
import React from 'react'

const Home = () => {
  return (
    <Box mt={'15px'} >
      <Box>
      <Image src={HomePoster} />
      </Box>
    </Box>
  )
}

export default Home
