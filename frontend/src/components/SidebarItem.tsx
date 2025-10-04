import type { ReactElement } from "react"

interface SidebarItemProps{
           icon:ReactElement;
           text:string
}

export function SidebarItem({icon,text}:SidebarItemProps ){
    return <div className="flex gap-3 items-center p-4">
          <div>{icon}</div>
          <div>{text}</div>

    </div>
}