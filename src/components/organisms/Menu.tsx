import FlexBox from '../atom/FlexBox'
import Button from '../atom/Button'
import { Github } from '@styled-icons/feather/Github'
import { Tinyletter } from '@styled-icons/simple-icons/Tinyletter'
import { Notebook } from '@styled-icons/fluentui-system-regular/Notebook'

const Menu = () => {
    return (
   
                <FlexBox flexDirection="horizontal" style={{
                width: '80%',
                minHeight: '200px',
                maxHeight: '400px',
                justifyContent: 'center'
            }}>
                <Button onClick={() => {
                    window.open('https://github.com/junmin-Chang')
                }} >
                    <Github color="white" size={50}/>
                    Github
                </Button>
                <Button onClick={() => {
                    window.open("https://ddanggae-junmin.vercel.app/")
                }} >
                    <Tinyletter color="white" size={50}/>
                    위문 편지
                </Button>
                <Button onClick={() => {
                    window.open("https://z00mni.com")
                }} >
                    <Notebook color="white" size={50}/>
                    Blog
                </Button>
            </FlexBox>
   
       
    )
}

export default Menu