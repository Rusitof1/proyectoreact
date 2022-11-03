import "./Footer.css";

function Footer() {
  return (
    <div className="footer_container">
      <ul className="social-media">
        <li>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ecommerce-coder-tradegames.appspot.com/o/github-logo.png?alt=media&token=2a32efc7-ba40-4ae6-8b05-601a1e24bd88"
            onClick={() => (window.location = "https://github.com/Rusitof1")}
          ></img>
        </li>
      </ul>
      <p>2022 Copyright Ⓒ Ruso Developer</p>
    </div>
  );
}

export default Footer;
