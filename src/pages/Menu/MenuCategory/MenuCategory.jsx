import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems/MenuItems";

    

const MenuCategory = ({items, title, img}) => {
    return (
        <div className="pt-8">
            { title &&  <Cover
            bgimg={img}
            title={title}
            ></Cover>}
            <div className="grid md:grid-cols-2 gap-10 mb-20 mt-16 p-6">
                {
                    items.map((item) => <MenuItems
                    key={item._id}
                    item={item}
                    ></MenuItems>)
                }
            </div>

            <Link to={`/order/${title}`}>
            <button className="btn  btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </Link>
            
        </div>
    );
};

export default MenuCategory;