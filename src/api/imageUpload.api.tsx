import { instance } from "./instance";
import axios from "axios";


/* export const postFileName = (imageTitle: string) =>
  instance.post("memes/uploadURL/", {
    filename: imageTitle,
  }).then((res)=> res.data)
 */


export const uploadToS3 = async (
  imageTitle: string,
  image: any,
  inputTitle: string,
  tags: string[]
) => {

  //2
  const postTheMeme = async (URL: string, keyValue: string) =>
    instance.post(
      "memes/",
      {
        title: inputTitle,
        meme_url: `${URL}/${keyValue}`,
        tags: tags,
      }
    );

  //1
  instance
    .post("memes/uploadURL/", {
      filename: imageTitle,
    })
    .then(async (res) => {
      const formData = new FormData();
      const keyValue = res.data.fields.key;

      if (image !== null) {
        Object.keys(res.data.fields).forEach((key) => {
          formData.append(key, res.data.fields[key]);
        });
        formData.append("file", image);
      }
      
      const uploadRes = await axios.post(res.data.url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (uploadRes.status === 204) {
        postTheMeme(res.data.url, keyValue);
      }
    });
};
