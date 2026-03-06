import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import {
  Box,
  Button,
  Grid,
  GridItem,
  Input,
  Textarea,
  Text,
} from '@chakra-ui/react'

export function Contact() {
  const formRef = useRef()

  // handles email submission
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(
      () => {
        alert("Message sent successfully!")
        formRef.current.reset()
      },
      (error) => {
        console.error(error)
        alert("Failed to send message.")
      }
    )
  }

  return (
    <Box maxW="900px" mx="auto" mt="16" px="6">
 <form ref={formRef} onSubmit={sendEmail}>

  {/* first + last name */}
  <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="6" mb="8">

    <GridItem>
      <Text fontSize="lg" fontWeight="600" mb="2">
        First Name <Text as="span" color="red.500">*</Text>
      </Text>
      <Input name="first_name" size="lg" required />
    </GridItem>

    <GridItem>
      <Text fontSize="lg" fontWeight="600" mb="2">
        Last Name <Text as="span" color="red.500">*</Text>
      </Text>
      <Input name="last_name" size="lg" required />
    </GridItem>

  </Grid>

  {/* email */}
  <Text fontSize="lg" fontWeight="600" mb="2">
    Email <Text as="span" color="red.500">*</Text>
  </Text>
  <Input type="email" name="email" size="lg" mb="8" required />

  {/* message */}
  <Text fontSize="lg" fontWeight="600" mb="2">
    Comment or Message <Text as="span" color="red.500">*</Text>
  </Text>
  <Textarea name="message" rows="6" size="lg" mb="10" required />

  {/* submit */}
  <Button
  type="submit"
  size="lg"
  px="12"
  py="6"
  fontWeight="600"
  bg="gray.900"
  color="white"
  borderRadius="md"
  transition="all 0.2s ease"
  _hover={{
    bg: "gray.700",              // lighter on hover
    textDecoration: "underline",
    textUnderlineOffset: "6px",
  }}
  _active={{
    bg: "gray.800",
  }}
>
  Submit
</Button>

</form>
    </Box>
  )
}