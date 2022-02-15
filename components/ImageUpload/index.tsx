import { useState } from "react";
import { Upload } from "antd";
import { LoadingOutlined, UserOutlined } from "@ant-design/icons";
import { Center } from "@chakra-ui/react";
import {
  validateImage,
  handleChange,
  uploadFile,
} from "../../util/fileUpload.helpers";

const ProfileUploader = () => {
  const [state, setState] = useState<any>({
    loading: false,
    imageUrl: null,
  });

  const { loading, imageUrl } = state;

  const uploadButton = (
    <div>
      {loading ? (
        <LoadingOutlined />
      ) : (
        <UserOutlined style={{ fontSize: "220%" }} />
      )}
      <div style={{ marginTop: 8, fontWeight: 300 }}>Upload</div>
    </div>
  );

  return (
    <Center h="fit-content" w="100%" color="teal" textAlign="left">
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        beforeUpload={validateImage}
        onChange={(info) => handleChange(info, setState)}
        // @ts-ignore
        customRequest={uploadFile}
        style={{ borderRadius: "500px" }}
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
