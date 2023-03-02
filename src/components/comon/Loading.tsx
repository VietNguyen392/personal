import React from 'react'
import { useIsFetching } from '@tanstack/react-query'
import { Loader } from '@mantine/core'
const Loading = () => {
    const isFetching = useIsFetching()
    return isFetching ?
        <div className='loading-page'>
            <Loader variant="dots" />
        </div>
        : null
}

export default Loading