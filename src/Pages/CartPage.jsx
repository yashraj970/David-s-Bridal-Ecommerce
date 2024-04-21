import {
  Box,
  Grid,
  GridItem,
  Text,
  Image,
  Heading,
  Button,
  useToast,
} from "@chakra-ui/react";

const CartPage = () => {
  const toast = useToast();

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  var showlength = cart.length;
  var showprice = cart.reduce((acc, el) => acc + Number(el.price), 0);
  const HandleDelete = (i) => {
    cart.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.reload();
    console.log(cart);
  };
  cart = JSON.parse(localStorage.getItem("cart")) || [];

  const HandleBuy = () => {
    toast({
      position: "top",
      render: () => (
        <Box color="white" p={3} bg="blue.500">
          Order Placed Succesfully
        </Box>
      ),
    });
    setTimeout(() => {
      cart = [];
      localStorage.setItem("cart", JSON.stringify(cart));
      window.location.reload();
    }, 3000);
  };

  if (cart.length === 0) {
    return (
      <Heading mt={"100px"} mb={"150px"} textAlign={"center"}>
        Your Cart is Empty
      </Heading>
    );
  }
  return (
    <Box w={"90%"} margin="auto">
      <Box textAlign={"center"}>
        <Text> Products in Cart : {showlength}</Text>
        <Text>Total : ₹{showprice}</Text>
      </Box>
      <Grid
        mt={"40px"}
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
        gap={6}
      >
        {cart.map((dress, i) => (
          <GridItem textAlign={"center"} key={dress.id}>
            <Image w={"100%"} src={dress.image} />
            <Heading fontSize={"18px"}>{dress.name}</Heading>
            <Text>Rs.{dress.price}</Text>
            <Text>Rating - {dress.ratings}</Text>
            <Button onClick={() => HandleDelete(i)} bgColor={"red.400"}>
              Delete
            </Button>
          </GridItem>
        ))}
      </Grid>
      <Box width={"15%"} margin={"auto"} mt={"40px"} mb={"50px"}>
        <Button onClick={HandleBuy} bgColor={"blue.300"}>
          Buy Now
        </Button>
      </Box>
    </Box>
  );
};

export default CartPage;
