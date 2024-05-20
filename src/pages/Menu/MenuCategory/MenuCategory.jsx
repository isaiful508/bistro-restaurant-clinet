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
            
        </div>
    );
};

export default MenuCategory;