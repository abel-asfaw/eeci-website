import { Intro } from '../../components/Intro/Intro'
import { Contact } from '../../components/Contact/Contact'

export function ContactPage() {
  return (
    <>
      <Intro
        title="Contact Us"
        subtitle="We would love to hear from you."
      />
      <Contact />
    </>
  )
}