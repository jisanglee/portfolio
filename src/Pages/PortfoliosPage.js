import React, { useState } from 'react';
import Button from '../Components/Button';
import Menu from '../Components/Menu';
import Title from '../Components/Title';
import portfolios from '../data/portfolios';
import { InnerLayout, MainLayout } from '../styles/Layouts';

const allButtons = ['All',...new Set(portfolios.map(item=>item.category))]

function PortfoliosPage(props) {
    const [menuItem, setMenuItems] = useState(portfolios);
    const [button] = useState(allButtons);
    // const [button,setButtons] = useState(allButtons);


    const filter = (button) => {
        if (button === 'All') {
            setMenuItems(portfolios)
            return;
        }
        const filteredData = portfolios.filter(item => item.category === button);
        setMenuItems(filteredData);
    }
    return (
        <MainLayout>
            <Title title={'Portfolios'} span={'Portfolios'} />
            <InnerLayout>
                <Button filter={filter} button={button} />
                <Menu menuItems={menuItem} />
            </InnerLayout>
        </MainLayout>
    );
}

export default PortfoliosPage;