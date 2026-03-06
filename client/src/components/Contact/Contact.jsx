import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
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
        formRef.current.reset() // clears form
      },
      (error) => {
        console.error(error)
        alert("Failed to send message.")
      }
    )
  }

  return (
    <Box
      maxW="900px"
      mx="auto"
      mt="16"
      px="6"
    >
      <form ref={formRef} onSubmit={sendEmail}>

        {/* name fields */}
        <FormControl isRequired mb="8">
          <FormLabel fontSize="lg" fontWeight="600">
            Name
          </FormLabel>

          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="6">
            <GridItem>
              <Input name="first_name" size="lg" />
              <Text fontSize="sm" color="gray.500" mt="2">
                First
              </Text>
            </GridItem>

            <GridItem>
              <Input name="last_name" size="lg" />
              <Text fontSize="sm" color="gray.500" mt="2">
                Last
              </Text>
            </GridItem>
          </Grid>
        </FormControl>

        {/* email */}
        <FormControl isRequired mb="8">
          <FormLabel fontSize="lg" fontWeight="600">
            Email
          </FormLabel>
          <Input type="email" name="email" size="lg" />
        </FormControl>

        {/* message */}
        <FormControl isRequired mb="10">
          <FormLabel fontSize="lg" fontWeight="600">
            Comment or Message
          </FormLabel>
          <Textarea name="message" rows="6" size="lg" resize="vertical" />
        </FormControl>

        {/* submit button */}
        <Button
          type="submit"
          size="lg"
          px="10"
          bg="gray.300"
          _hover={{ bg: 'gray.400' }}
        >
          Submit
        </Button>

      </form>
    </Box>
  )
}