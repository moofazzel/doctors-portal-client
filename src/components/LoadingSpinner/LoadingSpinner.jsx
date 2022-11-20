import React from "react";
import Lottie from 'react-lottie';
import * as animationData from "../../assets/lotties/Loading.json"




    export default function LoadingSpinner() {
      const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      return (
        <div key="avatar_animation" className="animation">
          <Lottie
            height={150}
            width={150}
            
            options={defaultOptions}
            isClickToPauseDisabled={true}
            key="avatar_animation_data"
          />
        </div>
      );
    }

    
    