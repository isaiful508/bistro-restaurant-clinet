import { useState } from 'react';
import orderCover from '../../assets/shop/order.jpg'
import Cover from '../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/UseMenu';


import OrderTab from './OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    // console.log(category);

    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <div> 
            <Helmet>
                <title>Bistro Boss || Order Food</title>
            </Helmet>
            <Cover
                bgimg={orderCover}
                title="ORDER FOOD"
            ></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

                <TabList className="uppercase text-center inter-500 mt-16 ">

                    <Tab>Salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soups</Tab>
                    <Tab>desserts</Tab>
                    <Tab>drinks</Tab>

                </TabList>

                <TabPanel>
                    <OrderTab
                    item={salad}
                    >

                    </OrderTab>
                </TabPanel>

                <TabPanel>

                <OrderTab
                    item={pizza}
                    >

                    </OrderTab>
                </TabPanel>

                <TabPanel>
                <OrderTab
                    item={soup}
                    >

                    </OrderTab>

                </TabPanel>

                <TabPanel>

                <OrderTab
                    item={dessert}
                    >

                    </OrderTab>
                </TabPanel>

                <TabPanel>
                <OrderTab
                   item={drinks} 
                    >

                    </OrderTab>

                </TabPanel>

            

            </Tabs>

        </div>
    );
};

export default Order;