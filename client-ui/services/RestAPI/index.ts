import axios from "axios";

export const uploadFileToS3 = async (data:any) => {
  try {
    const res = await axios.post("http://localhost:4000/upload", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res);
    return res
  } catch (error) {}
};
