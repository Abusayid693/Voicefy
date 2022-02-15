import { message } from "antd";

interface IFile {
  lastModified: Number;
  name: string;
  size: number;
  type: string;
  uid: string;
  webkitRelativePath: string;
}

export const getBase64 = (img: any, callback: any) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

export const validateImage = (file: IFile) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

export const handleChange = (info: any, setState: any) => {
  if (info.file.status === "uploading") {
    setState({ loading: true });
    return;
  }
  if (info.file.status === "done") {
    getBase64(info.file.originFileObj, (imageUrl: BlobPropertyBag) => {
      setState({
        imageUrl,
        loading: false,
      });
    });
  }
};

export const uploadFile = ({
  file,
  onSuccess,
}: {
  file: any;
  onSuccess: any;
}) => {
  console.log("file : ", file);
  setTimeout(() => {
    onSuccess("ok");
  }, 1000);
};
