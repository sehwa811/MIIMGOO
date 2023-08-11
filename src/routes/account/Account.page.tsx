import { useNavigate } from "react-router-dom";
import LogoPart from "../detailpage/component/LogoPart";
import LabelComponent from "../../components/basics/label-box/Label.component";

export default function AccoutPage() {
    const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/admin");
  };
    return (
        <div>
            <LogoPart />
            <LabelComponent labelText="계정" />
            <button onClick={handleOnClick}>Admin</button>
        </div>
    )
}