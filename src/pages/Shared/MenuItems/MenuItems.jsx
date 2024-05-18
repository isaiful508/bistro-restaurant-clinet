

const MenuItems = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[120px] h-[105] " src={image} alt="" />
            <div>
                <h3 className="uppercase cinzel-400">{name}----------------</h3>
                <p className="inter-400">{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItems;