import logo from '../../assests/logo.png'
import './ResearchPaperCard.css'
const ResearchPaperCard = () => {
    return (

        <div class="h-auto  researchPaperCardContainer">

            <div class="group lg:w-[200px] lg:h-[280px] w-[160px] [perspective:1000px] h-[220px] researchPaperCardInnerContainer">
                <div class="relative rounded-xl border-2 border-white h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                    <div class="rounded-lg inset-0 flex flex-col h-[70px] lg:h-[90px] items-center justify-center  " style={{ backgroundImage: `url("https://picsum.photos/200/300")`, backgroundSize: "cover" }}>
                        <div className='h-[60px] w-[60px] bg-white rounded-full top-7 lg:top-11 relative'>
                            <img src={logo} alt="" className='h-full w-full object-cover rounded-full' />
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center mt-5 lg:mt-8'>
                        <h1 className=' text-lg lg:text-2xl'>Rohit Master</h1>
                        <h5 className='text-sm lg:text-base'>App Developer</h5>

                        <h4 className='text-center text-[12px] lg:text-sm px-4 mt-1'>Research Paper Topic for the intended professor</h4>

                        <h5 className=' mt-1 mb-1 lg:text-xs' style={{ fontSize: "10px" }}>-9th August 2023</h5>
                    </div>

                    {/* backface of the card */}
                    <div class="absolute inset-0 rounded-xl bg-black/95 px-3 py-2 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">

                        <div class="flex min-h-full flex-col items-center justify-around">

                            <p className='text-[0.62em] lg:text-xs  overflow-hidden h-[85%] w-full '>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words</p>

                            {/* link mapping to be done here */}

                            <button class=" rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                                Read More ...
                            </button>
                        </div>
                    </div> 
                    {/* backface of the card */}

                </div>

            </div>
        </div>

    )
}

export default ResearchPaperCard