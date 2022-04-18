import { Menu } from "@headlessui/react";

export function Search() {
    return (
       <Menu as = "div">
           <Menu.Button> Selecione uma cidade para iniciar </Menu.Button>
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