import React from 'react'
import {MoveUpRight} from "lucide-react"
const Center = () => {
  return (
    // <div className="h-[450px] w-[95%] mx-[20px] my-[20px] bg-gray-600 border rounded-[20px]">
        
    // </div>
    <div class="h-[450px] m-[20px] w-[98%] bg-[url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.XwL2890n-MkfkUWHgLXEWAHaEJ%3Fpid%3DApi&f=1&ipt=1187b7f6437473806f041822cd31b781f4a25913f2643f55b3fb7b86f715d18f')] bg-cover bg-center brightness-80 font-[700]">
        <div className="text-center text-3xl text-white font-italic py-[50px]">
            <h1>Unleash Your Inner Champion Today</h1>
            <h1>All in One Place</h1>
        </div>
        <div className="text-center text-[16px] text-white ">
            <p>Join the ultimate tennis experience — where passion <b>meets performance</b>,
            and every swing brings you closer to victory.</p>
        </div>
        <div className="text-center mt-[10px]">
            <button className='px-[10px] py-[10px] border rounded-[20px] bg-black/70 text-white font-[600]'>Start your journey</button>
        </div>
        <div className="btm mt-[120px] ml-[20px] text-[12px] text-white font-[200] flex justify-between">
            <div className="flex gap-[15px] ">
          <div className="first">
            <p>Train with real professionals</p>
            <p>Get the real results</p>
          </div>
          <div className="flex border border-white/60 px-[5px] py-[3px] rounded-[20px]">
            <img className='h-[25px] object-cover rounded-[30%]' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fpassport-photo-man-welldressed-caucasian-businessman-suit-tie-smiling-id-portrait_817921-61256.jpg%3Fw%3D826&f=1&nofb=1&ipt=5a42ded3d7798d09d7b9655cacc4942575eae6311daed6cbf5fe542049d83fdb" alt="same" />
            <img className='h-[25px] object-cover rounded-[30%]' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.aipassportphotos.com%2Fblog%2Fwp-content%2Fuploads%2F2023%2F09%2Fimage-31.png&f=1&nofb=1&ipt=c5fb0049b412fddb9e5737b38fab5e09a189412a4c286146d427e7de74f2f6c5" alt="second" />
            <img className='h-[25px] object-cover rounded-[30%]' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpassport-photo.online%2F_optimized%2Fprepare2.0498e1e2-opt-1920.WEBP&f=1&nofb=1&ipt=a20f50f3c354e21fa77c63b718ede737ef02e4b5e488463a36af8f0bc6f7f26f" alt="third" />
          </div>
            </div>
          <div className="flex gap-[5px] px-[10px]">
                <span>Instagram <MoveUpRight /></span>
                <span><p>Facebook <MoveUpRight /></p></span>
                <span><p>Tik Tok <MoveUpRight /></p></span>
          </div>
        </div>
    </div>

  )
}

export default Center
