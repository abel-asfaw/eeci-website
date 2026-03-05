import { useRef } from 'react'
import emailjs from '@emailjs/browser'

export function Contact() {
  const formRef = useRef()

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
    <section style={{ padding: "4rem 2rem" }}>
      <h2>Contact Us</h2>

      <form ref={formRef} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <br /><br />
        <input type="email" name="email" placeholder="Your Email" required />
        <br /><br />
        <textarea name="message" placeholder="Your Message" required />
        <br /><br />
        <button type="submit">Send Message</button>
      </form>
    </section>
  )
}