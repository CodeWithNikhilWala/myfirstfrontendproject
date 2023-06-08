import React from 'react';
import { Avatar, Tooltip } from 'antd';

const Avater = () => {
  return (
    <>
      <Avatar.Group
        
        maxPopoverTrigger="click"
        size="large rounded"
        maxStyle={{
          color: '#f56a00',
          backgroundColor: '#fde3cf',
          cursor: 'pointer',
        }}
      >
        <Avatar className=' avater m-5' src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>

        <Tooltip title="Ant User" placement="top">

        </Tooltip>

      </Avatar.Group>
    </>
  )
}

export default Avater
