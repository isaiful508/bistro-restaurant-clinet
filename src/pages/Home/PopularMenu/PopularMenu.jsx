import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Category from './../Category/Category';
import MenuItems from "../../Shared/MenuItems/MenuItems";


const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems);
        })
    }, [])

    return (
        <section>
            <SectionTitle
            heading="Our Menu"
            subHeading="Popular Items"
            >

            </SectionTitle>

            <div className="grid md:grid-cols-2 gap-10 mb-20 mt-12">
                {
                    menu.map((item) => <MenuItems
                    key={item._id}
                    item={item}
                    ></MenuItems>)
                }
            </div>
            
        </section>
    );
};

export default PopularMenu;