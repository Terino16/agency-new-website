import MobileCaraousel from "./MobileCaraousel";
import WebCaraousel from "./WebCaraousel";
export default function Help() {
    return (
        <div className="bg-gray-50  min-h-[50vh]">
            <div className="max-w-6xl mx-auto p-4 pt-20 leading-[1.5]">
                <h1 className="text-4xl font-libre-caslon">How can we help you?</h1>
                <p className="text-xl font-manrope mt-4">
                    We have been working with founders who have a dream and a vision, whether you are technical or non technical, we are here to help you build your MVP.
                </p>


                <div className="grid md:grid-cols-2 gap-4 py-8">
                    <div className="bg-gradient-to-b from-purple-100   to-stone-50 p-4 rounded-lg min-h-[200px]">
                        <div className="relative overflow-hidden flex items-center  bg-gray-50 py-4  rounded-lg">
                            <WebCaraousel />
                        </div>
                        
                        <h2 className="text-xl font-libre-caslon mt-4 font-[500]">Web Product's</h2>
                        <p className="text-md font-manrope ">
                            We have a team of developers who are passionate about building products that help people live better lives.
                        </p>
                    </div>




                    
                    <div className="bg-gradient-to-b from-lime-100   to-stone-50 p-4 rounded-lg min-h-[200px]">
                        <div className="relative overflow-hidden flex items-center  bg-gray-50 py-4  rounded-lg">
                            <MobileCaraousel />
                        </div>
                        
                        <h2 className="text-xl font-libre-caslon mt-4 font-[500]">Mobile App's</h2>
                        <p className="text-md font-manrope ">
                            We have a team of developers who are passionate about building products that help people live better lives.
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg col-span-2">
                        <h2 className="text-xl font-libre-caslon">Mobile App's</h2>
                        <p className="text-md font-manrope ">
                            We have a team of non technical founders who are passionate about building products that help people live better lives.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}