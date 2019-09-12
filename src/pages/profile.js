// https://creativemarket.com/bilmaw/275131-ResumeCV-Jamie
import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Header from '../components/Header';
import ProfileItem from '../components/ProfileItem';

const Container = styled.div``;

const SectionHeading = styled.h4.attrs({
  className: 'text-lg font-semibold uppercase tracking-wide mt-8',
})``;

const Profile = () => (
  <Layout>
    <Seo title="Profile" />
    <Container className="flex flex-col min-h-screen">
      <Header />
      <div className="container">
        <div className="flex flex-col items-center my-16">
          <h2 className="inline-flex text-4xl font-semibold p-4  border-2 border-solid border-gray-900">
            Parminder Singh Klair
          </h2>
          <h3 className="text-3xl p-2  mt-2">Full Stack Developer</h3>
          <img
            src="/images/me.jpg"
            alt="Parminder Klair"
            className="rounded-full w-48 h-48 mt-6"
          />
        </div>
        <div className="flex mb-4">
          <div className="w-1/2 border-r border-solid border-gray-400 pr-16 text-right">
            <SectionHeading>Experience</SectionHeading>
            <ProfileItem />
            <ProfileItem />
            <ProfileItem />
            <SectionHeading>About Me</SectionHeading>
            <p className="pt-6">
              I am Parminder Klair <br />
              an Full Stack Developer
              <br />
              from United Kindom & India
            </p>
          </div>
          <div className="w-1/2 pl-16">
            <SectionHeading>Education</SectionHeading>
            <ProfileItem />
            <ProfileItem />
            <SectionHeading>Skills</SectionHeading>
            <ul className="list-none pt-6">
              <li>ReactJs</li>
              <li>React Native</li>
              <li>NodeJs</li>
              <li>GraphQL</li>
            </ul>
            <SectionHeading>Contact</SectionHeading>
            <ul className="list-none pt-6">
              <li className="mb-1">t: 123123123</li>
              <li className="mb-1">e: a@a.com</li>
              <li className="mb-1">w: www.w.com</li>
            </ul>
            <ul className="list-none pt-4">
              <li className="mb-1">
                <i className="fab fa-twitter" />: twittier.com/pinku1
              </li>
              <li className="mb-1">
                <i className="fab fa-twitter" />: twittier.com/pinku1
              </li>
              <li className="mb-1">
                <i className="fab fa-twitter" />: twittier.com/pinku1
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </Layout>
);

export default Profile;
