import React from 'react'

function Footer() {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
            <aside>
                <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className="fill-current">
                    <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                </svg>
                <p>
                    HERO.IO <br />
                    Crafting innovative apps since 2024
                </p>
            </aside>

            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-6 text-gray-300">
          
                    <a
                        href="https://www.facebook.com/armamunsyl"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-[#1877F2] transition-all"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
                        </svg>
                    </a>
                    <a
                        href="https://x.com/armamunsyl"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-[#1DA1F2] transition-all"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M22.162 0h-4.205l-5.36 7.324L6.949 0H2.744l7.595 10.185L1.639 24h4.205l5.579-7.617L17.051 24h4.205l-7.82-10.545L22.162 0z" />
                        </svg>
                    </a>
                    <a
                        href="https://www.youtube.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-[#FF0000] transition-all"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.03 5.804 0 12c.03 6.185.488 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.196-.488-8.55-4.385-8.816zm-10.615 12.816V8l8 4-8 4z" />
                        </svg>
                    </a>
                </div>
            </nav>
        </footer>
    )
}

export default Footer
