import Section from '@/components/common/section';
import TimelineItem from '@/components/common/timelineItem';

const Experience = () => {
  return (
    <Section id="experience" title="Experience">
      <div className="relative w-100 m-8">
        <div className="border-r-2 border-gray-500 absolute h-full top-0" style={{ left: 15 }} />
        <ul className="list-none m-0 p-0">
          <TimelineItem extraTitle="Ovrsea" subTitle="October 2020 - Present" title="Full Stack Software Engineer">
            Working on web application that aim to automate the logistic and supply chain of companies around the world.
            Mainly, I implement features on the frontend and apply integration with the backend, test them then deploy
            in production following a CI/CD process.
          </TimelineItem>

          <TimelineItem extraTitle="Qognitiv" subTitle="September 2018 - May 2020" title="Fullstack Software Engineer">
            Working on a digital banking solution where my main tasks is Design the system architecture to fit the
            business needs, building microservices, test and deploy them in production. I often work on the frontend by
            doing integration with the backend services. Finally i'm the lead of team of many developers with various
            skills. I have to make sure we are moving forward with our tasks to avoid dateline exceed
          </TimelineItem>

          <TimelineItem extraTitle="Tootree" subTitle="May 2017 - August 2018" title="Fullstack Web Developer">
            I was mostly worked on Backend side by building the core features of a social network like friend requests,
            chats, messaging, posts, etc.. Often i woked on the frontend with Angular to integrate it with the backend.
            I have tested services, deployed them on a Virtual Private Server and after monitored them. I also worked on
            a realtime notification system.
          </TimelineItem>

          <TimelineItem
            extraTitle="Maillance"
            subTitle="September 2017 - September 2018"
            title="Remote Fullstack Web Developer"
          >
            My second experience where i worked with engineers around the world. We have worked on a web application who
            could allow user to forecast the production of the wells of petroleum. My main work was integrating the API
            built by Machine Learning Engineers; parsed the data and display them on a chart. I occasionally built some
            backend service to solve specific problems we have faced
          </TimelineItem>
        </ul>
      </div>
    </Section>
  );
};

export default Experience;
