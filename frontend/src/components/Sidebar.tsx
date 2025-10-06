import { SidebarItem } from "./SidebarItem"
import { TagIcon,LinkIcon,DocIcon,YtIcon,TwitterIcon,VideoIcon ,BrainIcon} from "./icons/plusIcon"
export function Sidebar(){

    return <div className="w-72 h-full bg-white p-4 fixed">
        <div className="text-2xl text text-blue-800 font-bold">
           < SidebarItem icon={<BrainIcon></BrainIcon> }text="Memory Hub" />   
        </div>
        <div className="mt-8 ml-4 text-gray-500 font-semibold">
          <div className="curson:pointer hover:bg-gray-100">  < SidebarItem  icon={<TwitterIcon></TwitterIcon> }text="Twitter" /></div>
           
           <div className="curson:pointer hover:bg-gray-100"> < SidebarItem icon={<YtIcon></YtIcon> }text="You tube" /> </div>
            <div className="curson:pointer hover:bg-gray-100">< SidebarItem icon={<DocIcon></DocIcon>}text="Documents" /> </div>
           <div className="curson:pointer hover:bg-gray-100">< SidebarItem icon={<LinkIcon></LinkIcon> }text="Links" /> </div>
          <div className="curson:pointer hover:bg-gray-100">  < SidebarItem icon={<TagIcon></TagIcon>}text="tags" /> </div>

         </div>
        </div>
}