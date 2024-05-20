import { Helmet } from "react-helmet";

import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'

import useMenu from "../../../hooks/UseMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {

    const [menu] = useMenu([]);
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')


    return (
        <div>
            <Helmet>
                <title>Bistro Boos || Menu</title>
                <meta name="description" content="Helmet application" />
            </Helmet>

           {/* main cover */}
            <SectionTitle 
            subHeading="Don't miss"
            heading="TODAY'S OFFER"
            ></SectionTitle>
            {/* offered menu items */}
            <MenuCategory
            items={offered}
            ></MenuCategory>
            
            {/* desert menu items */}
            <MenuCategory
            items={dessert}
            title="DESSERT"
            img={dessertImg}
            ></MenuCategory>
            {/* pizza */}
            <MenuCategory
            items={pizza}
            title="pizza"
            img={pizzaImg}
            ></MenuCategory>
            {/* salad */}

            <MenuCategory
            items={salad}
            title="salad"
            img={saladImg}
            ></MenuCategory>
            {/* soup */}
<MenuCategory
items={soup}
title="soup"
img={soupImg}
></MenuCategory>           
        </div>
    );
};

export default Menu;