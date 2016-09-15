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
            <div class="ui-wrapper">
                <div class="color-wrapper">
                    <h1> Colors sets </h1>
                    <div class="xs-line"></div>
                    <div class="colors-wrapper">
                        <div class="square light-blue-bg">
                            <p>#3498db</p>
                        </div>
                        <div class="square lagoon-bg">
                            <p>#16a085</p>
                        </div>
                        <div class="square sea-blue-bg">
                            <p>#2980b9</p>
                        </div>
                        <div class="square dark-blue-bg">
                            <p>#2c3e50</p>
                        </div>
                        <div class="square yellow-sun-bg">
                            <p>#e67e22</p>
                        </div>
                        <div class="square sunset-bg">
                            <p>#d35400</p>
                        </div>
                        <div class="square bloody-bg">
                            <p>#c0392b</p>
                        </div>
                        <div class="square industrial-bg">
                            <p>#7f8c8d</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ui-wrapper">
                <div class="btn-wrapper">
                    <h1> Button sets </h1>
                    <div class="xs-line"></div>
                    <h2> Default Button sets </h2>
                    <div class="btn-dft-wrapper">
                        <button class="dft-btn light-blue-bg"> Hello! </button>
                        <button class="dft-btn lagoon-bg rad"> Hello! </button>
                        <button class="dft-btn sea-blue-bg sh"> Hello! </button>
                        <button class="dft-btn dark-blue-bg rad sh"> Hello! </button>
                        <button class="dft-btn yellow-sun-bg rad-h"> Hello! </button>
                        <button class="dft-btn sunset-bg no-bd"> Hello! </button>
                        <button class="dft-btn bloody-bg"> Hello! </button>
                        <button class="dft-btn industrial-bg"> Hello! </button>
                    </div>
                    <h2> Default Button sets - L sized </h2>
                    <div class="btn-dft-wrapper">
                        <button class="dft-btn l-size light-blue-bg"> Hello! </button>
                        <button class="dft-btn l-size lagoon-bg rad"> Hello! </button>
                        <button class="dft-btn l-size sea-blue-bg sh"> Hello! </button>
                        <button class="dft-btn l-size dark-blue-bg rad sh"> Hello! </button>
                        <button class="dft-btn l-size yellow-sun-bg rad-h"> Hello! </button>
                        <button class="dft-btn l-size sunset-bg no-bd"> Hello! </button>
                        <button class="dft-btn l-size bloody-bg"> Hello! </button>
                        <button class="dft-btn l-size industrial-bg"> Hello! </button>
                    </div>
                    <h2> Default Button sets - XL sized </h2>
                    <div class="btn-dft-wrapper">
                        <button class="dft-btn xl-size light-blue-bg"> Hello! </button>
                        <button class="dft-btn xl-size lagoon-bg rad"> Hello! </button>
                        <button class="dft-btn xl-size sea-blue-bg sh"> Hello! </button>
                        <button class="dft-btn xl-size dark-blue-bg rad sh"> Hello! </button>
                        <button class="dft-btn xl-size yellow-sun-bg rad-h"> Hello! </button>
                        <button class="dft-btn xl-size sunset-bg no-bd"> Hello! </button>
                        <button class="dft-btn xl-size bloody-bg"> Hello! </button>
                        <button class="dft-btn xl-size industrial-bg"> Hello! </button>
                    </div>
                    <h2> Default Social Button sets </h2>
                    <div class="btn-dft-wrapper">
                        <button class="dft-btn xl-size light-blue-bg"> 
                            <i class="fa fa-facebook" aria-hidden="true"></i> Share
                        </button>
                        <button class="dft-btn xl-size lagoon-bg rad"> 
                            <i class="fa fa-twitter" aria-hidden="true"></i> Share
                        </button>
                        <button class="dft-btn xl-size sea-blue-bg sh"> 
                            <i class="fa fa-google-plus" aria-hidden="true"></i> Share
                        </button>
                        <button class="dft-btn xl-size dark-blue-bg rad sh"> 
                            <i class="fa fa-pinterest-p" aria-hidden="true"></i> Share
                        </button>
                        <button class="dft-btn xl-size yellow-sun-bg rad-h"> 
                            <i class="fa fa-tumblr" aria-hidden="true"></i> Share
                        </button>
                        <button class="dft-btn xl-size sunset-bg no-bd"> 
                        <i class="fa fa-500px" aria-hidden="true"></i> Share 
                        </button>
                        <button class="dft-btn xl-size bloody-bg"> 
                            <i class="fa fa-vine" aria-hidden="true"></i> Share
                        </button>
                    </div>
                </div>
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
