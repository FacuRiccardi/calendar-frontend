import styled from "@emotion/styled"

function DayEvent({ init, end, title, description }) {
  return (
    <EventContainer>
      <PointContainer>
        <EventPoint />
      </PointContainer>
      <InfoContainer>
        <Time>{`${init} - ${end}`}</Time>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </InfoContainer>
    </EventContainer>
  )
}

const EventContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 12px;
`
const PointContainer = styled.div`
  width: 10%;
`

const EventPoint = styled.div`
  background-color: #3B82F6;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  margin-right: 8px;
  margin-top: 3px;
`

const InfoContainer = styled.div`
  color: gray;
  font-weight: 600;
  font-size: 16px;
  width: 90%;
`

const Time = styled.div`
`

const Title = styled.div`
  color: white;
`

const Description = styled.div`
  font-size: 14px;
  font-weight: 200;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export default DayEvent