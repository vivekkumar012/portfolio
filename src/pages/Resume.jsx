import React from 'react'
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from '../components/Pageheader'

function Resume() {
  return (
    <section id='resume'>
       <PageHeaderContent
        headerText="Resume"
        icon={<BsInfoCircleFill size={40}/>}
        />
     </section>
  )
}

export default Resume
