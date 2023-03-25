import React from 'react'

export default function Footer({children}) {
  return (
    <div className='container'>
        {children}
        <div>
            <section>
                <h3>BAND</h3>
                <div>
                    {}
                </div>
            </section>
            <section>
            <h3>ORCHESTRA</h3>
                <div>
                    {}
                </div>
            </section>
        </div>
        <div>
            <section>
                <h3>EXPLORE</h3>
                <ul>
                    <li>My Account</li>
                    <li>Blog</li>
                    <li>FAQ</li>
                </ul>
            </section>
            <section>
                <h3>CONTACT US</h3>
                <ul>
                    <li>877-0000-555</li>
                    <li>sales@myintrument.com</li>
                    <li>1234 Main Street, Star City, TX 12345</li>
                </ul>
            </section>
        </div>
        
    </div>
  )
}
