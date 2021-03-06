import React from "react";
import { Layout } from "../components/Layout";
import Seo from "../components/SEO";
import { checkDevice } from "../utils";
import TopBox from "../components/Employers/TopBox";
import Attract from "../assets/img_attract.svg";
import Retain from "../assets/img_retain.svg";
import Engage from "../assets/img_engage.svg";
import Health from "../assets/img_health.svg";
import Debit from "../assets/img_debit.svg";
import Analytics from "../assets/img_analytics.svg";
import { Breadcrumbs } from "../components/Layout";
const aboutus = () => {
  return (
    <Layout device={checkDevice}>
      <Seo title="Employers" />
      <Breadcrumbs
        rootLabel="Home"
        rootRoute="/"
        currentLabel="For Employers"
      />
      <div className="flex flex-col items-center justify-center bg-gray-lighter">
        <div className="container lg:mb-12 h-full">
          <TopBox />
        </div>
        <div className="md:px-4 px-3">
          <p className="lg:text-6xl text-4xl font-bold text-left md:text-center my-8 lg:leading-relaxed">
            Why incorporate Nine25’s Salary Streaming technology into your
            business?
          </p>
        </div>
        <div className="container grid gap-8 grid-cols-1 md:grid-cols-2 px-2">
          <div className="rounded-2xl shadow bg-white flex flex-col items-center justify-center p-4">
            <Attract />
            <div className="">
              <p className="text-2xl font-bold mb-4">Attract</p>
              <p className="text-xl mb-4 font-medium">
                Show the candidate market that you care.
              </p>
              <p className="mb-4">
                Top talent are actively seeking out companies that care about
                their financial wellbeing. An employer of choice places the
                mental and financial health of their people at the centre of
                their corporate strategy and identity. This is more important
                than ever, given that;
              </p>
              <p className="mb-4 pl-1">
                • 58% of Australian employees call out financial stress as the
                biggest issue in their lives.
              </p>
              <p className="mb-4 pl-1">
                • Gen Z and Millenials are choosing employers that will help
                them to avoid debt and grow their wealth.
              </p>
            </div>
          </div>
          <div className="rounded-2xl shadow bg-white flex flex-col items-center justify-start p-4">
            <Retain />
            <div className="">
              <p className="text-2xl font-bold mb-4">Retain</p>
              <p className="text-xl mb-4 font-medium">
                Replacing employees is expensive and time consuming.
              </p>
              <p className="mb-4">
                According to EY, 20% of employee turnover is attributable to
                financial stress.
              </p>
              <p className="mb-4">
                It’s expensive! Replacing a $60,000 position can cost your
                business $90,000 in recruitment costs and time.
              </p>
              <p className="mb-4">
                Nine25’s Salary Streaming technology will help to increase
                employee retention by an average of 30% and can help to reduce
                lost productivity.
              </p>
            </div>
          </div>

          <div className="p-4 bg-white flex md:flex-row flex-col-reverse items-center justify-between rounded-2xl shadow md:col-span-2 col-span-1">
            <div className="md:mr-8 md:w-1/2">
              <p className="text-2xl font-bold mb-4">Engage</p>
              <p className="text-xl mb-4 font-medium">
                Invest in a benefit program that will change lives.
              </p>
              <p className="mb-4">
                Nine25’s personalised analytics will lead to better decision
                making and budget allocation.
              </p>
              <p className="mb-4">
                Are you sure that investments being made, within your health and
                wellbeing programs, are having the maximum benefit to your team?
              </p>
              <p className="mb-4">
                84% of employees say they are embarrassed to ask for help with
                financial stress.
              </p>
              <p className="mb-4">
                Coming soon: Nine25 will be delivering insights that your
                business can leverage to inform better decision making.
              </p>
            </div>

            <div className="w-full my-4 md:w-1/2">
              <Engage />
            </div>
          </div>
        </div>

        <div className="w-full bg-white mt-12 pb-24 text-center">
          <p className="lg:text-6xl text-5xl font-bold text-center my-24">
            What we offer
          </p>
          <div className="w-full flex flex-col md:flex-row justify-around">
            <div className="flex flex-col items-center justify-center mb-8 max-w-xs mx-auto">
              <Health />
              <p className="font-bold text-xl lg:text-3xl mt-8">
                Financial health and responsible money management app.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mb-8 max-w-xs mx-auto">
              <Debit />
              <p className="font-bold text-xl lg:text-3xl mt-8">
                Real-time Salary Streaming and debit card.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center max-w-xs mx-auto">
            <Analytics />
            <p className="font-bold text-xl lg:text-3xl mt-8">
              Personalised analytics and reporting.
            </p>
          </div>
        </div>
        {/* <div className="container rounded-3xl bg-white shadow-sm p-12 my-12">
          <Form
            heading="Please, tell us what’s on your mind"
            pageTitle="Employers"
          />
        </div> */}
      </div>
    </Layout>
  );
};

export default aboutus;
