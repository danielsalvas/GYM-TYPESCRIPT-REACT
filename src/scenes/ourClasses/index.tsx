import { SelectedPage, ClassType } from "@/shared/types"
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from "framer-motion"
import HText from "@/shared/HText"
import Class from "./Class"

const classes: Array<ClassType> = [
  {
    name: "45 MINUTES TRAINING ",
    description: "F45 is one of the most time-efficient ways of training. We aim to burn up to 750 calories per 45-minute session.",
    image: image1,
  },
  {
    name: "TEAM TRAINING",
    description: "The team mentality at F45 Training helps members transform their lifestyle physically and mentally while encouraging community growth and a no-ego attitude.",
    image: image2,
  },
  {
    name: "HIGH INTENSITY INTERVAL TRAINING (HIIT)",
    description: "F45 is specifically designed to provide a functional full-body workout while improving energy levels, metabolic rate, strength, and endurance.",
    image: image3,
  },
  {
    name: "BUILDING A GYM THAT WORKS",
    description: "The Fort creates environments where we take training seriously and do what works so that our customers experience their most powerful selves.",
    image: image4,
  },
  {
    name: "MEMBERSHIP WITH BENEFITS",
    image: image5,
  },
  {
    name: "UNLIMITED CLASSES",
    description: "Master of One. Choreo Cult. Anthem. All classes at Equinox are created and developed by the industry's best minds and taught by talented fitness instructors who test your limits and inspire results.",
    image: image6,
  }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
        <motion.div
            onViewportEnter={ () => setSelectedPage(SelectedPage.OurClasses)}
        >
          <motion.div 
            className="mx-auto w-5/6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{ delay: 0.2, duration: 0.5}}
            variants={{
              hidden: {opacity: 0, x:-50 },
              visible: { opacity:1, x:0 }
            }}
          >
            <div className="md:w-3/5">
              <HText>OUR CLASSES</HText>
              <p className="py-5">
                 The team mentality at F45 Training helps members transform their lifestyle physically and mentally while encouraging community growth and a no-ego attitude.
              </p>
            </div>

          </motion.div>

          <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
              <ul className="w-[2800px] whitespace-nowrap">
                {classes.map( (item: ClassType, index) => (
                    <Class 
                      key={`${item.name}-${index}`}
                      name={item.name}
                      description={item.description}
                      image={item.image}
                    />
                ))}
              </ul>
          </div>
        </motion.div>
    </section>
  )
}

export default OurClasses