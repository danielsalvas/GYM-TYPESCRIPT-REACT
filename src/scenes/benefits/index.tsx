import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [ 
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Virtual and In-Club Training ",
    description: "Meet up with our fitness coaches at the gym or from home for extra accountability and guidance on your road to results."
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "GX24® Studio Classes",
    description: "Top fitness classes led by rockstar instructors. Dance, cycle, yoga, HIIT - come lift your mood and your motivation."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Supportive Communities",
    description: "We're passionate about fitness and inclusive of everyone. Come in and get the best part of your day - you fit here."
  }
]

const container = {
  hidden: {},
  visible:{
    transition: { staggerChildren: 0.2 }
  }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
    children: React.ReactNode
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
      id="benefits"
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div 
          className="md:my-5 md:w-3/5"
          initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{ delay: 0.2, duration: 0.5}}
            variants={{
              hidden: {opacity: 0, x:-50 },
              visible: { opacity:1, x:0 }
            }}
        >
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm">
          We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        {/* BENEFITS */}

        <motion.div 
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once:true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map( (benefit: BenefitType) => (
            <Benefit 
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}

        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img 
            className="mx-auto"
            alt="benefits-page-graphics" 
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}

          <div>

            {/* TITLE */}

            <div className="relative my-5">
              <div className="before:absolute before:-top-20 before:left-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5}}
                  transition={{ delay: 0.2, duration: 0.5}}
                  variants={{
                    hidden: {opacity: 0, x:50 },
                    visible: { opacity:1, x:0 }
                  }}
                >
                  <HText>
                  THE BEST GYM. FOR YOUR BEST <span className="text-primary-500">RESULTS</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPTION */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5}}
              transition={{ delay: 0.2, duration: 0.5}}
              variants={{
                hidden: {opacity: 0, x:50 },
                visible: { opacity:1, x:0 }
              }}
            >
              <p className="my-5">Get back to the gym and back to your best with 24 Hour Fitness. Our sparkling clean gyms are waiting for you, with thousands of square feet of premium strength and cardio equipment, turf zones, lap pools, steam rooms and more. </p>
              <p className="my-5">And with expert coaching and our app at the ready, you’ll have 24/7 support to help you get results.</p>
            </motion.div>

            {/* BUTTON */}

            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles"></div>
                <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                </ActionButton>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits