import React from "react";

export default function Main() {
  return (
    <section className="px-10">
      <div className="flex">
        <div className="w-1/4">
         <div>
          <h4 className="text-lg font-bold">Category</h4>
          <div className="px-2">
            <ul >
              <li>Ful Avatar</li>
              <li>Others</li>
            </ul>
          </div>
         </div>
         <div>
         <h4 className="text-lg font-bold">Contents</h4>
         <div>
          <input type="checkbox" name="VRChat" id="VRChatQ" />
          <label htmlFor="VRChatQ" className="pl-1">VRChat(Quest)</label>
          <br />
          <input type="checkbox" name="VRChat" id="VRChat" />
          <label htmlFor="VRChat" className="pl-1">VRChat(PCVR)</label>
          <br />
          <input type="checkbox" name="Others" id="Others" />
          <label htmlFor="Others" className="pl-1">Others</label>

         </div>
         </div>
         <div></div>
         <div></div>
         <div></div>
        </div>
        <div className="w-3/4 grid grid-cols-3">
          <div>
            
          </div>
          <div>
            
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
