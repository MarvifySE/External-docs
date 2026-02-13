---
id: vr-guide
title: How to use the Model Viewer in VR
sidebar_label: VR Experience
---

# How to use the Model Viewer in VR

This guide explains how to enable and use the VR feature in the Marvify Model Viewer. VR allows visitors to explore products in an immersive environment using WebXR compatible browsers and devices such as VR headsets.

The VR feature is optional and only activates on supported hardware. On regular desktop and mobile browsers, the viewer behaves like a standard interactive 3D experience.

If you have not yet embedded the Marvify viewer on your website, start with the technical documentation and basic setup guide before continuing.

- [Technical documentation](https://docs.marvify.io/en/snabbstart/marvify-viewer/)
- [Sample setup guide](/en/exempel/webpage-integration)

<p align="center">
  <video
    width="60%"
    autoPlay
    loop
    muted
    playsInline
  >
    <source
      src={require('@site/static/img/vr.webm').default}
      type="video/webm"
    />
    Your browser does not support the video tag.
  </video>
  <em
    style={{
      display: 'block',
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      color: '#666'
    }}
  >
    VR example
  </em>
</p>

Virtual Reality adds an immersive layer to the Marvify Model Viewer for both website visitors and in person audiences. Instead of viewing products on a screen, VR allows visitors to explore them in a more engaging and memorable way using natural movement and controllers.

This makes VR especially useful at trade fairs, showrooms, and brand events, where space is limited. With VR, you can showcase your full product range without transporting or displaying every physical item, allowing visitors to explore your collection in a compact and interactive format.

## 1. Enable VR on the viewer

VR support is enabled using the `enable-vr` attribute on the `<marvify-model-viewer>` element. When this attribute is present, the viewer exposes an Enter VR button on devices and browsers that support WebXR.

```html
<marvify-model-viewer
  model-id="your-model-id"
  enable-vr="true"
  style="width: 400px; height: 400px">
</marvify-model-viewer>
```

If the device does not support VR, the button will not appear and the viewer continues to function normally in 3D.

**Tip:** You can preview and debug the VR experience in a desktop browser using the [Immersive Web Emulator](https://chromewebstore.google.com/detail/cgffilbpcibhmcfbgggfhfolhkfbhmik?utm_source=item-share-cb) Chrome extension. This is useful for development and layout testing when a headset is not immediately available.

## 2. Entering VR as a user

On a compatible headset, the viewer displays an Enter VR button after the model has loaded. Selecting this button switches the experience from the webpage into immersive VR mode.

While in VR, users can:

- Rotate the model using VR controllers
- Pan around the object
- Zoom in and out within allowed limits
- Exit VR and return to the webpage at any time

Interaction behavior is handled automatically by the viewer and adapts to the available input methods on supported XR devices.

## 3. Adjusting model distance and height in VR

When entering VR, the viewer automatically places the model at a default distance based on the object's size. In many cases this works well without additional configuration.

Depending on the product, some manual adjustment may be needed to achieve a comfortable and well framed starting position.

Marvify provides dedicated VR attributes to control how the model appears when a user enters VR:

- `vr-user-distance` controls how far the model is placed from the user
- `vr-user-height` adjusts the vertical offset relative to the user

```html
<marvify-model-viewer
  model-id="your-model-id"
  enable-vr="true"
  vr-user-distance="1.8"
  vr-user-height="0.1">
</marvify-model-viewer>
```

## 4. Controlling zoom limits in VR

In VR, very close inspection can reduce visual fidelity or feel uncomfortable. You can restrict how close or far users can move using VR specific zoom limits.

- `vr-minZoom` prevents users from getting too close
- `vr-maxZoom` limits how far users can move away

```html
<marvify-model-viewer
  model-id="your-model-id"
  enable-vr="true"
  vr-minZoom="0.6"
  vr-maxZoom="3">
</marvify-model-viewer>
```

These values are relative to the model size and should be tested using a real headset to ensure comfort.

## 5. Testing VR during development

VR tuning should always be validated using real hardware. Desktop previews and emulators are useful for development, but cannot fully represent comfort and interaction in immersive mode.

When testing with your own models in development environments, a Marvify development token is required. Instructions for creating and using dev tokens are available in the technical documentation.

## 6. Supported devices and limitations

The VR feature relies on WebXR and is only available on supported browsers and hardware. Typical supported setups include:

- Standalone VR headsets with a WebXR compatible browser
- Desktop browsers with connected VR hardware

Enabling VR does not force VR usage. Visitors without compatible devices still receive the standard 3D viewer experience.

## 7. Recommended workflow

A typical VR setup process looks like this:

- Embed the Marvify viewer normally on your page
- Enable VR using `enable-vr`
- Test the default VR positioning
- Adjust distance, height, and zoom limits per model
- Validate comfort before publishing

There is no single correct configuration. Each product benefits from individual tuning to ensure a clear and comfortable VR experience.
