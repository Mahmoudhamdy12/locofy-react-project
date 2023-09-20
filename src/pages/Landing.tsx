import { FunctionComponent } from "react";

const Landing: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[2050px] overflow-hidden flex flex-col py-10 px-[120px] box-border items-center justify-center gap-[130px] text-center text-base text-gray font-poppins">
      <div className="w-[1272px] h-[666px] overflow-hidden shrink-0 flex flex-col items-center justify-center gap-[100px]">
        <div className="w-[1272px] h-12 flex flex-row items-center justify-start gap-[268px]">
          <div className="w-[151px] h-[42px] flex flex-row items-center justify-start gap-[12px] text-left text-[28px]">
            <img className="relative w-12 h-[34px]" alt="" src="/group-2.svg" />
            <div className="relative font-semibold">Payna</div>
          </div>
          <div className="w-[435px] h-6 flex flex-row items-center justify-start gap-[60px]">
            <div className="relative font-semibold">Home</div>
            <div className="relative">Features</div>
            <div className="relative">Showcase</div>
            <div className="relative">Pricing</div>
          </div>
          <div className="rounded-31xl bg-ghostwhite w-[150px] h-12 flex flex-col items-center justify-center">
            <div className="relative inline-block w-[150px]">Sign In</div>
          </div>
        </div>
        <div className="w-[1212px] h-[518px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[70px] text-left text-[55px] text-black">
          <div className="w-[1202px] h-[400px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[75px] ml-2.5">
            <div className="w-[442px] h-[328px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[30px]">
              <div className="w-[442px] h-[250px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[20px]">
                <b className="relative">
                  <p className="m-0">Manage Payroll</p>
                  <p className="m-0">Like an Expert</p>
                </b>
                <div className="relative text-base leading-[32px] text-dimgray">
                  <p className="m-0">
                    Payna is helping you to setting up the payroll without
                  </p>
                  <p className="m-0">
                    required any finance skills or knowledge before
                  </p>
                </div>
              </div>
              <div className="rounded-31xl bg-royalblue w-[180px] h-12 flex flex-col items-center justify-center text-center text-base text-white">
                <div className="relative font-semibold inline-block w-[180px]">
                  Get Started
                </div>
              </div>
            </div>
            <div className="w-[685px] h-[400px] overflow-hidden shrink-0 flex flex-row items-start justify-start text-base text-gray">
              <div className="rounded-2xl bg-white shadow-[-7px_9px_18px_rgba(0,_0,_0,_0.05)] w-72 h-[155px] flex flex-col py-2.5 px-[13px] box-border items-start justify-start gap-[15px] mt-[133px]">
                <div className="w-[163px] h-[47px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[12px]">
                  <img
                    className="relative w-10 h-10"
                    alt=""
                    src="/group-5.svg"
                  />
                  <div className="w-[111px] h-[47px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[2px]">
                    <div className="relative font-medium">Analytics</div>
                    <div className="relative text-sm font-light text-dimgray">
                      Real time report
                    </div>
                  </div>
                </div>
                <div className="w-[181px] h-[63px] flex flex-row items-end justify-start gap-[9px]">
                  <div className="relative rounded-29xl bg-aliceblue w-2.5 h-[37px]" />
                  <div className="relative rounded-29xl bg-aliceblue w-2.5 h-[22px]" />
                  <div className="relative rounded-29xl bg-aliceblue w-2.5 h-[31px]" />
                  <div className="relative rounded-29xl bg-aliceblue w-2.5 h-4" />
                  <div className="relative rounded-29xl bg-aliceblue w-2.5 h-6" />
                  <div className="relative rounded-29xl bg-aliceblue w-2.5 h-[49px]" />
                  <div className="relative rounded-29xl bg-aliceblue w-2.5 h-[39px]" />
                  <div className="relative rounded-29xl bg-tomato w-2.5 h-[29px]" />
                  <div className="relative rounded-29xl bg-tomato w-2.5 h-[49px]" />
                  <div className="relative rounded-29xl bg-royalblue w-2.5 h-[63px]" />
                </div>
              </div>
              <div className="w-[580px] h-[400px] overflow-hidden shrink-0 flex flex-row items-start justify-start ml-[-108px]">
                <img
                  className="relative w-[540px] h-[400px] object-cover"
                  alt=""
                  src="/group-4@2x.png"
                />
                <div className="rounded-2xl bg-white shadow-[7px_9px_18px_rgba(0,_0,_0,_0.05)] w-[119px] h-[66px] flex flex-row py-2.5 px-[13px] box-border items-center justify-start gap-[12px] mt-[53px] ml-[-173px]">
                  <img
                    className="relative w-10 h-10"
                    alt=""
                    src="/group-51.svg"
                  />
                  <div className="w-[116px] h-[47px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[2px]">
                    <div className="relative font-medium">Bulk Export</div>
                    <div className="relative text-sm font-light text-dimgray">
                      Work faster 200%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1162.73px] h-12 flex flex-row items-center justify-start gap-[288px] mr-[29px] text-base text-gray">
            <div className="relative font-semibold">
              <p className="m-0">Trusted by</p>
              <p className="m-0">Global Companies</p>
            </div>
            <img
              className="relative w-[723.73px] h-[30px]"
              alt=""
              src="/group-14.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-[1136px] h-[1090px] overflow-hidden shrink-0 flex flex-col items-center justify-center gap-[70px] text-tomato">
        <div className="w-[386px] h-[168px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[20px]">
          <div className="w-[326px] h-[84px] overflow-hidden shrink-0 flex flex-col items-center justify-center gap-[6px]">
            <b className="inline-block h-6 ml-px">WORK BETTER</b>
            <b className="text-17xl inline-block text-black h-[54px] ml-px">
              For Your Business
            </b>
          </div>
          <div className="leading-[32px] text-dimgray inline-block h-16 ml-px">
            <p className="m-0">We did research what your company needs and</p>
            <p className="m-0">
              here we are providing all of them just for you
            </p>
          </div>
        </div>
        <div className="w-[1136px] h-[852px] overflow-hidden shrink-0 flex flex-col items-center justify-end gap-[130px] text-left text-xl text-gray">
          <div className="w-[1106px] h-[272px] overflow-hidden shrink-0 flex flex-col items-start justify-end gap-[60px]">
            <div className="w-[1072px] h-[106px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[93px] mr-8">
              <div className="w-[300px] h-[106px] flex flex-row items-start justify-start gap-[24px]">
                <img
                  className="relative w-[60px] h-[60px]"
                  alt=""
                  src="/group-21.svg"
                />
                <div className="w-[216px] h-[106px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative font-semibold">Share Insights</div>
                  <div className="relative text-base leading-[32px] text-dimgray">
                    <p className="m-0">Working together with your</p>
                    <p className="m-0">team to make decisions</p>
                  </div>
                </div>
              </div>
              <div className="w-[310px] h-[106px] flex flex-row items-start justify-start gap-[24px]">
                <img
                  className="relative w-[60px] h-[60px]"
                  alt=""
                  src="/group-17.svg"
                />
                <div className="w-[226px] h-[106px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative font-semibold">Track Leads</div>
                  <div className="relative text-base leading-[32px] text-dimgray">
                    <p className="m-0">See where your money goes</p>
                    <p className="m-0">and comes in business</p>
                  </div>
                </div>
              </div>
              <div className="w-[276px] h-[106px] flex flex-row items-start justify-start gap-[24px]">
                <img
                  className="relative w-[60px] h-[60px]"
                  alt=""
                  src="/group-19.svg"
                />
                <div className="w-48 h-[106px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative font-semibold">Offline Mode</div>
                  <div className="relative text-base leading-[32px] text-dimgray">
                    <p className="m-0">Use the feature while off</p>
                    <p className="m-0">from internet? sure can</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1105px] h-[106px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[96px] ml-px">
              <div className="w-[700px] h-[106px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[117px]">
                <div className="w-[276px] h-[106px] flex flex-row items-start justify-start gap-[24px]">
                  <img
                    className="relative w-[60px] h-[60px]"
                    alt=""
                    src="/group-211.svg"
                  />
                  <div className="w-48 h-[106px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[12px]">
                    <div className="relative font-semibold">Kanban Mode</div>
                    <div className="relative text-base leading-[32px] text-dimgray">
                      <p className="m-0">Organize the report that</p>
                      <p className="m-0">easy to be understand</p>
                    </div>
                  </div>
                </div>
                <div className="w-[307px] h-[106px] flex flex-row items-start justify-start gap-[24px]">
                  <img
                    className="relative w-[60px] h-[60px]"
                    alt=""
                    src="/group-171.svg"
                  />
                  <div className="w-[223px] h-[106px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[12px]">
                    <div className="relative font-semibold">Reward System</div>
                    <div className="relative text-base leading-[32px] text-dimgray">
                      <p className="m-0">Motivate your team working</p>
                      <p className="m-0">harder and receive a gift</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[309px] h-[106px] flex flex-row items-start justify-start gap-[24px]">
                <img
                  className="relative w-[60px] h-[60px]"
                  alt=""
                  src="/group-191.svg"
                />
                <div className="w-[225px] h-[106px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative font-semibold">189 Country</div>
                  <div className="relative text-base leading-[32px] text-dimgray">
                    <p className="m-0">Working together worldwide</p>
                    <p className="m-0">people from anywhere</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1135px] h-[450px] overflow-hidden shrink-0 flex flex-row items-center justify-end gap-[70px] ml-px text-base text-tomato">
            <img
              className="relative w-[635.04px] h-[450px] object-cover"
              alt=""
              src="/group-26@2x.png"
            />
            <div className="w-[429px] h-64 overflow-hidden shrink-0 flex flex-col items-center justify-center gap-[20px]">
              <div className="w-[422px] h-[84px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[6px]">
                <b className="relative">SAVE MORE TIME</b>
                <b className="relative text-17xl text-black">
                  And Boost Productivity
                </b>
              </div>
              <div className="w-[429px] h-[152px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[40px] text-dimgray">
                <div className="relative leading-[32px]">
                  <p className="m-0">
                    Your employees can bring any success into your
                  </p>
                  <p className="m-0">
                    business, so we need to take care of them
                  </p>
                </div>
                <div className="w-[429px] h-12 overflow-hidden shrink-0 flex flex-row items-center justify-start">
                  <div className="rounded-31xl bg-ghostwhite w-[299px] h-12 flex flex-col py-0 px-6 box-border items-start justify-center">
                    <div className="relative inline-block w-[180px]">
                      Email Address
                    </div>
                  </div>
                  <div className="rounded-31xl bg-royalblue w-[180px] h-12 flex flex-col items-center justify-center ml-[-50px] text-center text-white">
                    <div className="relative font-semibold inline-block w-[180px]">
                      Get Started
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
