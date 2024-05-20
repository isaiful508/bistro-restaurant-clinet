
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/UseMenu";

import MenuItems from "../../Shared/MenuItems/MenuItems";


const PopularMenu = () => {

   const [menu] = useMenu([]);
   const popular = menu.filter(item => item.category === 'popular')


    return (
        <section>
            <SectionTitle
            heading="Our Menu"
            subHeading="Popular Items"
            >

            </SectionTitle>

        </section>
    );
};

export default PopularMenu;