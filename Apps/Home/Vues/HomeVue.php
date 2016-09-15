<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of HomeVue
 *
 * @author guich
 */
class HomeVue extends IVue {
    public function __toString() {
        $d = $this->getMdonnees();

        $this->content = '
            <div class="main-wrapper">
        ';

        FactoryClass::importClassApps("Buttons", "ButtonsCtrl");
        $buttonsCtrl = new ButtonsCtrl();
        $this->content .= Dispatcher::Forward($buttonsCtrl);

        $this->content .= ' 
            </div>
        ';

        $js = '
            var home = new Home();
            home.init();
        ';
        $this->content .= Utils::insertJavaScriptCode($js);

        return $this->generate();
    }

}

?>
