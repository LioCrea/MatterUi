<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of HomeVue
 *
 * @author lio
 */
class HomeVue extends IVue {
    public function __toString() {
        $d = $this->getMdonnees();

        $this->content = '
            <div class="main-wrapper">
        ';

        FactoryClass::importClassApps("Inputs", "InputsCtrl");
        $inputsCtrl = new InputsCtrl();
        $this->content .= Dispatcher::Forward($inputsCtrl);

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
