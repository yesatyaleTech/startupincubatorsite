import { render } from '@testing-library/react';
import React from 'react';
import "./Footer.css";


export default class Footer extends React.Component<{}>{

    render() {
        return (
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-left">
                        <h2>Yale Entrepreneurial Society</h2>
                        <p>Yale University</p>
                        <p>New Haven, CT</p>
                        <div className="social-container">
                            <br />
                            <h2>Follow Us</h2>
                            <a target="_blank" href="https://www.instagram.com/yale_entrepreneurs/" className="social-icon social-icon"
                                aria-label="instagram" style={{ display: "inline-block", position: "relative", overflow: "hidden", verticalAlign: "middle", height: "30px", width: "30px" }}>
                                <div className="social-container" style={{ position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%" }}>
                                    <svg className="social-svg" viewBox="0 0 64 64" style={{ borderTopLeftRadius: "50%", borderTopRightRadius: "50%", borderBottomRightRadius: "50%", borderBottomLeftRadius: "50%", position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%", fillRule: "evenodd" }}>
                                        <g className="social-svg-background" style={{ transition: "fill 170ms ease-in-out", fill: "transparent" }}>
                                            <circle cx="32" cy="32" r="31"></circle>
                                        </g>
                                        <g className="social-svg-icon" style={{ transition: "fill 170ms ease-in-out", fill: "transparent" }}>
                                            <path
                                                d="M43.5,29.7h-2.6c0.2,0.7,0.3,1.5,0.3,2.3 c0,5.1-4.1,9.2-9.2,9.2c-5.1,0-9.2-4.1-9.2-9.2c0-0.8,0.1-1.6,0.3-2.3h-2.6v12.7c0,0.6,0.5,1.2,1.2,1.2h20.8c0.6,0,1.2-0.5,1.2-1.2 V29.7z M43.5,21.6c0-0.6-0.5-1.2-1.2-1.2h-3.5c-0.6,0-1.2,0.5-1.2,1.2v3.5c0,0.6,0.5,1.2,1.2,1.2h3.5c0.6,0,1.2-0.5,1.2-1.2V21.6z  M32,26.2c-3.2,0-5.8,2.6-5.8,5.8c0,3.2,2.6,5.8,5.8,5.8s5.8-2.6,5.8-5.8C37.8,28.8,35.2,26.2,32,26.2 M43.5,47H20.5 c-1.9,0-3.5-1.6-3.5-3.5V20.5c0-1.9,1.5-3.5,3.5-3.5h23.1c1.9,0,3.5,1.5,3.5,3.5v23.1C47,45.4,45.5,47,43.5,47">
                                            </path>
                                        </g>
                                        <g className="social-svg-mask" style={{ transition: "fill 170ms ease-in-out", fill: "white" }}>
                                            <path
                                                d="M41.2,32c0,5.1-4.1,9.2-9.2,9.2c-5.1,0-9.2-4.1-9.2-9.2c0-0.8,0.1-1.6,0.3-2.3h-2.6v12.7c0,0.6,0.5,1.2,1.2,1.2 h20.8c0.6,0,1.2-0.5,1.2-1.2V29.7h-2.6C41.1,30.4,41.2,31.2,41.2,32z M32,37.8c3.2,0,5.8-2.6,5.8-5.8c0-3.2-2.6-5.8-5.8-5.8 c-3.2,0-5.8,2.6-5.8,5.8C26.2,35.2,28.8,37.8,32,37.8z M42.4,20.5h-3.5c-0.6,0-1.2,0.5-1.2,1.2v3.5c0,0.6,0.5,1.2,1.2,1.2h3.5 c0.6,0,1.2-0.5,1.2-1.2v-3.5C43.5,21,43,20.5,42.4,20.5z M0,0v64h64V0H0z M47,43.5c0,1.9-1.5,3.5-3.5,3.5H20.5 c-1.9,0-3.5-1.6-3.5-3.5V20.5c0-1.9,1.5-3.5,3.5-3.5h23.1c1.9,0,3.5,1.5,3.5,3.5V43.5z">
                                            </path>
                                        </g>
                                    </svg></div>
                            </a>
                            <a target="_blank" href="https://www.facebook.com/yesatyale/" className="social-icon social-icon" aria-label="facebook"
                                style={{ display: "inline-block", position: "relative", overflow: "hidden", verticalAlign: "middle", height: "30px", width: "30px" }}>
                                <div className="social-container" style={{ position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%" }}>
                                    <svg className="social-svg" viewBox="0 0 64 64" style={{ borderTopLeftRadius: "50%", borderTopRightRadius: "50%", borderBottomRightRadius: "50%", borderBottomLeftRadius: "50%", position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%", fillRule: "evenodd" }}>
                                        <g className="social-svg-background" style={{ transition: "fill 170ms ease-in-out", fill: "transparent" }}>
                                            <circle cx="32" cy="32" r="31"></circle>
                                        </g>
                                        <g className="social-svg-icon" style={{ transition: "fill 170ms ease-in-out", fill: "transparent" }}>
                                            <path
                                                d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z">
                                            </path>
                                        </g>
                                        <g className="social-svg-mask" style={{ transition: "fill 170ms ease-in-out", fill: "white" }}>
                                            <path
                                                d="M0,0v64h64V0H0z M39.6,22l-2.8,0c-2.2,0-2.6,1.1-2.6,2.6V28h5.3l-0.7,5.3h-4.6V47h-5.5V33.3H24V28h4.6V24 c0-4.6,2.8-7,6.9-7c2,0,3.6,0.1,4.1,0.2V22z">
                                            </path>
                                        </g>
                                    </svg></div>
                            </a>
                            <a target="_blank" href="https://twitter.com/yaleatyes" className="social-icon social-icon" aria-label="twitter" style={{ display: "inline-block", position: "relative", overflow: "hidden", verticalAlign: "middle", height: "30px", width: "30px" }}>
                                <div className="social-container" style={{ position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%" }}>
                                    <svg className="social-svg" viewBox="0 0 64 64" style={{
                                        borderTopLeftRadius: "50%", borderTopRightRadius: "50%", borderBottomRightRadius: "50%", borderBottomLeftRadius: "50%", position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%", fillRule: "evenodd"
                                    }}>
                                        <g className="social-svg-background" style={{ transition: "fill 170ms ease-in-out", fill: "transparent" }}>
                                            <circle cx="32" cy="32" r="31"></circle>
                                        </g>
                                        <g className="social-svg-icon" style={{ transition: "fill 170ms ease-in-out", fill: "transparent" }}>
                                            <path
                                                d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z">
                                            </path>
                                        </g>
                                        <g className="social-svg-mask" style={{ transition: "fill 170ms ease-in-out", fill: "white" }}>
                                            <path
                                                d="M0,0v64h64V0H0z M44.7,25.5c0,0.3,0,0.6,0,0.8C44.7,35,38.1,45,26.1,45c-3.7,0-7.2-1.1-10.1-2.9 c0.5,0.1,1,0.1,1.6,0.1c3.1,0,5.9-1,8.2-2.8c-2.9-0.1-5.3-2-6.1-4.6c0.4,0.1,0.8,0.1,1.2,0.1c0.6,0,1.2-0.1,1.7-0.2 c-3-0.6-5.3-3.3-5.3-6.4c0,0,0-0.1,0-0.1c0.9,0.5,1.9,0.8,3,0.8c-1.8-1.2-2.9-3.2-2.9-5.5c0-1.2,0.3-2.3,0.9-3.3 c3.2,4,8.1,6.6,13.5,6.9c-0.1-0.5-0.2-1-0.2-1.5c0-3.6,2.9-6.6,6.6-6.6c1.9,0,3.6,0.8,4.8,2.1c1.5-0.3,2.9-0.8,4.2-1.6 c-0.5,1.5-1.5,2.8-2.9,3.6c1.3-0.2,2.6-0.5,3.8-1C47.1,23.4,46,24.5,44.7,25.5z">
                                            </path>
                                        </g>
                                    </svg></div>
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/company/yale-entrepreneurial-society"
                                className="social-icon social-icon" aria-label="linkedin" style={{
                                    display: "inline-block", position: "relative",
                                    overflow: "hidden", verticalAlign: "middle", height: "30px", width: "30px"
                                }}>
                                <div className="social-container" style={{ position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%" }}>
                                    <svg className="social-svg" viewBox="0 0 64 64" style={{
                                        borderTopLeftRadius: "50%", borderTopRightRadius:
                                            "50%", borderBottomRightRadius: "50%", borderBottomLeftRadius: "50%", position: "absolute", top: "0px", left:
                                            "0px", width: "100%", height: "100%", fillRule: "evenodd"
                                    }}>
                                        <g className="social-svg-background" style={{ transition: "fill 170ms ease-in-out", fill: "transparent" }}>
                                            <circle cx="32" cy="32" r="31"></circle>
                                        </g>
                                        <g className="social-svg-icon" style={{ transition: "fill 170ms ease-in-out", fill: "transparent" }}>
                                            <path
                                                d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z">
                                            </path>
                                        </g>
                                        <g className="social-svg-mask" style={{ transition: "fill 170ms ease-in-out", fill: "white" }}>
                                            <path
                                                d="M0,0v64h64V0H0z M25.8,44h-5.4V26.6h5.4V44z M23.1,24.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1 c1.7,0,3.1,1.4,3.1,3.1C26.2,22.9,24.8,24.3,23.1,24.3z M46,44h-5.4v-8.4c0-2,0-4.6-2.8-4.6c-2.8,0-3.2,2.2-3.2,4.5V44h-5.4V26.6 h5.2V29h0.1c0.7-1.4,2.5-2.8,5.1-2.8c5.5,0,6.5,3.6,6.5,8.3V44z">
                                            </path>
                                        </g>
                                    </svg></div>
                            </a>
                        </div>
                    </div >
                    <div className="footer-right">
                        <h2>Learn More</h2>
                        <div>
                            <a href="/">Home</a></div>
                        <div>
                            <a href="/startups">Startups</a>
                        </div>
                        <div>
                            <a href="/venture-capital">VC Team</a>
                        </div>
                        <h2 className="yes-links">Yale Entrepreneurial Society</h2>
                        <div>
                            <a target="_blank" rel="noreferrer" href="https://www.yesatyale.org/">Home</a>
                        </div>
                        <div>
                            <a target="_blank" rel="noreferrer" href="https://www.yesatyale.org/resources">Resources</a>
                        </div>
                        <div>
                            <a target="_blank" rel="noreferrer" href="https://www.yesatyale.org/donate">Donate</a>
                        </div>
                    </div>
                </div >
                <div className="copy-container">
                    <hr />
                    <p className= "copyRight">© Yale Entrepreneurial Society 2021</p>
                </div>
            </div >
        )
    }
}


{/* <a target="_blank" href="https://www.instagram.com/yale_entrepreneurs/" className="social-icon social-icon" aria-label="instagram" style={"display: inline-block, position: relative, overflow: hidden, vertical-align: middle, height: 30px, width: 30px,"}><div className="social-container" style={"position: absolute, top: 0px, left: 0px, width: 100%, height: 100%,"}><svg className="social-svg" viewBox="0 0 64 64" style={"border-top-left-radius: 50%, border-top-right-radius: 50%, border-bottom-right-radius: 50%, border-bottom-left-radius: 50%, position: absolute, top: 0px, left: 0px, width: 100%, height: 100%, fill-rule: evenodd,"}><g className="social-svg-background" style={"transition: fill 170ms ease-in-out, fill: transparent,"}><circle cx="32" cy="32" r="31"></circle></g><g className="social-svg-icon" style={"transition: fill 170ms ease-in-out, fill: transparent,"}><path d="M43.5,29.7h-2.6c0.2,0.7,0.3,1.5,0.3,2.3 c0,5.1-4.1,9.2-9.2,9.2c-5.1,0-9.2-4.1-9.2-9.2c0-0.8,0.1-1.6,0.3-2.3h-2.6v12.7c0,0.6,0.5,1.2,1.2,1.2h20.8c0.6,0,1.2-0.5,1.2-1.2 V29.7z M43.5,21.6c0-0.6-0.5-1.2-1.2-1.2h-3.5c-0.6,0-1.2,0.5-1.2,1.2v3.5c0,0.6,0.5,1.2,1.2,1.2h3.5c0.6,0,1.2-0.5,1.2-1.2V21.6z  M32,26.2c-3.2,0-5.8,2.6-5.8,5.8c0,3.2,2.6,5.8,5.8,5.8s5.8-2.6,5.8-5.8C37.8,28.8,35.2,26.2,32,26.2 M43.5,47H20.5 c-1.9,0-3.5-1.6-3.5-3.5V20.5c0-1.9,1.5-3.5,3.5-3.5h23.1c1.9,0,3.5,1.5,3.5,3.5v23.1C47,45.4,45.5,47,43.5,47"></path></g><g className="social-svg-mask" style={"transition: fill 170ms ease-in-out, fill: white,"}><path d="M41.2,32c0,5.1-4.1,9.2-9.2,9.2c-5.1,0-9.2-4.1-9.2-9.2c0-0.8,0.1-1.6,0.3-2.3h-2.6v12.7c0,0.6,0.5,1.2,1.2,1.2 h20.8c0.6,0,1.2-0.5,1.2-1.2V29.7h-2.6C41.1,30.4,41.2,31.2,41.2,32z M32,37.8c3.2,0,5.8-2.6,5.8-5.8c0-3.2-2.6-5.8-5.8-5.8 c-3.2,0-5.8,2.6-5.8,5.8C26.2,35.2,28.8,37.8,32,37.8z M42.4,20.5h-3.5c-0.6,0-1.2,0.5-1.2,1.2v3.5c0,0.6,0.5,1.2,1.2,1.2h3.5 c0.6,0,1.2-0.5,1.2-1.2v-3.5C43.5,21,43,20.5,42.4,20.5z M0,0v64h64V0H0z M47,43.5c0,1.9-1.5,3.5-3.5,3.5H20.5 c-1.9,0-3.5-1.6-3.5-3.5V20.5c0-1.9,1.5-3.5,3.5-3.5h23.1c1.9,0,3.5,1.5,3.5,3.5V43.5z"></path></g></svg></div></a>
        <a target="_blank" href="https://www.facebook.com/yesatyale/" className="social-icon social-icon" aria-label="facebook" style={"display: inline-block, position: relative, overflow: hidden, vertical-align: middle, height: 30px, width: 30px,"}><div className="social-container" style={"position: absolute, top: 0px, left: 0px, width: 100%, height: 100%,"}><svg className="social-svg" viewBox="0 0 64 64" style={"border-top-left-radius: 50%, border-top-right-radius: 50%, border-bottom-right-radius: 50%, border-bottom-left-radius: 50%, position: absolute, top: 0px, left: 0px, width: 100%, height: 100%, fill-rule: evenodd,"}><g className="social-svg-background" style={"transition: fill 170ms ease-in-out, fill: transparent,"}><circle cx="32" cy="32" r="31"></circle></g><g className="social-svg-icon" style={"transition: fill 170ms ease-in-out, fill: transparent,"}><path d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"></path></g><g className="social-svg-mask" style={"transition: fill 170ms ease-in-out, fill: white,"}><path d="M0,0v64h64V0H0z M39.6,22l-2.8,0c-2.2,0-2.6,1.1-2.6,2.6V28h5.3l-0.7,5.3h-4.6V47h-5.5V33.3H24V28h4.6V24 c0-4.6,2.8-7,6.9-7c2,0,3.6,0.1,4.1,0.2V22z"></path></g></svg></div></a>
        <a target="_blank" href="https://twitter.com/yaleatyes" className="social-icon social-icon" aria-label="twitter" style={"display: inline-block, position: relative, overflow: hidden, vertical-align: middle, height: 30px, width: 30px,"}><div className="social-container" style={"position: absolute, top: 0px, left: 0px, width: 100%, height: 100%,"}><svg className="social-svg" viewBox="0 0 64 64" style={"border-top-left-radius: 50%, border-top-right-radius: 50%, border-bottom-right-radius: 50%, border-bottom-left-radius: 50%, position: absolute, top: 0px, left: 0px, width: 100%, height: 100%, fill-rule: evenodd,"}><g className="social-svg-background" style={"transition: fill 170ms ease-in-out, fill: transparent,"}><circle cx="32" cy="32" r="31"></circle></g><g className="social-svg-icon" style={"transition: fill 170ms ease-in-out, fill: transparent,"}><path d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"></path></g><g className="social-svg-mask" style={"transition: fill 170ms ease-in-out, fill: white,"}><path d="M0,0v64h64V0H0z M44.7,25.5c0,0.3,0,0.6,0,0.8C44.7,35,38.1,45,26.1,45c-3.7,0-7.2-1.1-10.1-2.9 c0.5,0.1,1,0.1,1.6,0.1c3.1,0,5.9-1,8.2-2.8c-2.9-0.1-5.3-2-6.1-4.6c0.4,0.1,0.8,0.1,1.2,0.1c0.6,0,1.2-0.1,1.7-0.2 c-3-0.6-5.3-3.3-5.3-6.4c0,0,0-0.1,0-0.1c0.9,0.5,1.9,0.8,3,0.8c-1.8-1.2-2.9-3.2-2.9-5.5c0-1.2,0.3-2.3,0.9-3.3 c3.2,4,8.1,6.6,13.5,6.9c-0.1-0.5-0.2-1-0.2-1.5c0-3.6,2.9-6.6,6.6-6.6c1.9,0,3.6,0.8,4.8,2.1c1.5-0.3,2.9-0.8,4.2-1.6 c-0.5,1.5-1.5,2.8-2.9,3.6c1.3-0.2,2.6-0.5,3.8-1C47.1,23.4,46,24.5,44.7,25.5z"></path></g></svg></div></a>
        <a target="_blank" href="https://www.linkedin.com/company/yale-entrepreneurial-society" className="social-icon social-icon" aria-label="linkedin" style={"display: inline-block, position: relative, overflow: hidden, vertical-align: middle, height: 30px, width: 30px,"}><div className="social-container" style={"position: absolute, top: 0px, left: 0px, width: 100%, height: 100%,"}><svg className="social-svg" viewBox="0 0 64 64" style={"border-top-left-radius: 50%, border-top-right-radius: 50%, border-bottom-right-radius: 50%, border-bottom-left-radius: 50%, position: absolute, top: 0px, left: 0px, width: 100%, height: 100%, fill-rule: evenodd,"}><g className="social-svg-background" style={"transition: fill 170ms ease-in-out, fill: transparent,"}><circle cx="32" cy="32" r="31"></circle></g><g className="social-svg-icon" style={"transition: fill 170ms ease-in-out, fill: transparent,"}><path d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"></path></g><g className="social-svg-mask" style={"transition: fill 170ms ease-in-out, fill: white,"}><path d="M0,0v64h64V0H0z M25.8,44h-5.4V26.6h5.4V44z M23.1,24.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1 c1.7,0,3.1,1.4,3.1,3.1C26.2,22.9,24.8,24.3,23.1,24.3z M46,44h-5.4v-8.4c0-2,0-4.6-2.8-4.6c-2.8,0-3.2,2.2-3.2,4.5V44h-5.4V26.6 h5.2V29h0.1c0.7-1.4,2.5-2.8,5.1-2.8c5.5,0,6.5,3.6,6.5,8.3V44z"></path></g></svg></div></a></div></div> */}
