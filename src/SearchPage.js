import React from 'react'
import ChannelRow from "./ChannelRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import "./SearchPage.css";
import VideoRow from"./VideoRow";


function SearchPage() {
    return (
        <div className="searchPage">
           <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
           </div>  
           <hr />

           <ChannelRow 
           image="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s900-c-k-c0xffffffff-no-rj-mo" 
           channel="Clever Programmer"
           verified
           subs="660K"
           noOfVideos={382}
           description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
           />
           <hr /> 

           <VideoRow 
           title="🔴 How to Make an TWITTER Clone with REACT JS for Beginners (in 4 hours)"
           views="1.4M"
           subs="659K"
           description="In this FREE LIVE training, Qazi and Sonny will show you how to build an Twitter clone with REACT JS 🚀"
           image="https://i.ytimg.com/vi/rJjaqSTzOxI/maxresdefault.jpg"
           timestamp="59 seconds ago"
           channel="Clever Programmer"
           />
           <VideoRow 
           title="🔴 How to Make an TWITTER Clone with REACT JS for Beginners (in 4 hours)"
           views="1.4M"
           subs="659K"
           description="In this FREE LIVE training, Qazi and Sonny will show you how to build an Twitter clone with REACT JS 🚀"
           image="https://i.ytimg.com/vi/rJjaqSTzOxI/maxresdefault.jpg"
           timestamp="59 seconds ago"
           channel="Clever Programmer"
           />
           <VideoRow 
           title="🔴 How to Make an TWITTER Clone with REACT JS for Beginners (in 4 hours)"
           views="1.4M"
           subs="659K"
           description="In this FREE LIVE training, Qazi and Sonny will show you how to build an Twitter clone with REACT JS 🚀"
           image="https://i.ytimg.com/vi/rJjaqSTzOxI/maxresdefault.jpg"
           timestamp="59 seconds ago"
           channel="Clever Programmer"
           />
        </div>
    )
}

export default SearchPage ;
