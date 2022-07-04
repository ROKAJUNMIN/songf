import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import styled from 'styled-components'

const Stat = () => {
    const data = [{name: 'Page A', uv: 400, pv: 300, amt: 200}]

    return (
        <Container>
            <LineChart width={600} height={300} data={data} style={{
                color: 'white'
            }}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </Container>
        
    )
}

export default Stat

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`