import { useNavigate } from "react-router-dom";

export default function AccoutPage() {
    const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/admin");
  };
    return (
        <div>
            <h1>AccoutPage</h1>
            <button onClick={handleOnClick}>Admin</button>
        </div>
    )
}