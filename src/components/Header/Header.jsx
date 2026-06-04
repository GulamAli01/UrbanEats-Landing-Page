import React from 'react'
import "./Header.css"
const Header = () => {
    return (
        <div className='header'>
            <div className="header-content">
                <h2>Order your favourite food here</h2>
                <p>Explore a wide variety of delicious dishes made with fresh ingredients and authentic flavors.
                    Whether you're craving something spicy, sweet, or healthy, our menu has something for everyone.</p>
                <button>View Menu</button>
            </div>
        </div>
    )
}

export default Header