import React from "react";

import {
  Container,
  Column,
  FooterLink,
  Heading,
} from '../styles/FooterStyles.js'

const Footer = () => {
  return (
    <Container>
      <Column>
        <Heading>About Us</Heading>
        <FooterLink href="#">Aim</FooterLink>
        <FooterLink href="#">Testimonials</FooterLink>
      </Column>
      <Column>
        <Heading>Contact Us</Heading>
        <FooterLink href="#">some text</FooterLink>
      </Column>
      <Column>
        <Heading>Social Media</Heading>
        <FooterLink href="#">
          <i className="fab fa-facebook-f">
            <span style={{ marginLeft: '10px' }}>Facebook</span>
          </i>
        </FooterLink>
        <FooterLink href="#">
          <i className="fab fa-instagram">
            <span style={{ marginLeft: '10px' }}>Instagram</span>
          </i>
        </FooterLink>
        <FooterLink href="#">
          <i className="fab fa-twitter">
            <span style={{ marginLeft: '10px' }}>Twitter</span>
          </i>
        </FooterLink>
      </Column>
    </Container>
  )
}
export default Footer
