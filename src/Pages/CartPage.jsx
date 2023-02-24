import { Box,Grid,GridItem,Text,Image, Heading, Button} from '@chakra-ui/react'


const CartPage = () => {
    let cart = JSON.parse(localStorage.getItem('cart'))||[]
    console.log(cart)
    if( cart.length===0){
        return <Heading mt={'100px'} mb={'150px'} textAlign={'center'} >Your Cart is Empty</Heading>
    }
    return (
      <Box w={'90%'} margin='auto' >
      <Grid mt={'40px'} templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)','repeat(4, 1fr)']} gap={6}>
        {
          cart.map((dress)=>(
            <GridItem textAlign={'center'} key={dress.id} >
              <Image w={'100%'} src={dress.image} />
              <Heading fontSize={'18px'}>{dress.name}</Heading>
              <Text>Rs.{dress.price}</Text>
              <Text>Rating - {dress.ratings}</Text>
              
            </GridItem>
          ))
        }
      </Grid>
    </Box>
    )
  }

export default CartPage