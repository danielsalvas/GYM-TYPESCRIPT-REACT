import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";

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
        <div className="md:my-5 md:w-3/5">
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm">
          We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </div>

        {/* BENEFITS */}

        <div className="md:flex items-center justify-between gap-8 mt-5">
          {benefits.map( (benefit: BenefitType) => (
            <Benefit 
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits