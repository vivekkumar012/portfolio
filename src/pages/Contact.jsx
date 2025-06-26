import React from 'react'
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from '../components/Pageheader'

function Contact() {
  return (
    <section id='contact'>
       <PageHeaderContent
        headerText="Contact"
        icon={<BsInfoCircleFill size={40}/>}
        />
     </section>
  )
}

export default Contact