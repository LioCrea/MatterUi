<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of HeaderVue
 *
 * @author lio
 */
class HeaderVue extends IVue {
    public function __toString() {
        $d = $this->getMdonnees();

        $this->content = '

            <div class="header-wrapper">
                <div class="header-title">
                    UI Features <br />
                    <i>No copyright here. Feel free to use, especially with our Unicorn Framework :)</i>
                </div>
                <header>
                    <ul>
                        <li class="menu-options selected-menu" data-url="Colors"> Colors </li>
                        <li class="menu-options" data-url="Buttons"> Buttons </li>
                        <li class="menu-options" data-url="Inputs"> Inputs </li>
                        <li class="menu-options" data-url="Logins"> Login Stuffs </li>
                    </ul>
                </header>
                <div class="unicornUi-github">
                    Want to add your stuffs? Here it is: 
                    <a target="_blank" href="https://github.com/LioCrea/UnicornUi">
                        <i class="fa fa-github" title="Our Repo" aria-hidden="true"></i>
                    </a>
                </div>
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
