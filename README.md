# Angular UI Tabs

## Install

`$ npm install @pevil/ng-tabs`

## Usage

### Import

First, import the provided module:

```
import { NgTabModule } from '@pevil/ng-tabs';

@NgModule({
    imports: [NgTabModule]
})
export class Module {}
```

### Building a set of tabs

3 directives are provided:
* pvlTabGroup
* pvlTab
* pvlTabPanel

First, an example of how to use them together, with more detail below

```
<ul pvlTabGroup [tabPanel]="characterPanel">
    <li pvlTab [tabId]="'a'">
        View A
        <ng-template><a-component></a-component></ng-template>
    </li>
    <li pvlTab [tabId]="'b'">
        View B
        <ng-template><b-component></b-component></ng-template>
    </li>
    <li pvlTab [tabId]="'c'">
        View C
        <ng-template><img [src]="c" /></ng-template>
    </li>
</ul>

<div>some other optional content that maybe you want to place before the tab panel</div>

<ng-template pvlTabPanel #putContentHere="pvlTabPanel"></ng-template>
```

For a more concrete example, see [here](https://github.com/Pevil/ng-tabs/blob/master/demo/src/demo.component.ts) or [here](https://embed.plnkr.co/1uobXAT1HiGv8YTpz8KS)

*pvlTabGroup*

Use this to define a group of tabs that belong together. Here, we're defining an \<ul\> element as the group, where each
child with the pvlTab directive (in this case each \<li\> element), is a part of this tabGroup.

The [tabPanel] input expects a reference to the panel where we want to render these tabs.
The optional [initialTab] input expects a string matching the tabId of whichever tab should be displayed first. If none is provided, the first tab's contents will be the default.

*pvlTab*

As described above, we want to apply the pvlTab directive to each element that describes a tab. In this case we have 3 \<li\> elements, where the tabs themselves will display [View A, View B, View C]. Each element with a pvlTab directive also uses an <ng-template> to define the data that should be rendered in the panel when the tab is selected.

The [tabId] input expects a string id, unique to the other tabs in this tab group.

Whichever tab is active will have the css class `.pvl-active-tab` applied to it

*pvlTabPanel*

Apply this to an \<ng-template\> element, wherever you want the content defined by each tab to render. Also remember to grab a reference to the directive, in order to pass that as an input to the tabGroup directive (in our example, we did that with #putContentHere="pvlTabPanel")

## Demo
Run local demo by:
1. Cloning the repo
2. Run `$ npm run build.all`
3. `cd demo`
4. `python3 -m http.server 4300`
5. open localhost:4300 in a browser

OR
visit this [plunkr](https://embed.plnkr.co/1uobXAT1HiGv8YTpz8KS)
