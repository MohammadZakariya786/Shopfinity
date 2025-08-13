import React from 'react'
import Heading from '../Heading/Heading'
import { motion } from 'motion/react'
const cardParent={
  initial:{
    opacity:0,y:100,
  },
  animate:{
    opacity:1,y:0,
    transition:{
    staggerChildren:0.2,
    ease:'anticipate'
    }
  }
}

const cardChild={
  initial:{
    opacity:0,y:100,scale:0.8
  },
  animate:{
    opacity:1,y:0,scale:1
  },
  transition:{
    duration:0.3,
    ease:'anticipate'
  }
}



const Partner = () => {
  return (
    <motion.section
    initial={{
      opacity:0,y:100
    }}
    whileInView={{
      opacity:1,y:0,
      transition:{
        duration:0.3,
        ease:'easeIn'
      }
    }}
    viewport={{once:true}}
    className='max-w-[1300px] py-10 md:px-12 px-6 mx-auto'>
        <Heading highlight='Our' heading='Partners'/>
        <motion.div
        initial='initial'
        whileInView='animate'
        variants={cardParent}
        viewport={{once:true}}
        className='grid md:grid-cols-4 grid-cols-2 place-items-center  gap-5'>

        {
            partnersData.map(part=>{
                return(
                    
                    <motion.div
                    variants={cardChild}
                    key={part.id}>
                        <img src={part.image} className='md:w-30 w-24 md:h-30 h-24 object-contain'/>

                    </motion.div>
                
            )
        })
    }
    </motion.div>
    </motion.section>
  )
}

export default Partner

const partnersData=[
  {
    "id": 1,
    "name": "Nike",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUazts9CpKPGp8eMNywU6JtfJxDeGhblc-lA&s"
  },
  {
    "id": 2,
    "name": "Adidas",
    "image": "https://cdn.logojoy.com/wp-content/uploads/20231013154327/Adidas-logo-1991-1-600x319.png"
  },
  {
    "id": 3,
    "name": "Puma",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC4DihrCOYlUnKSmdH1X6R72NmnG9rSvJDTkmKcDQo-1YcVzCQ7iofCeDiB6-PcHd8_4A&usqp=CAU"
  },
  {
    "id": 4,
    "name": "Zara",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoaeP4HqunN0GjhrV-e6b1hmaWbEXCeElqfw&s"
  },
  {
    "id": 5,
    "name": "H&M",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpi98d3RlGuN_th9PZynuKxoLezqf_N6b8Q&s"
  },
  {
    "id": 6,
    "name": "Levi's",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUMRKrvSy9e5u3U1ODXaRNGfeSGzL43-igpA&s"
  },
  {
    "id": 7,
    "name": "Gucci",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjc163m1OhLT_fUFuzHxmoeS5yojfDD1XnZA&s"
  },
  {
    "id": 8,
    "name": "Louis Vuitton",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYVaVbDQO8J-a8vjh7vYRg0vEIbJ-yq5HCiQ&s"
  }
]
