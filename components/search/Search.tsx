import { Menu } from "@headlessui/react";
import { IconFilter } from "@/icons";

import Styles from "./Search.module.css";

export function Search() {
    return (
       <Menu as = "div" className={Styles.search}>
           <Menu.Button> Selecione uma cidade para iniciar <span><IconFilter /></span></Menu.Button>
           <Menu.Items>
               <div>
                   <Menu.Item>
                       <span>São Paulo, SP</span>
                   </Menu.Item>
                   <Menu.Item>
                       <span>Florianópolis, SC</span>
                   </Menu.Item>
                   <Menu.Item>
                       <span>Porto Alegre, RS</span>
                   </Menu.Item>
               </div>
           </Menu.Items>
       </Menu>
    );
}