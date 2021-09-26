import {Skeleton, Upload, Button as Btn} from 'antd'
import Image from 'next/image'
import { UploadOutlined, CloseOutlined  } from '@ant-design/icons';
import styles from './RegisterForm.module.css'

const Step2 = ({previewImage, selectedImage, handler }) => (
    <div className={styles.step}>
                    <div className={styles.imagePreview}>
                        {previewImage.length > 0 && <Image src={previewImage} alt="" layout="fill" />}
                        <Skeleton.Image />
                    </div>
                    <br />
                    <Upload onChange={(e) => handler(e)} multiple={false} fileList={selectedImage} >
                        <Btn icon={<UploadOutlined />}>Carregar nova imagem</Btn>
                    </Upload>
                </div>
)

export default Step2