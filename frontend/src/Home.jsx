import React from 'react'
import { Box, Stack } from "@chakra-ui/react"
import Card from './Card'
import axios from "axios";




const Home = () => {



  const checkoutHandler = async (amount) => {

    const { data: { key } } = await axios.get("https://razorpay-payment-gateway-backend-mj.onrender.com/api/getkey")
    // http://localhost:4000/api/getkey
    const { data: { order } } = await axios.post("https://razorpay-payment-gateway-backend-mj.onrender.com/api/checkout", {
      // http://localhost:4000/api/checkout
      amount
    })

    var options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Mayank Jaiswal",
      description: "Razorpay-payment-gateway test mode  ",
      image: "https://avatars.githubusercontent.com/u/58311460?v=4",
      order_id: order.id,
      callback_url: "https://razorpay-payment-gateway-backend-mj.onrender.com/api/paymentverification",
      // http://localhost:4000/api/paymentverification
      prefill: {
        name: "Mayank jaiswal",
        email: "mayankjaiswal20180@gmail.com.com",
        contact: "9340163319"
      },
      notes: {
        "address": "indore M.p"
      },
      theme: {
        "color": "#3399cc"
      }
    };
    const razor = new window.Razorpay(options);

    razor.open();

  }
  return (
    <Box>

      <Stack h={"100vh"} alignItems={"center"} justifyContent={"center"} direction={["column", "row"]}>

        <Card amount={5000} img={"https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png?v=1620371415"} checkoutHandler={checkoutHandler} />

        <Card amount={3000} img={"https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png?v=1620371415"} checkoutHandler={checkoutHandler} />

      </Stack>



    </Box>
  )
}

export default Home