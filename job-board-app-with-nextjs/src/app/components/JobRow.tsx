
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function JobRow(){
    return(
        <>
        <div className="bg-white p-4 rounded-lg shadow-sm relative  ">
            <div className="absolute top-2 right-4">
             <FontAwesomeIcon className="size-12" icon={faHeart} />   
            </div>

            <div className="flex grow gap-4">
            <div className="content-center">
            <img 
            className="size-12"
            src="data:image/png;base64,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" alt="" />
         </div>
         <div className="grow sm: flex">
            <div className="grow">
            <div className="text-gray-900 text-sm">Spotify</div>
            <div className="font-bold text-lg mb-1">Product designer</div>
            <div className="text-gray-400 text-sm">
                Remote &middot; New York, US &middot; Full-Time 
                </div>
            </div>
            
                <div className="content-end text-gray-500 text-sm">
            2 weeks ago
         </div>
              </div>
          </div>
           
        
        </div>
        
        </>
    );
};