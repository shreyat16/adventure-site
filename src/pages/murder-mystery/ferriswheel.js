import React from "react"
import {Link} from "gatsby"
import ClownTemplate from "../../components/ClownTemplate/ClownTemplate"
import "./ferriswheel.css"

class FerrisWheelPage extends React.Component {
  
  render() {
    return (
      <div className="FerrisWheelPage">
        <div>
            <div className="backhome">
                <div className="text">At the ferris wheel... hmmm.. is that a spill on the ground?</div>
                <div class="ferris_wheel">
                <div class="wheel_wrap">
                    <div class="wheel">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>
                <div class="buckets">
                    <div><span></span></div>
                    <div><span></span></div>
                    <div><span></span></div>
                    <div><span></span></div>
                    <div><span></span></div>
                    <div><span></span></div>
                    <div><span></span></div>
                    <div><span></span></div>
                </div>
                <div class="stand"><span></span></div>
                </div>
            </div>
          </div>
          <ClownTemplate>
                <Link to="/murder-mystery/drink/"> Investigate ‍</Link>
            </ClownTemplate>
      </div>
    )
  }
}

export default FerrisWheelPage
