import axios from "axios";
import { API_HOST } from "../../utils/API";


export const uploadS3 = async(imageTitle:string, image:any, inputTitle:string, tags:string[]) => {

    //2
    const postTheMeme = async (URL:string) => {
        const res = await axios({
          baseURL: API_HOST,
          url: "/api/memes/",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          data: {
            title: inputTitle,
            meme_url: URL,
            tags: tags,
          },
        });
        console.log(res.data);
      };

    //1
    axios({
      baseURL: API_HOST,
      url: "/api/memes/uploadURL/",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: {
        filename: imageTitle,
      },
    }).then(async (res) => {
      const formData = new FormData();
      console.log(res.data)
      if (image !== null) {
        Object.keys(res.data.fields).forEach((key) => {
          formData.append(key, res.data.fields[key]);
        });
        formData.append("file", image);
      }
      console.log(111111111)

      //403 에러나는 부분
      const uploadRes = await axios.post(res.data.url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(uploadRes.status);
  
      if (uploadRes.status === 204) {
        console.log(2222222222)
        postTheMeme(res.data.url);
      }
    });
  }