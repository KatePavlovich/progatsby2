import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Form = styled.form`
  display: grid;
`

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Contacts</h1>
    <Form
      method="post"
      action="https://formspree.io/kpaulovich@humanseelabs.com"
    >
      <label>
        Name
        <input type="text" name="name" id="name" />
      </label>
      <label>
        Email
        <input type="email" name="_replyto" id="email" />
      </label>
      <label>
        Subject
        <input type="text" name="subject" id="subject" />
      </label>
      <label>
        Message
        <textarea name="message" id="message" rows="5" />
      </label>
      <button type="submit">Send</button>
      <input type="reset" value="Clear" />
    </Form>
  </Layout>
)

export default SecondPage
