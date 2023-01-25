import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void
    setIsMenuToggled: (value: boolean) => void;
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage,
    setIsMenuToggled
}: Props) => {

    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage

    function clickMenuMobile() {
        setSelectedPage(lowerCasePage);
        setIsMenuToggled(false)
    }

  return (
    <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
        href={`#${lowerCasePage}`}
        onClick={() => clickMenuMobile()}
    >
        {page}
    </AnchorLink>
  )
}

export default Link