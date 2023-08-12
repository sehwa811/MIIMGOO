import UploadImage from "../../components/file-upload/UploadImage.component";
import LogoPart from "../detailpage/component/LogoPart";

export default function AdminPage() {
    return (
        <div>
            <LogoPart />
            <h1>관리자 페이지</h1><br></br>
            <UploadImage />
        </div>
    )
}