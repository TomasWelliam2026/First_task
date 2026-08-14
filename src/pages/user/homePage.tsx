import { useEffect } from "react";
import { Img1, Img2, section2Img1, section2Img2, section2Img3, section2Img4, section2Img5, section2Img6, section2Img7, section2Img8, section2Img9, section2Img10, section2Img11, section2Img12, section2Img13, section2Img14, section2Img15 } from "../../assets/img";
import { Link } from "react-router";

const HomePage = () => {

    useEffect(() => {
    },[]) ;

    return (
        <>
            <div className='w-full'>
                <section className="w-[470px] sm:w-[940px] md:w-[1440px] h-[170px] sm:h-[340px] md:h-[680px] pt-[36px] sm:pt-[72px] md:pt-[144px] pl-[15px] sm:pl-[31px] md:pl-[62px] pr-[11px] sm:pr-[23px] md:pr-[46px] top-[5px] sm:top-[10px] md:top-[20px] flex mx-auto justify-between ">
                    <div className="w-[144.25px] sm:w-[288.5px] md:w-[577.78px] mr-[8px] sm:mr-[16px] md:mr-[32px]"> 
                        <div className="w-full flex flex-col mb-[8px] sm:mb-[16px] md:mb-[32px]">
                            <h1 className="text-[16px] sm:text-[32px] md:text-[64px] leading-[16px] sm:leading-[32px] md:leading-[64px] tracking-[3px]">Know what’s happening with <br/>revenue.</h1>
                            <h1 className="text-[16px] sm:text-[32px] md:text-[64px] leading-[16px] sm:leading-[32px] md:leading-[64px] text-gray-400 mb-[8px]sm:mb-[16px] md:mb-[32px]">Before it happens.</h1>
                            <p className="text-[5px] sm:text-[9px] md:text-[18px] leading-[8px] sm:leading-[16px] md:leading-[32px]">Riley continuously detects churn risk, forecast changes, and expansion opportunities across your GTM signals, before they appear in dashboards.</p>
                        </div>
                        <div className="w-[90px] sm:w-[181px] md:w-[362px] h-[26px] sm:h-[52px] md:h-[104px] flex flex-col justify-between">
                            <Link className="text-[4px] sm:text-[8px] md:text-[16px] leading-[6px] sm:leading-[12px] md:leading-[24px] px-[8px] sm:px-[16px] md:px-[32px] py-[3px] sm:py-[6px] md:py-[12px] w-full cursor-pointer bg-gray-800 hover:bg-gray-600 rounded-lg text-white  text-center "
                                to={"https://app.askriley.io/signup"}
                            >
                                Start Trial
                            </Link>
                            <Link className="text-[4px] sm:text-[8px] md:text-[16px] px-[8px] sm:px-[16px] md:px-[32px] py-[3px] sm:py-[6px] md:py-[12px] w-full cursor-pointer text-gray-800 text-center hover:text-gray-900"
                                to={"https://calendly.com/arlene-rangel-askriley/30min"}
                            >
                                See how it works
                            </Link>
                        </div>
                    </div>
                    <div className="w-[180px] sm:w-[361px] md:w-[722.22px] h-[125px] sm:h-[250px] md:h-[500px] flex relative"> 
                        <div className="w-full h-[115px] sm:h-[236px] md:h-[471.23px] absolute z-10 top-[4px] sm:top-[7px] md:top-[14px]">
                            <img className="w-full h-[115px] sm:h-[236px] md:h-[471.23px] flex rounded-sm" src={Img1} alt="jpg1"/>
                        </div>
                        <div className="w-[73px] sm:w-[146px] md:w-[292.98px] h-[135px] sm:h-[270px] md:h-[475px] absolute z-10 right-0 top-[4px] sm:top-[7px] md:top-[14px]">
                            <img className='w-full h-full ml-[5px] sm:ml-[8px] md:ml-[12px]' src={Img2} alt="jpg2"/>
                        </div>
                    </div>
                </section>
                <section className="w-full h-[252px] flex flex-col justify-between py-[80px]">
                    <div className="w-full flex flex-col text-center"> 
                        <p className="text-[12px] font-bold tracking-[0px] text-gray-500">TRUSTED  BY HIGH - PERFORMING REVENUE TEAMS</p>
                    </div>
                    <div className='w-full flex justify-center'>
                        <div className="w-[949px] h-[40px] flex relative justify-between items-center"> 
                            <img className="w-[81px] h-[40px] mx-[12px]" src={section2Img1} alt="jpg1"/>
                            <img className="w-[40px] h-[40px] mx-[12px]" src={section2Img2} alt="jpg2"/>
                            <img className="w-[116px] h-[26px] mx-[12px]" src={section2Img3} alt="jpg3"/>
                            <img className="w-[90px] h-[27px] mx-[12px]" src={section2Img4} alt="jpg4"/>
                            <img className="w-[102px] h-[27px] mx-[12px]" src={section2Img5} alt="jpg5"/>
                        </div>
                    </div>
                </section>
                <section className="w-full flex flex-col">
                    <div className="w-[1100px] flex flex-col text-center mx-auto"> 
                        <p className="text-[48px] mt-[80px] mb-[32px]">Stop Finding Revenue Risk After It’s Too Late</p>
                        <p className="w-[800px] mx-auto text-[18px] leading-[32px]  text-gray-500 mb-[160px]">Riley continuously detects churn risk, forecast changes, and expansion opportunities across <br/>your GTM signals, before they appear in dashboards.</p>
                        <div className="w-full flex justify-center text-center mb-[160px]">
                            <div className="w-full flex justify-between">
                                <div className="flex flex-col justify-center w-[446px] h-full">
                                    <p className="text-[40px] leading-[48px] mb-[24px] text-left">From fragmented data to a single operating view</p>
                                    <p className="text-[16px] leading-[28px] text-gray-500 text-left">Customer, product, and revenue signals are continuously reconciled into one trusted business model, so every team works from the same reality</p>
                                </div>
                                <img className='w-[550px] h-full mx-[12px]' src={section2Img6} alt="jpg6"/>
                            </div> 
                        </div>
                        <div className="w-full flex justify-center text-center mb-[160px]">
                            <div className="w-full flex justify-between">
                                <div className="flex flex-col justify-center w-[446px] h-full">
                                    <p className="text-[40px] leading-[48px] mb-[24px] text-left">Revenue risk identified early</p>
                                    <p className="text-[16px] leading-[28px] text-gray-500 text-left">Churn, renewal, and expansion signals surface months in advance, so teams know which customers to save, grow, or ignore before revenue decisions are forced</p>
                                </div>
                                <img className='w-[550px] h-full mx-[12px]' src={section2Img7} alt="jpg7"/>
                            </div> 
                        </div>
                        <div className="w-full flex justify-center text-center mb-[160px]">
                            <div className="w-full flex justify-between">
                                <div className="flex flex-col justify-center w-[446px] h-full">
                                    <p className="text-[40px] leading-[48px] mb-[24px] text-left">Defensible revenue forecasts</p>
                                    <p className="text-[16px] leading-[28px] text-gray-500 text-left">Territory plans, pipeline coverage, renewal risk, and NRR projections are built on reconciled revenue data so the forecast holds up in board review, not just in internal meetings</p>
                                </div>
                                <img className='w-[550px] h-full mx-[12px]' src={section2Img8} alt="jpg8"/>
                            </div> 
                        </div>
                        <div className="w-full flex justify-center text-center mb-[160px]">
                            <div className="w-full flex justify-between">
                                <div className="flex flex-col justify-center w-[446px] h-full">
                                    <p className="text-[40px] leading-[48px] mb-[24px] text-left">Revenue intervention reminders</p>
                                    <p className="w-[440px] text-[16px] leading-[28px] text-gray-500 text-left">The right teams receive prioritized, decision-ready insights at the right moment, so analysis turns into action, not dashboards</p>
                                </div>
                                <img className='w-[550px] h-full mx-[12px]' src={section2Img9} alt="jpg9"/>
                            </div> 
                        </div>
                    </div>
                </section>
                <section className="w-[1440px] flex flex-col mx-auto py-[80px]">
                    <div className="w-[940px] flex justify-center mx-auto">
                        <div className="w-full flex flex-col text-center"> 
                            <p className="text-[40px] leading-[48px] mb-[32px]">Intelligence is only as good as the data beneath it</p>
                            <p className="text-[18px] leading-[32px] text-gray-500 mb-[32px]">Without a unified data layer, expansion signals fragment, health scores mislead, and forecasts break. Riley orchestrates your data before intelligence is applied, so every decision is based on a trusted operating view</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-center mb-[80px]">
                        <div className="w-[190.38px]">
                            <div className="w-full bg-gray-800 rounded-lg cursor-pointer text-white text-[16px] leading-[24px] text-center px-[22px] py-[12px]">
                                Request a demo
                            </div>
                        </div>
                    </div>
                    <div className="w-[942px] flex justify-center mx-auto">
                        <div className="w-full h-full">
                            <img className='w-full h-full' src={section2Img10} alt="jpg10"/>
                        </div>
                    </div>
                    <div className="w-full flex justify-center pt-[80px] px-[5%] pb-0 mb-[75px]">
                        <div className="w-[800px] mx-auto flex justify-center">
                            <div className="w-[800px] flex flex-col text-center "> 
                                <p className="text-[40px] leading-[48px] mb-[32px]">Bad data breaks revenue decisions</p>
                                <div className="w-full flex justify-center h-[64px] mb-[80px]">
                                    <p className="text-[18px] leading-[32px] text-gray-500 mb-[32px]">When signals are unified, intelligence shifts from reactive to predictive. Riley’s orchestration layer makes that possible.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <div className="w-[1140px] h-[388px] flex justify-between">
                            <div className="w-[353.33px] h-full flex flex-col" >
                                <div className="w-full flex justify-center mx-auto mb-[20px]">
                                    <div className="w-[72px] h-[72px]">
                                        <img className="w-[72px] h-[72px] mx-12px" src={section2Img11} alt="jpg11" />
                                    </div>
                                </div>
                                <div className="w-full flex justify-center text-center mb-[20px]">
                                    <p className="text-[24px] leading-[32px]">Your AI Can’t Outrun Your Data</p>
                                </div>
                                <div className="w-full flex justify-center text-center">
                                    <p className="text-[18px] leading-[32px] text-gray-500">Applying AI to bad data doesn't create clarity - it scales noise, inconsistency, and poor decision making</p>
                                </div>
                            </div>
                            <div className="w-[353.33px] h-full flex flex-col" >
                                <div className="w-full flex justify-center mx-auto mb-[20px]">
                                    <div className="w-[72px] h-[72px]">
                                        <img className="w-[72px] h-[72px] mx-12px" src={section2Img12} alt="jpg12" />
                                    </div>
                                </div>
                                <div className="w-full flex justify-center text-center mb-[20px]">
                                    <p className="text-[24px] leading-[32px]">Find Leverage Before It’s Obvious</p>
                                </div>
                                <div className="w-full flex justify-center text-center">
                                    <p className="text-[18px] leading-[32px] text-gray-500">Miss early signals and the upside shrinks. The leverage window closes, and what’s left are big, costly bets with low confidence</p>
                                </div>
                            </div>
                            <div className="w-[353.33px] h-full flex flex-col" >
                                <div className="w-full flex justify-center mx-auto mb-[20px]">
                                    <div className="w-[72px] h-[72px]">
                                        <img className="w-[72px] h-[72px] mx-12px" src={section2Img13} alt="jpg13" />
                                    </div>
                                </div>
                                <div className="w-full flex justify-center text-center mb-[20px]">
                                    <p className="text-[24px] leading-[32px]">Decision Velocity Creates First Movers</p>
                                </div>
                                <div className="w-full flex justify-center text-center">
                                    <p className="text-[18px] leading-[32px] text-gray-500">First movers win by deciding faster  and acting while there’s still leverage, before it turns into discounts and costly commitments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-[1440px] flex mx-auto mb-[80px]">
                    <div className='w-[1440px] h-[400px]'>
                        <div className="w-full h-full flex justify-center items-center">
                            <div className="w-[700px] h-[204px] flex flex-col text-center"> 
                                <div className="w-full flex justify-center">
                                    <p className="text-[18px] leading-[32px]">Our tools could each tell us about one call, one account, one system. Riley is the only one that reads across all of it at once—and that changed what we could see. It became the business context layer that made our AI significantly smarter, more accurate, and far more useful in day-to-day decisions.</p>
                                </div>
                                <p className="text-[18px] leading-[32px] mt-[24px]">Cesar De La Garza</p>
                                <p className="text-[14px] leading-[20px] text-gray-500">Head of Technology Operations and Compliance, Closinglock</p>
                            </div>
                            
                        </div>
                    </div>
                </section>
                <section className="w-[1440px] flex mx-auto pt-[80px] pb-[160px]">
                    <div className="w-full h-[438px] flex justify-between items-center px-[200px]">
                        <div className="w-[495.23px] h-[438px]">
                            <p className=" text-[56px] leading-[64px] mt-[20px] mb-[40px] text-left">Enterprise Ready Infrastructure to Protect Your Data</p>
                            <p className="text-[18px] leading-[32px] mb-[40px] text-gray-500 text-left">Riley is SOC 2 Type II and GDPR compliant, with strict security measures to ensure your customer data and insights remain private, protected, and never misused</p>
                            <div className="w-[330.8px] h-[50px] tracking-[0.56px] cursor-pointer bg-gray-800 rounded-lg text-white text-[16px] leading-[24px] text-center px-[32px] py-[12px]">
                                Discover how we protect yout data
                            </div>
                        </div>
                        <div className="w-[496.77px] h-[206px] flex justify-center py-[32px] pl-[32px]">
                            <img className="w-[141px] h-[141px] mx-[12px]" src={section2Img14} alt="jpg14" />
                            <img className="w-[143px] h-[142px] mx-[12px]" src={section2Img15} alt="jpg15" />
                        </div>
                    </div>
                </section>
                <section className="w-full flex bg-test px-[30px] pt-[50px] pb-[80px]">
                    <div className="w-[768px] h-[656px] flex mx-auto">
                        <div className="w-full h-full flex flex-col text-center py-[112px]">
                            <Link className="text-[64px] leading-[72px] mt-[20px] mb-[10px] text-sky-950"
                                to={"/post/achieving-soc-2-compliance-how-riley-protects-your-data"}
                            >
                                Discover your hidden growth drivers
                            </Link>
                            <div className="w-[500px] h-[154px] flex flex-col justify-center mx-[134px] mt-[40px] mb-[64px]">
                                <input className="w-full h-[52px] border border-gray-300 rounded-md py-[8px] px-[14px] mb-[32px] focus:outline-none  text-black" placeholder="Enter your email" />
                                <div className="w-full h-[48px]  bg-gray-800 rounded-lg text-white text-[16px] leading-[24px] text-center px-[32px] py-[12px]">
                                    See what's driving growth
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    ) ;
}

export default HomePage ;