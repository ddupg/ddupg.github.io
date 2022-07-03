import React from "react";
import SubHeader from "./SubHeader";
import WebsiteCard from "./WebsiteCard";
import { Classify } from "../interface";

const NavigationPage: React.FC<{classifies: Classify[]}> = ({classifies}) => {
  return <div className='m-12 mt-0'>
    {
      classifies.map((classify) => {
        return <div>
          <SubHeader title={classify.name} />
          <div className="flex flex-wrap gap-3 max-w-10xl">
            {
              classify.websites.map((website) => {
                return <WebsiteCard website={website} />
              })
            }
          </div>
        </div>
      })
    }
  </div>
}

export default NavigationPage;