---
id: setup
title: Guided setup
sidebar_label: Guided setup
---
import DocVideo from '@site/src/components/DocVideo';
import DocImage from '@site/src/components/DocImage';

# Guided setup

*A five-step flow that gets your model ready for your website: the view visitors start at, how far they can move, the motion, and the code to paste into your page.*

When you choose to set up a model for your website in the dashboard, the editor opens in **guided setup**. Your model fills the left side of the window, and a panel on the right walks you through five steps:

1. **Camera start**: the view visitors see first
2. **Camera limits**: how close, how far, how high and how far around visitors can move
3. **The motion**: whether the model spins, plays an animation, or stands still
4. **Try it**: preview the final result in the shapes and sizes it will have on your page
5. **Save it**: name the version and make it ready for your website

<DocImage src={require('@site/static/img/editor-setup-panel.webp').default} srcFull={require('@site/static/img/editor-setup-panel-full.webp').default} alt="The guided setup flow with the model on the left and the step panel on the right" width={800} />

---

## Before you start {#before-you-start}

**Nothing is saved until the final step.** You can stop, close the tab, or start over at any point before step 5 without changing anything anyone can see. There is no draft state to clean up.

You can click the progress bars at the top of the panel to jump back to a completed step. Reloading the page restarts the flow from step 1.

> **Tip:** The book button in the top bar opens this guide at any time.

---

## Step 1: Camera start {#camera-start}

The panel asks you to set the camera's start position: the view visitors see when they begin the experience, so it is worth spending time on. Turn and zoom until the model looks its best, then save that view.

<DocVideo src={require('@site/static/video/setup-camera-start-v1-s.mp4').default} srcFull={require('@site/static/video/setup-camera-start-v1.mp4').default} ratio="1540 / 1028" />

### Aim the camera {#aim-the-camera}

Drag to turn the model and scroll to zoom. On this step you can move completely freely; no limits apply yet.

Double-click the model to tell the camera what to look at:

- With **Focus the camera on the centre** ticked (the default), the camera aims at the model's central axis and your double-click only sets the height. This makes the camera turn around the model more naturally.
- Untick it to aim exactly where you double-click instead. This is useful when the interesting part of your product is off to one side.

### Save the view {#save-the-view}

When the picture looks right, press the yellow **Set current view as camera start** button at the bottom of the window.

<DocImage src={require('@site/static/img/editor-setup-kamerastart-knapp.webp').default} alt="The yellow Set current view as camera start button under the picture" width={560} />

A camera marker labeled **Camera start** appears in the picture at the saved position. You can keep exploring afterwards. The eye button next to the yellow button flies you back to the saved view whenever you want, and pressing the yellow button again replaces the old start with the current view.

> **Note:** The button stays grayed out until you have double-clicked the model once, so the camera knows what to look at.

### The device check {#the-device-check}

The moment you save a start camera, previews of your opening view appear in the top-right corner: **Desktop** and **Mobile**. A framing that looks great on desktop can crop badly on a tall phone screen, and this catches that early. Close the previews with the **×** if they are in your way.

<DocImage src={require('@site/static/img/editor-setup-kamerastart-enheter.webp').default} alt="The desktop and phone previews of the opening view" width={544} />

### Background color {#background-color}

Below the camera controls, the panel has a **Background colour** picker. The color applies immediately so you can judge it against the model.

<DocImage src={require('@site/static/img/editor-setup-bakgrundsfarg.webp').default} alt="The background color picker" width={368} />

> **Tip:** Match the background to your website and the edges disappear, so the model looks like it is sitting straight on your page.

---

## Step 2: Camera limits {#camera-limits}

The panel now asks you to set the camera's limits. Visitors can zoom, tilt and turn your model, and this step decides how far they can go. Without limits, a visitor can zoom in far past the model's level of detail or end up at angles that flatter no product, like straight from below. Every limit works the same way: move the camera to the most extreme view you would still allow, then press **Set** on the matching row.

While you work on this step, the background temporarily turns white so the colored guide lines are easy to see. Your chosen background color is untouched and comes back afterwards.

### The limit rows {#the-limit-rows}

<DocImage src={require('@site/static/img/editor-setup-granser-panel.webp').default} alt="The limits panel with the tilt rows still locked" width={364} />

| Group | Rows | What it controls |
| ----- | ---- | ---------------- |
| **How close and how far** | **Closest**, **Furthest** | How near and how far a visitor may zoom. |
| **How high and how low** | **Highest**, **Lowest** | How far above and below the model a visitor may tilt. |
| **How far round each way** | **Left**, **Right** | How far around the model a visitor may turn. Optional. Only shown when you tick **Limit sideways rotation**. |

Two things to know about the order:

- The tilt rows stay locked until both zoom limits are set. The tilt guides are drawn between the zoom guides, so the zoom range has to exist first.
- Sideways rotation is off by default. Most models are worth seeing from every side, so turn it on only when there is a feature you would rather not show.

### Three ways to set a limit {#three-ways-to-set-a-limit}

Every row works the same way:

- **Press Set.** Captures wherever the camera is standing right now as that limit. This is the main way to work: fly to the closest you would let a visitor get, press **Set** on **Closest**, then do the same for the others.
- **Type a number** directly in the row's field. An empty field means *No limit*.
- **Drag the guide.** Each limit is drawn in the picture as a colored ring with a name tag. Click the tag to pick it up, drag to adjust, then click again (or press Escape) to put it down.

<DocVideo src={require('@site/static/video/setup-limit-drag-v1-s.mp4').default} srcFull={require('@site/static/video/setup-limit-drag-v1.mp4').default} width="85%" ratio="1920 / 1028" />

Each row also has an **eye** button that flies the camera out to that limit so you can see exactly what it allows, and an **×** button that removes the limit so you can go further and set a new one. A **Reset these limits** button appears at the bottom of the list once anything has changed, restoring the values you arrived with.

### Preview as a visitor {#preview-as-a-visitor}

At the bottom of the window, two **Preview** buttons, **Desktop** and **Mobile**, let you feel the limits the way a visitor will. The guides disappear, your background color returns, the picture takes the device's shape, and your limits are switched on. Move around and check that nothing feels cramped or too loose, then press **Back to setting limits** to keep working.

<DocVideo src={require('@site/static/video/setup-visitor-preview-v1-s.mp4').default} srcFull={require('@site/static/video/setup-visitor-preview-v1.mp4').default} ratio="1540 / 1028" />

---

## Step 3: The motion {#the-motion}

The panel asks how the model behaves at the start: what it does when a visitor first sees it. Three options, one of which is always active:

<DocImage src={require('@site/static/img/editor-setup-rorelsen-val.webp').default} alt="The three motion choices" width={364} />

| Option | What it does |
| ------ | ------------ |
| **Turntable** | A steady spin around the product. The default for a new model. |
| **Animations** | A ready-made camera move, or one you build yourself. |
| **Static** | The model stands still until the visitor touches it. |

Whatever you choose, motion **stops as soon as a visitor touches the model**.

### Turntable {#turntable}

A single **Speed** slider controls how fast the model turns. Optionally, tick **Resume animation after inactivity** and choose how many seconds of stillness pass before the spin starts again after a visitor lets go.

### Animations {#animations}

Pick from a grid of ready-made camera moves. All of them loop seamlessly:

<DocImage src={require('@site/static/img/editor-setup-rorelsen-lista.webp').default} alt="The animation list" width={364} />

| Animation | Character |
| --------- | --------- |
| **Turntable** | A steady spin around the product. |
| **Front swing** | Arcs across the front and back again. It never shows the back. |
| **Tilted orbit** | A full circle on a tilted plane, rising on one side and dipping on the other. |
| **Push-pull orbit** | Circles the product while easing in close at the front and back out behind. |
| **Head to toe** | Circles while the view rises to the top on one side and drops to the base on the other. |
| **Handheld orbit** | A slow orbit with a little drift, less mechanical than the turntable. |

Below the grid, **Configure animation** adapts the chosen move to your model: the **Distance**, **Start position** and **Height** sliders reshape the move live so you can see the effect right away. **Animation length** sets how many seconds one lap takes, and the same *resume after inactivity* option is available here too.

<DocImage src={require('@site/static/img/editor-setup-rorelsen-installningar.webp').default} alt="The animation settings" width={364} />

#### Create your own {#build-your-own}

If none of the presets fit, press **Create your own** to start with a blank path, or **Edit animation** to adjust the selected one by hand. The panel switches to a builder where you place camera stops one by one, and the finished move glides through them in order. Tick **Loop** if the move should repeat until the visitor interacts. Press **Use this shot** to keep the move, or **Cancel** to return to whatever was selected before.

It is the same builder used for making video clips, and it has [its own guide](./bygg.md).

### Previewing the motion {#previewing-the-motion}

Whenever there is motion to watch, **Desktop** and **Mobile** preview buttons appear at the bottom of the window, just like on the limits step. The active button fills up as the move plays. Every press restarts the motion from the beginning.

---

## Step 4: Try it {#try-it}

The panel asks you to preview your final result, and this step is the real thing: your start camera, your limits, your background and your motion, all live at once, exactly as a visitor will experience them. Move around and make sure it feels right.

The bar at the bottom of the window lets you preview in the shapes and sizes the model will actually have on your page:

<DocImage src={require('@site/static/img/editor-setup-testa-former.webp').default} alt="The shape and size row" width={640} />

- **Shapes:** **Fit** (the full editor window), **Wide** (16:9), **Classic** (4:3), **Square** (1:1), **Portrait** (4:5), **Phone** (390×844) and **Custom**.
- **Sizes:** **Large**, **Medium** and **Small** for each shape.
- **Custom** replaces the sizes with exact pixel fields, so you can type the precise width and height the model will have on your page. A caption tells you whether it is being shown at actual size or scaled down to fit your window.

<DocImage src={require('@site/static/img/editor-setup-testa-egen.webp').default} alt="The custom size fields" width={640} />

A **Reset view** button in the bottom-right corner takes you back to the start camera whenever you have wandered off.

The panel shows **What you changed**: a list of every setting this session touched, old value struck through, new value highlighted. If you opened an existing version, this is your last easy chance to review the differences before saving over it.

---

## Step 5: Save it {#save-it}

What the panel shows depends on whether you are saving a brand-new version or updating an existing one.

### First save: give it a name {#give-it-a-name}

Your model already has a name in Marvify's system. The name you type here is joined to it as `model@name`, and that full id is what displays this version on your webpage. One model can have as many named versions as you like, so pick something that says what this one is for, like `web` or `campaign-spring`.

<DocImage src={require('@site/static/img/editor-setup-spara-namn.webp').default} alt="The name field with the full id shown below it" width={364} />

Names use lowercase letters, numbers, dashes and underscores, with no spaces, and must start with a letter or number. The names `default` and `defaults` are reserved. As you type, the panel shows the full id your version will be known as. Press **Save it**.

### Updating an existing version {#updating-an-existing-version}

If you opened a version that already has settings, the panel offers two ways to save your changes:

- **Update** overwrites the old settings with your changes. Everywhere that `model@name` is used will update to the new settings.
- **Save as new** keeps the old version untouched and saves your changes under a new name. The naming field from above appears.

Choosing **Update** asks you to confirm (*Replace these settings?*), because the settings being replaced **cannot be recovered afterwards**. If you are unsure, **Save as new** is always the safe choice.

### Ready to go {#ready-to-go}

The moment the save lands, a card appears with what your website needs: the two code snippets that display the model, with your real `model@name` id filled in, **Width** and **Height** fields that update the code live, **Copy** buttons for each piece, and a link to the documentation.

<DocImage src={require('@site/static/img/editor-setup-spara-kort.webp').default} alt="The saved card with the documentation link and the two code snippets" width={620} />

Putting that code on your website is the next step, after the editor. The integration guides show exactly how on [Shopify](../exempel/shopify.md), [WooCommerce](../exempel/woocommerce.md), or a [general webpage](../exempel/webpage-integration.md). For everything the viewer can do (sizing, autoplay, analytics, carousels, VR), see the [Marvify Viewer reference](../snabbstart/marvify-viewer.md).

If you started this flow from the dashboard's website wizard, that tab has been listening: it moves forward automatically with your saved version. Either way, you can close the editor tab. To change anything later, open the same model from your dashboard and pick this version's name.

---

## Good to know {#good-to-know}

- **Why can I fly anywhere in the early steps but not later?** On steps 1 and 2 you are choosing the limits, so the camera is unrestricted. You can't set a boundary you can't reach. From the moment you preview (and on steps 4 and 5), your limits are switched on so you experience exactly what a visitor will.
- **The guide rings are never shown to visitors.** They exist only in the editor, only while you set limits.
- **The white background while setting limits is temporary.** Your chosen background color is untouched and returns in previews and later steps.
- **The summary panel** above the Back/Continue buttons keeps a running list of your choices on every step. Open it any time to see where you stand. Values you haven't set yet show as *Not set yet*.
- **Guided setup only touches website-readiness settings.** Hotspots, info cards and other content on the model are left exactly as they were.
