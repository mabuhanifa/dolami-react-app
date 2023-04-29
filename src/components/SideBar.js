import React from "react";

export default function SideBar() {
  return (
    <div className="w-1/4 text-sm">
      <div>
        <h4 className="text-lg font-bold">Category</h4>
        <div className="px-2">
          <ul>
            <li>Ful Avatar</li>
            <li>Others</li>
          </ul>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-bold">Contents</h4>
        <div>
          <input type="checkbox" name="VRChat" id="VRChatQ" />
          <label htmlFor="VRChatQ" className="pl-1">
            VRChat(Quest)
          </label>
          <br />
          <input type="checkbox" name="VRChat" id="VRChat" />
          <label htmlFor="VRChat" className="pl-1">
            VRChat(PCVR)
          </label>
          <br />
          <input type="checkbox" name="Others" id="Others" />
          <label htmlFor="Others" className="pl-1">
            Others
          </label>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-bold">Price</h4>
        <div>
          <input type="checkbox" name="u10" id="u10" />
          <label htmlFor="u10" className="pl-1">
            Under $10
          </label>
          <br />
          <input type="checkbox" name="10to20" id="10to20" />
          <label htmlFor="10to20" className="pl-1">
            $10 to $20
          </label>
          <br />
          <input type="checkbox" name="20to30" id="20to30" />
          <label htmlFor="20to30" className="pl-1">
            $20 to $30
          </label>
          <br />
          <input type="checkbox" name="30to40" id="30to40" />
          <label htmlFor="30to40" className="pl-1">
            $30 to $40
          </label>
          <br />
          <input type="checkbox" name="40to50" id="40to50" />
          <label htmlFor="40to50" className="pl-1">
            $40 to $50
          </label>
          <br />
          <input type="checkbox" name="50to60" id="50to60" />
          <label htmlFor="50to60" className="pl-1">
            $50 to $60
          </label>
          <br />
          <input type="checkbox" name="60to70" id="60to70" />
          <label htmlFor="60to70" className="pl-1">
            $60 to $70
          </label>
          <br />
          <input type="checkbox" name="a70" id="a70" />
          <label htmlFor="a70" className="pl-1">
            above $70
          </label>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-bold">Polygon Amount</h4>
        <div>
          <input type="checkbox" name="u7500" id="u7500" />
          <label htmlFor="u7500" className="pl-1">
            Under &#9651; 7500
          </label>
          <br />
          <input type="checkbox" name="7500to10000" id="7500to10000" />
          <label htmlFor="7500to10000" className="pl-1">
            &#9651; 7500 to &#9651; 10000
          </label>
          <br />
          <input type="checkbox" name="10000to15000" id="10000to15000" />
          <label htmlFor="10000to15000" className="pl-1">
            &#9651; 10000 to &#9651; 15000
          </label>
          <br />
          <input type="checkbox" name="15000to20000" id="15000to20000" />
          <label htmlFor="15000to20000" className="pl-1">
            &#9651; 15000 to &#9651; 20000
          </label>
          <br />
          <input type="checkbox" name="20000to32000" id="20000to32000" />
          <label htmlFor="20000to32000" className="pl-1">
            &#9651; 20000 to &#9651; 320000
          </label>
          <br />
          <input type="checkbox" name="32000to70000" id="32000to70000" />
          <label htmlFor="32000to70000" className="pl-1">
            &#9651; 320000 to &#9651; 700000
          </label>
          <br />
          <input type="checkbox" name="a70000" id="a70000" />
          <label htmlFor="a70000" className="pl-1">
            &#9651; 700000 & Above
          </label>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-bold">Auto Upload & Support</h4>
        <div>
          <input type="checkbox" name="supported" id="supported" />
          <label htmlFor="supported" className="pl-1">
            Supported
          </label>
          <br />
          <input type="checkbox" name="Unsupported" id="Unsupported" />
          <label htmlFor="Unsupported" className="pl-1">
            Unsupported
          </label>
        </div>
      </div>
    </div>
  );
}
