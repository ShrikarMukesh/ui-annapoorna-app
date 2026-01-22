// src/components/Footer.js

import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Top section: links */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Company</h4>
                        <ul>
                            <li><a href="#" className="hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:underline">Careers</a></li>
                            <li><a href="#" className="hover:underline">Press</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Legal</h4>
                        <ul>
                            <li><a href="#" className="hover:underline">Terms of Service</a></li>
                            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Help</h4>
                        <ul>
                            <li><a href="#" className="hover:underline">Support</a></li>
                            <li><a href="#" className="hover:underline">FAQs</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Social</h4>
                        <ul className="flex space-x-4">
                            <li><a href="#"><i className="fab fa-facebook-f"></i> Facebook</a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom section: app download and social links */}
                <div className="flex justify-between items-center flex-col sm:flex-row">
                    <div className="mb-6 sm:mb-0">
                        <a href="#" className="mr-4">
                            <img src="path_to_google_play_image" alt="Google Play" className="h-10" />
                        </a>
                        <a href="#">
                            <img src="path_to_app_store_image" alt="App Store" className="h-10" />
                        </a>
                    </div>

                    <div className="text-sm">
                        <p>&copy; 2024 Annapoorna. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
