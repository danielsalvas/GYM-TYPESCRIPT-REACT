import Logo from "@/assets/Logo.png"

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-10 basis-1/2 md:mt-0">
                <img src={Logo} alt="Logo" />
                <p className="my-5">
                    Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you Dream of.. Get Your Dream Body Now.
                </p>
                <p>
                    © Evogym All Rights Reserved
                </p>
            </div>

            <div className="my-8 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <div className="flex flex-col">
                    <p>Avenue E Street Const #986</p>
                    <p>(+503) 253985445</p>

                </div>
            </div>

            <div>
                <h4 className="font-bold">Sponsor Links</h4>
                <div className="flex flex-col">
                    <a className="hover:text-primary-500" href="https://www.redbull.com/" target='_blank'>Redbull</a>
                    <a className="hover:text-primary-500" href="https://www.forbes.com/" target='_blank'>Forbes</a>
                    <a className="hover:text-primary-500" href="https://fortune.com/" target='_blank'>Fortune</a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer