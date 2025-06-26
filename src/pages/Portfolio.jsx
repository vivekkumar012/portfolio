import React from 'react'
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from '../components/Pageheader'

function Portfolio() {
  return (
    <section id='portfolio'>
       <PageHeaderContent
        headerText="PortFolio"
        icon={<BsInfoCircleFill size={40}/>}
        />
     </section>
  )
}

export default Portfolio
