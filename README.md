# UnicornUi
CSS and Javascript stuffs for MatterPHP Framework.


&nbsp;

Colors sets
-------

We set up 8 different colors mastering the whole UI.

- Grey (#bdc3c7)
- Sunset (#d35400)
- Blue Lagoon (#2980b9)
- Bloody (#c0392b)
- Full Moon (#2c3e50)
- Bottle (#16a085)
- Sky (#3498db)
- Sunflower (#e67e22)

To set up a color, use its class name on the wrapper only, under the format:

```html
class="wrapper-ColorName-style"
```

It will automatically define all extra components (borders, buttons, alpha etc) making your input look nice.

If not satisfied, feel free to change the classes directly in the JS and CSS files.

&nbsp;

Inputs
-------

These series have been built to be further designed but already implement some useful stuffs.

It automatically check whether the input is empty or not: the button is active only if the input isn\'t empty.

In any case, wrap your input into the master class:

```html
class="input-mega-wrapper"
```
Or copy/paste the outer HTML you can find in the example page.

Then set the color you want as a class of the input wrapper

- Default set of inputs

Nothing special. Just a base to a better design!

- Stretched inputs

Wrap your input into:

```html
class="input-stretcher dft-stretcher"
```
The default transition is 0.2s. Feel free to change it directly in the CSS file.

- Using FontAwesome libs

We use FontAwesome libraries in order to put some nice stuffs next to the inputs. Removing the base will just extra stretch the input.

Do not hesitate to visit their website to find the perfect drawing you\'re looking for. 

Then, add it by inserting the drawing:

```html
<i class="fa fa-YourDrawing" aria-hidden="true"></i>
```
&nbsp;

PopItUp
-----------------------------

Popups you can link before any XHTTP requests or in the case of AJAX requests success or complete events.

**How to use it**

```Javascript
            This.confirm({
                        'type' : Your_Type
            });
```

Method is called 'confirm()' and takes only one parameter, the type of popup you want.

Specify the type of popup you want. We built 3 cases:

- Success: will display a success message
- Warning: will display a warning message
- Danger: will display a danger message

Default case: a callback is fired once you clicked the popup.
You can change it directly inside the callback method of the template.

**Use it before sending**   

Just call the method before your XHTTP request. 

The request will be considered as a callback event.

**Use it as a confirmation**

Just call the method within a 'success' or a 'complete' method.

Consider the callback as a closing action.

**CSS**

You can change most of the properties directly in our MatterUi.css file.

Find classes starting by 'popups-'.

Picture Manager
----------------

This plugin manages your pictures and organise them the way you want. 

Totally responsive, you just have to call the plugin as shown here:

```Javascript
This.pictureManager({
                'nbPictures' : 6,
                'arrayPictures' : pictureArray,
                'saveMode' : 'on',
                'eraser' : false,
                'eraserAnimation' : 'slideUp'
            });
```

Demo available here:

http://www.picturemanager.colorsarefat.com/

**How it works**

It takes four or five arguments, depending on the mode you chose.

Indeed, you can either use the plugin as a like system or an eraser system. 

- Param #1: 'nbPictures'

A little bit like Bootstrap, specify the number of rows you want to use to display your pictures.
All your picture will then be organize as a function of this number, and be resized according to it.

-  Param #2: arrayPicture

This is your array of pictures. You don't have to put them in the HTML. Import them for your database for example.

- Param #3: saveMode

Takes two values: on and off. 

If 'on', an extra icon will show up on the top left. Clicking on it will show you what you previously selected.

Turn it off if you are using the eraser mode (this mode has its own saveMode built).

- Param #4: eraser

Boolean type: if true, then eraser mode is selected. Useful if you want to interact with pictures you don't want to see.
If false, like mode is enable. Use it to build your picture like system.

- Param #5: eraserAnimation

Two modes are currently built to show an animation during the erase: slideUp et moveOut.

slideUp reduces the height of the element you clicked until it reaches 0. Only the parent row is affected by this. 

moveOut clones the picture and take it over the rest. Then a right to left motion is used to take the picture out of the screen.

**Extra notes**

If using the like mode, clicking the top left heart will slightly remove all the picture you didn't like but not extra view has been built for this.
Example before clicking:

 <img src="https://cloud.githubusercontent.com/assets/14839127/20385913/ac7aa314-acb9-11e6-9451-49c3379e518e.png" width="320" align="middle">

Example after clicking:

 <img src="https://cloud.githubusercontent.com/assets/14839127/20385914/ac7ad8d4-acb9-11e6-9161-714e18736751.png" width="320" align="middle">
 
A blur is applied to pictures out of the screen. Scroll down will remove this blur.
