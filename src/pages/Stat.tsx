import { RadarChart, Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import styled from 'styled-components'
import { toggleAtom } from '../atom';
import Toggle from '../components/organisms/Toggle';
import { favoriteData, feelingData } from '../data/chart'
import { useAtom } from 'jotai'
const Stat = () => {
    const [active, setActive] = useAtom(toggleAtom)
    return (
        <Container>
          <div style={{
            width: '80%',
            display: 'flex'
          }}>
            <Toggle/>
          </div>
          <ChartWrapper>
            <ResponsiveContainer>
            <RadarChart outerRadius={90} width={730} height={250} data={active ? feelingData : favoriteData} >
              <PolarGrid />
            <PolarAngleAxis dataKey={active ? "feeling" : "favorite" } tick={{ fill: 'white'}}/>
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar name="Junmin" dataKey="A" stroke="#ffffff" fill="#ffffff" fillOpacity={0.6} />
              <Legend />
            </RadarChart>
              </ResponsiveContainer>
          </ChartWrapper>
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

const ChartWrapper = styled.div`
  width: 80%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`