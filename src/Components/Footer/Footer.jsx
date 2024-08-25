import React from 'react';
     
const Footer = () => {
    return (
        <footer className="fonts bg-black text-white py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ">
                {/* Logo and Social Media */}
                <div className="flex flex-col items-start">
                    <div className="px-28 lg:px-0 mb-4">
                        <img src="https://i.ibb.co/jVZw5cJ/logo-1.png" alt="Wardiere Logo" className="h-w-40 w-40" />
                    </div>
                    <p className="mb-4 px-10">Subscribe to the newsletter to get updates related to branding, designs, and more.</p>
                    <div className="flex space-x-3  text-xl">
                        <i className="fab fa-skype"></i>
                        <i className="fab fa-snapchat"></i>
                        <i className="fab fa-telegram"></i>
                        <i className="fab fa-tumblr"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-whatsapp"></i>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-pinterest"></i>
                        <i className="fab fa-behance"></i>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex text-center flex-col">
                    <h3 className="text-lg font-bold mb-4">Navigation</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-orange-500">HOME</a></li>
                        <li><a href="#" className="hover:text-orange-500">ABOUT</a></li>
                        <li><a href="#" className="hover:text-orange-500">SERVICES</a></li>
                        <li><a href="#" className="hover:text-orange-500">PORTFOLIO</a></li>
                        <li><a href="#" className="hover:text-orange-500">BLOGS</a></li>
                        <li><a href="#" className="hover:text-orange-500">CONTACT</a></li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div className="flex text-center flex-col">
                    <h3 className="text-lg font-bold mb-4">Contact</h3>
                    <p className="mb-2  ">Just feel free to contact if you want to collaborate with me, or simply have a conversation.</p>
                    <a href="mailto:contact@yourwebsite.com" className="text-xl font-bold hover:text-orange-500">
                        contact@yourwebsite.com
                    </a>
                </div>
            </div>
            <div className="text-center text-sm mt-8">
                ©2024 All Rights Reserved to Wardiere. 
            </div>
        </footer>
    );
};

export default Footer;
