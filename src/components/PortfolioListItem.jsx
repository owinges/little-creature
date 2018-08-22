import React from 'react';

const PortfolioListItem = ({ image, onOpenModal }) => {
    const imageUrl = image;

    let openModal = () => {
        onOpenModal(imageUrl);
    }

    return (
        <div className='col-md-2 portfolio-image-container'>
            <img className='portfolio-image'
                src={imageUrl}
                onClick={openModal}
            />
        </div>
    );
}

export default PortfolioListItem;