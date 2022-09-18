import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className='footer-container'>
                <div className='footer-details'>
                    <div>
                        <p>Home</p>
                        <p>About us</p>
                        <p>Shopping Cart</p>
                        <p>Contact Us</p>
                    </div>
                    <div>
                        <p>All Arts</p>
                        <p>Collections</p>
                        <p>Artists</p>
                    </div>
                    <div>
                        <p>My Account</p>
                        <p>My Favourites</p>
                        <p>My Orders</p>
                    </div>
                    <div>
                        <p>FAQs</p>
                        <p>Track my Order</p>
                        <p>Term & Conditions</p>
                    </div>
                </div>
                <div className='footer-newsletter'>
                    <h3>Newsletter Signup</h3>
                    <div className='footer-newsletter-form'>
                        <input placeholder='Email Address'></input>
                        <button><span>Sign up</span></button>
                    </div>
                    <p>©2022 Art Bureau. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer