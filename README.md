# MatterUI (old name: UnicornUI)
CSS and Javascript stuffs for MatterPHP Framework


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
