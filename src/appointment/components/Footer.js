import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Footer.css'

function Footer() {
    return (
        <div className="footer__appointment">
            <div className="footer__appointment__left">
                <Link style={{ textDecoration: 'none', color:'#888DA0', fontSize:'14px' }} to ="/">Help</Link>
                <Link style={{ textDecoration: 'none', color:'#888DA0', fontSize:'14px' }} to ="/">Privacy Policy</Link>
                <Link style={{ textDecoration: 'none', color:'#888DA0', fontSize:'14px' }} to ="/">Terms and Conditions</Link>
            </div>
            
        </div>
    )
}

export default Footer
