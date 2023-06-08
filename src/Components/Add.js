import { Layout, Upload } from 'antd'
import React from 'react'
import {
    PlusOutlined,
  } from '@ant-design/icons';
  import Storage from './Storage';
// const { Header, Sider, Content ,} = Layout;

const Add = () => {
  return (
   <>
   <div className='container' style={{border:'1px solid black', borderRadius:'8%', backgroundColor:'gray' }}>
<div className='add ' style={{height:'200px', border:'1px solid black',width:'215px',borderRadius:'8%', margin:'20px', backgroundColor:"aqua"}}>
<div className='' >
   <Upload type='file' className='plus'><PlusOutlined width='6rem'/></Upload>
   <p>Add New Files</p>
</div>
</div>
<Storage/>

</div>

   </>
  )
}

export default Add
