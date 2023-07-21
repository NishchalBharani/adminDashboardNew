import { Typography } from "antd";
import "./AppFooter.css"

function AppFooter() {
  return (
    <div className="AppFooter">
      <Typography.Link href="https://github.com/NishchalBharani" target={"_blank"}>GitHub</Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}>
        Privacy Policy
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}>
        Terms of Use
      </Typography.Link>
    </div>
  );
}
export default AppFooter;
