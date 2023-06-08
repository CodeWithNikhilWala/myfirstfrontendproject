import { Card, Col, Row, Button, Upload } from 'antd';
import {
    StarOutlined,
    CameraOutlined,
    FileAddOutlined,
    VideoCameraAddOutlined,
    AudioOutlined,
    UploadOutlined,
    ShareAltOutlined,
    DotChartOutlined
} from '@ant-design/icons'
import Uploader from './Uploder';

const App = () => (
    <>

        <Row gutter={5}>
            <Col span={4}>
                <Card bordered={false} className='justify-content: space-between cardSize' style={{ backgroundColor: 'blue' }}>{<CameraOutlined />} <p className='para1'>Pictures</p>
                    <p className='para1'>480 files</p>
                </Card>
            </Col>
            <Col span={4}>
                <Card bordered={false} className="cardSize" style={{ backgroundColor: 'yellow' }}>
                    <FileAddOutlined className='icon' />
                    <p className='para1'>Documents </p>
                    <p className='para1'>190 Files</p>
                </Card>
            </Col>
            <Col span={4}>
                <Card bordered={false} className="cardSize" style={{ backgroundColor: 'gray' }}>
                    <VideoCameraAddOutlined />
                    <p className='para1'> Videos</p>
                    <p className='para1'>90 Files</p>
                </Card>
            </Col>
            <Col span={4}>
                <Card bordered={false} className="cardSize" style={{ backgroundColor: 'green' }}>
                    <AudioOutlined />
                    <p className='para1'>Audio</p>
                    <p className='para1'>80 files</p>
                </Card>
            </Col>
        </Row>
        <div>
            <h5 className='my-3'>Files</h5>
        </div>
        <Row gutter={15}>
            <Col span={4}>


                <Card bordered={false} className='justify-content: space-between cardSize' style={{ backgroundColor: 'blue' }}>{<CameraOutlined />} <p className='para1'>Work</p>
                    <p className='para1'>480 files</p>
                </Card>
            </Col>
            <Col span={4}>
                <Card bordered={false} className="cardSize" style={{ backgroundColor: 'yellow' }}>
                    <FileAddOutlined />
                    <p className='para1'>Personal </p>
                    <p className='para1'>190 Files</p>
                </Card>
            </Col>
            <Col span={4}>
                <Card bordered={false} className="cardSize" style={{ backgroundColor: 'gray' }}>
                    <VideoCameraAddOutlined />
                    <p className='para1'>School</p>
                    <p className='para1'>90 Files</p>
                </Card>
            </Col>
            <Col span={4}>
                <Card bordered={false} className="cardSize " style={{ backgroundColor: 'gray' }}>

                    <Upload className=''>
                        <p className='para1'>Deva</p>

                        <p className='para1'>Select Your File</p>
                    </Upload>
                </Card>

            </Col>
            <Col span={4}>
           
                <Uploader />
            </Col>
        </Row>
        <div>
            <h5 className='my-3'>Recent Files</h5>
        </div>
        <Card>
            <div class="d-flex justify-content-between">

                <p>img </p>
                <p>Png File</p>
                <p>5 mb</p>
                <ShareAltOutlined />
                <DotChartOutlined />
            </div>
        </Card>

        <Card className='mt-3'>
            <div className="d-flex justify-content-between">

                <p>img </p>
                <p>Png File</p>
                <p>5 mb</p>
                <ShareAltOutlined />
                <DotChartOutlined />
            </div>
        </Card>

        <Card className='mt-3'>
            <div className="d-flex justify-content-between ">

                <p>img </p>
                <p>Png File</p>
                <p>5 mb</p>
                <ShareAltOutlined />
                <DotChartOutlined />
            </div>
        </Card>

        <Card className='mt-3'>
            <div className="d-flex justify-content-between  ">
                <p>img </p>
                <p>Png File</p>
                <p>5 mb</p>
                <ShareAltOutlined />
                <DotChartOutlined />
            </div>
        </Card>






    </>
);
export default App;