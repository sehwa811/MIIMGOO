import UploadImage from "../../components/file-upload/UploadImage.component";
import LogoPart from "../../components/LogoPart";
import { BigWrapper } from "../Homepage/Home.page";
import styled from "styled-components";

const AdminBigWrapper = styled(BigWrapper)`
  height: 100vh;
`;

export default function AdminPage() {
  return (
    <AdminBigWrapper>
      <LogoPart />
      <br></br>
      <UploadImage />
    </AdminBigWrapper>
  );
}
