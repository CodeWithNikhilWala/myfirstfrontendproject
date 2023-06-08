import { Upload, Button,  } from 'antd';
import React from 'react';
import Icon from '@ant-design/icons'

const Dev = () => {
  return (
<>
<div className='container  p-1 ' style={{textAlign:'center' ,  borderRadius:'6px' ,  }}>
<Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" directory >
        <Button>
          <Icon type="upload" /> Upload Directory
        </Button>
      </Upload>
      </div>
</>

   
      
      
    )
  
}

export default Dev