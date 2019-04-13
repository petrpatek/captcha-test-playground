import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
  console.log("Captcha value:", value);
}

ReactDOM.render(
  <ReCAPTCHA sitekey={process.env.SITE_KEY} onChange={onChange} />,
  document.body
);
