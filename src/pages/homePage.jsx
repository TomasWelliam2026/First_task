import Img1 from '../assets/img/advert2.jpg' ;
import Img2 from '../assets/img/ttt.jpg' ;

import section2Img1 from '../assets/img/6a0dcd64448f40a235583ca7_kiwicom.png';
import section2Img2 from '../assets/img/6a0dcd64795c1a208e0c53cd_homedepot.png';
import section2Img3 from '../assets/img/6a0dcd6445d7ece7509a704a_closingclock.png' ;
import section2Img4 from '../assets/img/6a0dcd6445a96fa05225abbb_intuit.png' ;
import section2Img5 from '../assets/img/Riley AI_ Revenue Intelligence & Churn Risk Detection_files/6a0dcd64f7c8928b44c89da1_sumup.png' ;
import section2Img6 from '../assets/img/69a9e177f5a364bd89750766_Scene-1 (18).gif' ;
import section2Img7 from '../assets/img/6a1ceebce28d1a7b0eaac7dc_revenue-risk-ezgif.com-optimize.gif' ;
import section2Img8 from '../assets/img/6a4527a58940ef43c39e7ef9_6913b25a7cc4fde97c68967d_website stuff and stills (1) (1)-p-1080.png' ;
import section2Img9 from '../assets/img/6a1cef71ba03ba59aca5c3dd_Revenueintervention-ezgif.com-optimize.gif' ;
import section2Img10 from '../assets/img/69fbcf45bc7b103deee5fe11_Riley flow illustration_260504_FA_page-0001-p-1080.jpg' ;
import section2Img11 from '../assets/img/6a291b91e61a3bcbee5b6151_3. Your AI Can’t Outrun Your Data _ Data-Driven by Default-p-2000.png' ;
import section2Img12 from '../assets/img/6a291b92425874fdecc675a0_13. Find Leverage Before It’s Obvious _ Continuous, Accelerated Discovery-p-2000.png' ;
import section2Img13 from '../assets/img/6a291b93b87a53c6443cd712_17. Decision Velocity Creates First Movers _ Faster Pivots, Better Proof-p-2000.png' ;
import section2Img14 from '../assets/img/6a1b0c506d4d91ecdbbc1ba4_image 6.png' ;
import section2Img15 from '../assets/img/6a1b0c5086c77558acbc501c_image 8.png' ;

const HomePage = () => {
    return (
        <main>
            <div className='w-full'>
                <section className="w-9/12 flex mx-auto justify-between pl-16 pr-12 py-20">
                    <div className="w-6/12 flex flex-col"> 
                        <h1 className="text-7xl">Know what's happening with revenue.</h1>
                        <h1 className="text-7xl text-gray-400">Before it happens.</h1>
                        <p className="text-xl mt-8 mb-8">Riley continuously detects churn risk, forecast changes, and expansion opportunities across your GTM signals, before they appear in dashboards.</p>
                        <div className="w-3/5">
                            <div className="w-full bg-gray-800 rounded-lg text-white text-lg text-center px-3 py-2">
                                Start Trial
                            </div>
                            <div className="w-full text-gray-800 text-lg text-center px-3 py-3">
                                See how it works
                            </div>
                        </div>
                    </div>
                    <div className="w-7/12 flex relative"> 
                        <div className="w-full h-full">
                            <img className="w-full h-full" src={Img1} alt="jpg1"/>
                        </div>
                        <div className="w-4/12 h-full absolute right-0 top-0">
                            <img className='w-full h-full' src={Img2} alt="jpg2"/>
                        </div>
                    </div>
                </section>
                <section className="w-9/12 flex flex-col mx-auto pl-16 pr-12 py-20">
                    <div className="w-full flex flex-col text-center mb-12 "> 
                        <p className="text-sm text-gray-500">TRUSTED  BY HIGH - PERFORMING REVENUE TEAMS</p>
                    </div>
                    <div className='w-full flex justify-center mb-36'>
                        <div className="w-9/12 flex relative justify-between"> 
                            <div className="h-7 w-auto">
                                <img className="w-full h-full" src={section2Img1} alt="jpg1"/>
                            </div>
                            <div className="h-7 w-auto">
                                <img className="w-full h-full" src={section2Img2} alt="jpg2"/>
                            </div>
                            <div className="h-7 w-auto">
                                <img className="w-full h-full" src={section2Img3} alt="jpg3"/>
                            </div>
                            <div className="h-7 w-auto">
                                <img className="w-full h-full" src={section2Img4} alt="jpg4"/>
                            </div>
                            <div className="h-7 w-auto">
                                <img className="w-full h-full" src={section2Img5} alt="jpg5"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col text-center"> 
                        <p className="text-5xl mb-12">Stop Finding Revenue Risk After It’s Too Late</p>
                        <p className="text-xl text-gray-500">Riley continuously detects churn risk, forecast changes, and expansion opportunities across</p>
                        <p className="text-xl text-gray-500">your GTM signals, before they appear in dashboards.</p>
                    </div>
                </section>
                <section className="w-9/12 flex flex-col mx-auto pl-16 pr-12 py-20">
                    <div className="w-full flex justify-center text-center mb-36">
                        <div className="w-11/12 flex justify-between">
                            <div className="w-5/12 h-full">
                                <p className="text-5xl mb-12 text-left">From fragmented data to a single operating view</p>
                                <p className="text-xl text-gray-500 text-left">Customer, product, and revenue signals are continuously reconciled into one trusted business model, so every team works from the same reality</p>
                            </div>
                            <div className="w-6/12 h-full">
                                <img className='w-full h-full' src={section2Img6} alt="jpg6"/>
                            </div>
                        </div> 
                    </div>
                    <div className="w-full flex justify-center text-center mb-36">
                        <div className="w-11/12 flex justify-between">
                            <div className="w-5/12 h-full">
                                <p className="text-5xl mb-12 text-left">Revenue risk identified early</p>
                                <p className="text-xl text-gray-500 text-left">Churn, renewal, and expansion signals surface months in advance, so teams know which customers to save, grow, or ignore before revenue decisions are forced</p>
                            </div>
                            <div className="w-6/12 h-full">
                                <img className='w-full h-full' src={section2Img7} alt="jpg7"/>
                            </div>
                        </div> 
                    </div>
                    <div className="w-full flex justify-center text-center mb-36">
                        <div className="w-11/12 flex justify-between">
                            <div className="w-5/12 h-full">
                                <p className="text-5xl mb-12 text-left">Defensible revenue forecasts</p>
                                <p className="text-xl text-gray-500 text-left">Territory plans, pipeline coverage, renewal risk, and NRR projections are built on reconciled revenue data so the forecast holds up in board review, not just in internal meetings</p>
                            </div>
                            <div className="w-6/12 h-full">
                                <img className='w-full h-full' src={section2Img8} alt="jpg8"/>
                            </div>
                        </div> 
                    </div>
                    <div className="w-full flex justify-center text-center">
                        <div className="w-11/12 flex justify-between">
                            <div className="w-5/12 h-full">
                                <p className="text-5xl mb-12 text-left">Revenue intervention reminders</p>
                                <p className="text-xl text-gray-500 text-left">The right teams receive prioritized, decision-ready insights at the right moment, so analysis turns into action, not dashboards</p>
                            </div>
                            <div className="w-6/12 h-full">
                                <img className='w-full h-full' src={section2Img9} alt="jpg9"/>
                            </div>
                        </div> 
                    </div>
                </section>
                <section className="w-9/12 flex flex-col mx-auto pl-16 pr-12 py-20">
                    <div className="w-full flex justify-center mb-12">
                        <div className="w-10/12 flex flex-col text-center"> 
                            <p className="text-5xl mb-12">Intelligence is only as good as the data beneath it</p>
                            <p className="text-xl text-gray-500">Without a unified data layer, expansion signals fragment, health scores mislead, and forecasts break. Riley orchestrates your data before intelligence is applied, so every decision is based on a trusted operating view Request a demo</p>
                        </div>
                    </div>
                    <div className=" flex justify-center mb-12">
                        <div className="w-2/12">
                            <div className="w-full bg-gray-800 rounded-lg text-white text-lg text-center px-3 py-2">
                                Request a demo
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <div className="w-9/12 h-full">
                            <img className='w-full h-full' src={section2Img10} alt="jpg10"/>
                        </div>
                    </div>
                </section>
                <section className="w-9/12 flex flex-col mx-auto pl-16 pr-12 py-20">
                    <div className="w-full flex justify-center mb-12">
                        <div className="w-10/12 flex flex-col text-center"> 
                            <p className="text-5xl mb-12">Bad data breaks revenue decisions</p>
                            <div className="w-full flex justify-center">
                                <p className="w-9/12 text-xl text-gray-500">When signals are unified, intelligence shifts from reactive to predictive. Riley’s orchestration layer makes that possible.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-between">
                        <div className="w-1/3 flex flex-col" >
                            <div className="w-full h-16 flex justify-center">
                                <div claaaName="w-16 h-16">
                                    <img className="w-16 h-16" src={section2Img11} alt="jpg11" />
                                </div>
                            </div>
                            <div className="w-full flex justify-center text-center mt-6">
                                <p className="text-2xl">Your AI Can’t Outrun Your Data</p>
                            </div>
                            <div className="w-full flex justify-center text-center mt-6">
                                <p className="text-xl text-gray-500">Applying AI to bad data doesn't create clarity - it scales noise, inconsistency, and poor decision making</p>
                            </div>
                        </div>
                        <div className="w-1/3 flex flex-col" >
                            <div className="w-full h-16 flex justify-center">
                                <div claaaName="w-16 h-16">
                                    <img className="w-16 h-16" src={section2Img12} alt="jpg12" />
                                </div>
                            </div>
                            <div className="w-full flex justify-center text-center mt-6">
                                <p className="text-2xl">Find Leverage Before It’s Obvious</p>
                            </div>
                            <div className="w-full flex justify-center text-center mt-6">
                                <p className="text-xl text-gray-500">Miss early signals and the upside shrinks. The leverage window closes, and what’s left are big, costly bets with low confidence</p>
                            </div>
                        </div>
                        <div className="w-1/3 flex flex-col" >
                            <div className="w-full h-16 flex justify-center">
                                <div claaaName="w-16 h-16">
                                    <img className="w-16 h-16" src={section2Img13} alt="jpg13" />
                                </div>
                            </div>
                            <div className="w-full flex justify-center text-center mt-6">
                                <p className="text-2xl">Decision Velocity Creates First Movers</p>
                            </div>
                            <div className="w-full flex justify-center text-center mt-6">
                                <p className="text-xl text-gray-500">First movers win by deciding faster  and acting while there’s still leverage, before it turns into discounts and costly commitments</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-9/12 flex flex-col mx-auto pl-16 pr-12 py-20">
                    <div className="w-full fle flex-col justify-center mb-12">
                        <div className="w-10/12 flex flex-col text-center"> 
                            <div className="w-full flex justify-center">
                                <p className="w-9/12 text-xl">Our tools could each tell us about one call, one account, one system. Riley is the only one that reads across all of it at once—and that changed what we could see. It became the business context layer that made our AI significantly smarter, more accurate, and far more useful in day-to-day decisions.</p>
                            </div>
                            <p className="text-2xl mb-12">Cesar De La Garza</p>
                            <p className="text-lg text-gray-500 mb-32">VP of Data Science, Company Name</p>
                        </div>
                        <div className="w-11/12 flex justify-between">
                            <div className="w-5/12 h-full">
                                <p className="text-5xl mb-12 text-left">Revenue intervention reminders</p>
                                <p className="text-xl text-gray-500 text-left">The right teams receive prioritized, decision-ready insights at the right moment, so analysis turns into action, not dashboards</p>
                                <div className="w-7/12 bg-gray-800 rounded-lg text-white text-md text-center px-3 py-2 mt-12">
                                    Discover how we protect yout data
                                </div>
                            </div>
                            <div className="w-5/12 flex justify-start">
                                <div className="w-full flex justify-center">
                                    <div claaaName="w-1/2 flex justify-center items-center">
                                        <img className="w-auto h-auto" src={section2Img14} alt="jpg14" />
                                    </div>
                                    <div claaaName="w-1/2 flex justify-center items-center">
                                        <img className="w-auto h-auto" src={section2Img15} alt="jpg15" />
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </section>
                <section className="w-full flex">
                    <div className="w-9/12 flex flex-col mx-auto pl-16 pr-12 py-20">
                        <div className="w-full flex bg-test justify-center text-center pt-32">
                            <div clasName="w-full flex justify-center">
                                <p className="w-10/12 text-6xl mb-12 text-center justify-center">Discover your hidden growth drivers</p>
                            </div>
                            <div className="w-full flex justify-center">
                                
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    ) ;
}

export default HomePage ;