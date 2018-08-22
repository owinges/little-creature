import React from 'react';

import PortfolioListItem from './PortfolioListItem';

const PortfolioList = ({ images, onOpenModal }) => {
    const portfolioItems = images.map(image => {
        return (
            <PortfolioListItem
                key={image.key}
                image={image.url}
                onOpenModal={onOpenModal}
            />
        );
    });

    return (
        <React.Fragment>
            {portfolioItems}
        </React.Fragment>
    );
}

export default PortfolioList;
