import React from "react";

function Footer(props) {
    return (
        <footer id="footer" className={props.color}>
            <div>
                <h4>Email</h4>
                <a href="#">nexus486@naver.com</a>
            </div>
            <div>
                <h4>KaKao</h4>
                <a href="#">nexus486</a>
            </div>
            <div>
                <h4>social</h4>
                <ul>
                    <li><a href="/">naver</a></li>
                    <li><a href="/">google</a></li>
                    <li><a href="/">facebook</a></li>
                    <li><a href="/">instargram</a></li>
                    <li><a href="/">github</a></li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer;