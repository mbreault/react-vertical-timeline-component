
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ReportProblemTwoToneIcon from '@mui/icons-material/ReportProblemTwoTone';
import TheftData from './TheftData';

const Timeline = () => {
    return (
<VerticalTimeline>
  {TheftData.events.map((event, index) => (
    <VerticalTimelineElement
      key={index}
      date={`${event.start_date.month}/${event.start_date.day}/${event.start_date.year}`}
      icon={<ReportProblemTwoToneIcon />}
      iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
    >
      <h3 className="vertical-timeline-element-title">{event.text.headline}</h3>
      <p>{event.text.text}</p>
    </VerticalTimelineElement>
  ))}
</VerticalTimeline>

    )
};

export default Timeline;