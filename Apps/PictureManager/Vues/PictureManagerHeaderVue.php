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
class PictureManagerHeaderVue extends IVue {
    public function __toString() {
        $d = $this->getMdonnees();

        $this->content = '
                        <div class="header box-shadow"> 
                        <div class="like-wrapper">
                            <i class="fa fa-heart" aria-hidden="true"></i>
                        </div>
                        <div class="trash-wrapper">
                            <i class="fa fa-trash" aria-hidden="true"></i> 
                        </div>
                        <div class="likes">
                            Your Likes
                        </div>
                            <div class="menu-wrapper">
                                <ul>
                                    <li> About </li>
                                    <li> Some other cool projects </li>
                                    <li> Contact </li>
                                </ul>
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
