import React from 'react'

function Contact() {
    return (
        <div id="contact">
            <h1>CONTACT US</h1>
            <form action="">
                <input type="text" placeholder="Type your name" required/>
                <input type="email" placeholder="Type your email" required />
                <textarea placeholder="Write here..."></textarea>
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

export default Contact
