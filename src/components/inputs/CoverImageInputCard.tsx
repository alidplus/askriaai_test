import { InputProps } from "@/types";
import { CloseOutlined, UploadOutlined } from "@ant-design/icons"
import { Button, Card, Image, Space, Typography, Upload, UploadProps } from "antd"
import useToken from "antd/es/theme/useToken";

const { Dragger } = Upload;
const { Text, Title } = Typography;


function CoverImageInputCard(props: InputProps<string>) {
  const [_, token] = useToken()
  function handleChange (value: string) {
    console.log('-----', value);
    
    props.onChange?.(value)
  }

  const uploadProps: UploadProps = {
    name: 'coverImage',
    multiple: false,
    maxCount: 1,
    beforeUpload (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        if (typeof reader.result === 'string') {
          handleChange(reader.result)
        }
        
      };
      return false
    }
  }

  return (
    <Card title="Upload cover image" bordered={false} style={{ width: 600 }} headStyle={{ background: token.colorInfo }}>
      { props.value ? (
        <Space direction="vertical" size="small">
          <Image src={props.value} style={{ width: '100%' }} onError={() => handleChange('')}/>

          <Button
            onClick={() => handleChange('')}
            type="text"
            danger
            icon={<CloseOutlined />}
          >Remove image</Button>
        </Space>
      ) : (
        <Dragger {...uploadProps}>
          <Space direction="vertical">
            <Title level={1}>
              <UploadOutlined style={{ color: 'black '}} />
            </Title>
            <Text strong>Upload cover image</Text>
            <Text disabled>
              16:9 ratio is recommended. Max image size 1mb
            </Text>
          </Space>
        </Dragger>
      )}
      
    </Card>
  )
}

export default CoverImageInputCard