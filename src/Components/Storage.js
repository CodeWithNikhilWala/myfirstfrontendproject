import React from 'react'
import {

    PlusOutlined,
} from '@ant-design/icons';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Divider, Tooltip, Upload } from 'antd';
import Dev from './Dev';
const Storage = () => {
    return (
        <>

            <div className='container' style={{ marginBottom: "20px",  }}>
                <div className='store'>
                    <div className='stext'>
                        <p className='p-2'>Your Storage</p>
                        <p className='p-2'>25% Left</p>

                    </div>

                    <p className='p-2'>75 Gb are 100 Gb is used </p>
                    <input type='range' className='s'></input>
                    <p className='p-2'>You Shared Folders<span ></span></p>
                    <div className='d-flex justify-content-between p-2 m-1' style={{backgroundColor:'blue', borderRadius:'6px'}}>
                        <div><p>Key Notes Files</p></div>
                        <div>
                            <Avatar.Group>

                                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                <a href="https://ant.design">
                                    <Avatar
                                        style={{
                                            backgroundColor: '#f56a00',

                                        }}
                                    >
                                        K
                                    </Avatar>
                                </a>
                                <Tooltip title="Ant User" placement="top">
                                    <Avatar
                                        style={{
                                            backgroundColor: '#87d068',
                                        }}
                                        icon={<UserOutlined />}
                                    />
                                </Tooltip>



                            </Avatar.Group>

                        </div>
                    </div>

                    <div className='d-flex justify-content-between p-2 m-1' style={{backgroundColor:'purple',borderRadius:'6px'}}>
                        <div><p>Vacation Photos</p></div>
                        <div>
                            <Avatar.Group>

                                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                <a href="https://ant.design">
                                    <Avatar
                                        style={{
                                            backgroundColor: '#f56a00',

                                        }}
                                    >
                                        K
                                    </Avatar>
                                </a>
                                <Tooltip title="Ant User" placement="top">
                                    <Avatar
                                        style={{
                                            backgroundColor: '#87d068',
                                        }}
                                        icon={<UserOutlined />}
                                    />
                                </Tooltip>



                            </Avatar.Group>

                        </div>
                    </div>

                    <div className='d-flex justify-content-between p-2 m-1' style={{backgroundColor:'royalblue',borderRadius:'6px'}}>
                        <div><p>Project Reports</p></div>
                        <div>
                            <Avatar.Group>

                                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                <a href="https://ant.design">
                                    <Avatar
                                        style={{
                                            backgroundColor: '#f56a00',

                                        }}
                                    >
                                        K
                                    </Avatar>
                                </a>
                                <Tooltip title="Ant User" placement="top">
                                    <Avatar
                                        style={{
                                            backgroundColor: '#87d068',
                                        }}
                                        icon={<UserOutlined />}
                                    />
                                </Tooltip>



                            </Avatar.Group>
                            
                        </div>
                        
                    </div>


                       
                    <Dev/>

                </div>

            </div>





        </>
    )
}

export default Storage
