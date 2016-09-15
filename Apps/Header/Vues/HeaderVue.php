<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of HeaderVue
 *
 * @author guich
 */
class HeaderVue extends IVue {
    public function __toString() {
        $d = $this->getMdonnees();

        $this->content = '

            <div class="header-wrapper">
                <header>
                    <ul>
                        <li class="menu-options selected-menu" data-url="Buttons"> Buttons </li>
                        <li class="menu-options" data-url="Inputs"> Inputs </li>
                        <li class="menu-options" data-url="Logins"> Login Stuffs </li>
                    </ul>
                </header>
            </div>
            
        ';

        $js = '
            var header = new Header();
            header.init();
        ';
        $this->content .= Utils::insertJavaScriptCode($js);

        return $this->generate();
    }

}

?>
