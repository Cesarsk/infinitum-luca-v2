import "./footer.css";

export default function Footer() {
    return (
        <div className="Footer">
            <div className="sentence">
                <marquee behavior="scroll" direction="left">THE FIRST STEP IS TO ESTABLISH THAT SOMETHING IS POSSIBLE; THEN PROBABILITY WILL OCCUR</marquee>
            </div>
                <div className="social">
                    <div className="socialItem"><a href="https://www.linkedin.com/in/luca-cesarano-875034141/" class="linkFooter">LinkedIn</a></div>
                    <div className="socialItem"><a href="https://lucacesarano.medium.com" class="linkFooter">Medium</a></div>
                    <div className="socialItem"><a href="https://github.com/cesarsk" class="linkFooter">Github</a></div>
                    <div className="socialItem"><a href="mailto:lucacesarano1@gmail.com" class="linkFooter">Mail</a></div>
            </div>
        </div>
    );
}
