import Img1 from '../assets/img/advert2.jpg' ;
import Img2 from '../assets/img/advert.jpg' ;

const HomePage = () => {
    return (
        <main>
            <div className='w-full h-16'>
                <div className="w-9/12 flex mx-auto justify-between pl-16 pr-12 py-20">
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
                            <img className="w-full h-full" width="111" src={Img1} alt="jpg"/>
                        </div>
                        <div className="w-1/2 absolute">
                            <img src={Img2} alt="jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    ) ;
}

export default HomePage ;