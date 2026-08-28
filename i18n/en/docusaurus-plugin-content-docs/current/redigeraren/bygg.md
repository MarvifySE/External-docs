---
id: bygg
title: Build your own shot
sidebar_label: Build your own shot
---
import DocVideo from '@site/src/components/DocVideo';
import DocImage from '@site/src/components/DocImage';

# Build your own shot

*The editor's camera-move builder: place stops, watch the camera glide through them, and fine-tune the result. Used for both website animations and video clips.*

The builder appears in two places, and it works the same way in both:

- In **[guided setup](./setup.md#the-motion)**, under the motion step, as **Create your own** (or **Edit animation** to start from a ready-made one). The result becomes the animation visitors see on your webpage.
- In **[Videos](./video.md#pick-a-shot)**, in the shot picker as **Build your own camera move**, or by pressing **Edit** on a ready-made shot to start from its positions. The result becomes your video clip.

The idea is the same in both: fly the camera somewhere, place a stop, fly somewhere else, place another. The finished move glides through your stops in order.

---

## Placing stops {#placing-stops}

<DocVideo src={require('@site/static/video/build-stops-v1-s.mp4').default} srcFull={require('@site/static/video/build-stops-v1.mp4').default} ratio="1540 / 1028" />

A card in the top-left corner coaches you through it, starting with *Move the camera to where the shot should begin, then place your first stop.* The bar at the bottom holds the main controls:

- **Place stop here** records the camera's current position as the next stop.
- **Aim at the middle** keeps the camera pointed at the product's middle, taking only the height from where you double-click. Use it to circle something. Untick it to aim exactly where you double-click.
- **Update stop** moves an already-placed stop to the camera's current position.
- **Undo** (or Ctrl+Z) takes back the last change.

A shot needs at least two stops, and three to five usually looks best. While you build, the camera can move completely freely, so you can compose from anywhere.

---

## Moving stops after placing them {#moving-stops}

Each stop appears as a numbered badge on the model, with the first one marked in green. Click a badge to pick that stop up; a drag handle then lets you move where the camera stands without changing what it looks at. Double-click a badge to fly the camera to that stop.

<DocImage src={require('@site/static/img/editor-bygg-handtag.webp').default} alt="The drag handle on a picked stop" width={600} />

The panel lists every stop in order. The first row is labeled **Opens here**, the rest **Stop 2**, **Stop 3** and so on. From the list you can move a stop earlier or later, remove one, or **Remove all stops** to start blank.

---

## Shaping the move {#shaping-the-move}

Picking a stop in the list opens its settings:

- **Linger** slows the camera through that stop and speeds the rest up to match, so the total length stays the same. Use it to hold on the product's best side.
- **Cut to the next stop** skips the travel and jumps straight there, fading through the background as it goes. On the last stop of a non-looping shot it becomes **Cut back to the start**, which makes the move loop.
- Once a cut exists, **At each cut** chooses between **Fade** (dips through the background color and back) and **Hard cut** (snaps straight to the next stop, punchier).

One rule the builder enforces: a stop cannot have cuts on both sides, since that would leave a still frame where the camera should be moving. The builder refuses it and tells you why.

Below the stop list:

- **Clip duration** sets how many seconds the whole move takes, whether it ends up as a webpage animation or a video clip.
- **Loop** makes the move end on the exact frame it started on, so it repeats without a visible cut. Off, it plays once and then hands over.
- **Smoothness** controls how softly the camera eases through the stops.

---

## Watching it {#watching-it}

Press **Preview** in the bottom-right corner to watch the shot so far, the way the clip above ends. Playback always starts from the first stop, and touching the model stops it so you can keep placing.

---

## Keeping or discarding {#keeping-or-discarding}

When it looks right, press **Use this shot** in the panel. **Cancel** puts everything back the way it was before you started building, including a ready-made shot you were editing.

What happens next depends on where you are:

- **In guided setup**, the move becomes your model's opening animation. You can still set how it resumes after a visitor interacts, then continue through the remaining steps.
- **In Videos**, the move becomes your clip. You continue by framing it with the mouse, setting the length, and pressing **Create clip**.
