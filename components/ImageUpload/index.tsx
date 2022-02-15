import { useState } from "react";
import { Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Flex, Center } from '@chakra-ui/react'

function getBase64(img: any, callback: any) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

const dummyRequest = ({ file, onSuccess }: { file: any; onSuccess: any }) => {
  setTimeout(() => {
    onSuccess("ok");
  }, 1000);
};

function beforeUpload(file: any) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

const ProfileUploader = () => {
  const [state, setState] = useState<any>({
    loading: false,
    imageUrl: null,
  });

  const handleChange = (info: any) => {
    if (info.file.status === "uploading") {
      setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl: any) => {
        alert(imageUrl);
        setState({
          imageUrl,
          loading: false,
        });
      });
    }
  };

  const { loading, imageUrl } = state;

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <Center bg='tomato' h='fit-content' w='100%' color='white' textAlign='center'>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={handleChange}
        // @ts-ignore
        customRequest={dummyRequest}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
        ) : (
          uploadButton
        )}
      </Upload>
      </Center>
  );
};

export default ProfileUploader;
