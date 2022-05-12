import ProfileUploaderUI from './indexUI';
import {uploadFileToS3} from '../../services/RestAPI/index';

const ProfileUploader = () => {
  const uploadFile = async ({file, onSuccess}: {file: any; onSuccess: any}) => {
    const formData = new FormData();
    formData.append('file', file);
    await uploadFileToS3(formData);
    onSuccess('ok');
  };

  return <ProfileUploaderUI uploadFile={uploadFile} />;
};

export default ProfileUploader;
