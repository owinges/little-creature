import React from 'react';

const PortfolioModal = ({ imageUrl, isOpen, onCloseModal }) => {
    if (!isOpen) {
        return null;
    } else {
        return (
            <div className='my-modal' onClick={onCloseModal}>
                <img src={imageUrl} />
            </div>
        );
    }
}

export default PortfolioModal;
