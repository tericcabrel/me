import { PropsWithChildren, ReactNode } from 'react';

import Section from '@/components/common/section';
import TimelineItem from '@/components/common/timelineItem';

const Ul = ({ children }: PropsWithChildren<ReactNode>) => <ul className="list-disc pl-5 mt-3">{children}</ul>;
const Li = ({ children }: PropsWithChildren<ReactNode>) => <li className="mb-2">{children}</li>;

const Experience = () => {
  return (
    <Section id="experience" title="Experience">
      <div className="experience relative w-100 m-8">
        <div className="timeline-line border-r-2 border-gray-500 absolute h-full top-0" />
        <ul className="list-none m-0 p-0">
          <TimelineItem extraTitle="Ovrsea" subTitle="October 2020 - Present" title="Full Stack Software Engineer">
            Working on web application that aim to automate the logistic and supply chain of companies around the world.
            <Ul>
              <Li>Design and maintain web application on backend and frontend.</Li>
              <Li>Propose new solutions and implement them.</Li>
              <Li>Implement features with best practises of software engineering.</Li>
              <Li>Collaborate with other engineers in order to deliver quality features.</Li>
            </Ul>
          </TimelineItem>

          <TimelineItem extraTitle="Qognitiv" subTitle="September 2018 - May 2020" title="Fullstack Software Engineer">
            Worked on a digital banking solution where my tasks was design the system architecture and manage team.
            <Ul>
              <Li>
                Code and maintain micro services orchestrator, bank accounts management and finally the one for data
                persistence in the system.
              </Li>
              <Li>Coding with Electron and React.js a desktop application for Bank account administration space.</Li>
              <Li>
                Coding 2 JavaScript libraries respectively for file upload through socket on React Native and messages
                encryption with AES and RSA.
              </Li>
              <Li>Define workflow for CI/CD, Code Review and units/integrations tests for backend services.</Li>
              <Li>
                Manage a development team of 10 persons (Devops, IOS & Android Developer / Backend / Frontend / Web
                Designer, Scrum Master).
              </Li>
            </Ul>
          </TimelineItem>

          <TimelineItem extraTitle="Tootree" subTitle="May 2017 - August 2018" title="Fullstack Web Developer">
            I worked mostly on Backend side of an educative social network.
            <Ul>
              <Li>
                Modeling application systems according to business needs given to us (UML Modeling and Database Schema).
              </Li>
              <Li>
                Build the backend core features like Friend requests, posts, comments, chats, homework management,
                etc...
              </Li>
              <Li>Deploy the services in production on a server and monitor them.</Li>
            </Ul>
          </TimelineItem>

          <TimelineItem
            extraTitle="Maillance"
            subTitle="September 2017 - September 2018"
            title="Remote Fullstack Web Developer"
          >
            Use of Machine Learning to predict future production from oil wells. My main work was integrating the API
            built by Machine Learning Engineers
            <Ul>
              <Li>Collaboration with the ML engineers in USA to integrate their backend with the Frontend.</Li>
              <Li>Construction of visualization graphs from data received from the backend.</Li>
              <Li>Optimization of the socket communication to avoid sending messages to unwanted users.</Li>
              <Li>Code a daemon for checking server resources usage in order to allow or deny a new processing.</Li>
            </Ul>
          </TimelineItem>
        </ul>
      </div>
    </Section>
  );
};

export default Experience;
