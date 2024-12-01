import React from 'react'
import StoryViewer from '../../Components/StoryComponents/StoryViewer'
import { Image } from '@chakra-ui/react'

const Story = () => {

    const story=[
        {
            image:"https://cdn.pixabay.com/photo/2022/01/29/09/01/bird-6976834_640.jpg"
        },{
            image:"https://cdn.pixabay.com/photo/2024/04/12/15/46/beautiful-8692180_640.png"
        },{
            image:"https://cdn.pixabay.com/photo/2024/04/04/12/26/ai-generated-8675021_640.png"
        },{
            image:"https://cdn.pixabay.com/photo/2024/01/24/15/10/ai-generated-8529788_640.jpg"
        },{
            image:"https://cdn.pixabay.com/photo/2023/09/17/22/25/witch-8259351_640.jpg"
        }
    ]
  return (
    <div>
        <StoryViewer stories={story}/>
    </div>
  )
}

export default Story