---
layout: post
title: Towards QuPath v0.2.0
author: Pete Bankhead
---

**This page describes QuPath v0.2.0-m1, which you can [download here](https://github.com/qupath/qupath/releases/tag/v0.2.0-m1)**.

> It is mostly written for people who already know the software. If it is entirely new to you, you might want to check out [this](https://github.com/qupath/qupath/wiki) first.


## What has been happening since v0.1.2?

_QuPath_ v0.1.2 was released in December 2016, at the end of my time at Queen's University Belfast.

They were simpler times. The software had only just become publicly available and didn't have many users yet.

Now in March 2019, _QuPath_ v0.1.2 has had more than 28,000 downloads and is used by groups all over the world. It has been applied in almost [70 publications](https://github.com/qupath/qupath/wiki/Citing-QuPath) so far.

After a short time outside academia, I took up a PI position at the University of Edinburgh in September 2018 and restarted work on _QuPath_.

<!-- In a few days I will talk about _QuPath_ in the US for the first time at [Tri-Con](https://www.triconference.com/Digital-Pathology), before heading to the [La Jolla Institute for a workshop](https://groups.google.com/d/msg/qupath-users/LAYE3Gsr7S0/Uua5ZkOxAQAJ). -->

This is now the first _milestone_ release from Scotland: _QuPath v0.2.0-m1_.

## Why is this called a 'milestone'?

In short, [because it's not quite finished](https://en.wikipedia.org/wiki/Software_release_life_cycle#Stages_of_development).

Milestone versions exist to make new features available now to the curious or adventurous, but should be used with caution. There are more changes, bug fixes and improvements planned before it is finalized.

I'm pretty excited about some of the new things and I hope you'll like them.

> **Why not alpha or beta?**
>
> Because there are more numbers than Greek letters...
>
> The aim is to update (quite) rapidly to fix issues as they emerge. The 'milestone' status is indicated by the -m1 tagged on to the end of the version number.  The next update should be -m2, then -m3... and so on until the software is deemed stable enough to ditch the 'milestone' status entirely.
>
> Then work begins on the _next_ version...


## What's new in v0.2.0?

Firstly, everything I blogged about [here](https://petebankhead.github.io/qupath/2018/03/19/qupath-updates.html) should be included.  But there is _much_ more...

### Pixel classifier
**Probably the biggest new feature is the _Pixel classifier_.**

If you just want to quantify stained areas, this is for you. But it opens up a lot more possibilities.

It works quite like the existing object classifier... but doesn't need objects.  Here it is in action:

<iframe width="560" height="315" src="https://www.youtube.com/embed/x3X_xzNUwAY" frameborder="0" allowfullscreen></iframe>{: .shadow-image}

You can interactively adjust the resolution, features, classifier type and parameters, as well as visualize the features and classification results as ImageJ stacks.

The pixel classifier should also automatically provide area measurements within annotated regions, or you can also use it to generate new annotations (either across the whole image or within a pre-annotated region). If you like, you can feed through the pixel classification and apply it to overlapping detections.

> To help help make this work smoothly, there are some new **special classifications**:
> * **Region** for defining an area of interest, but which _shouldn't_ influence the classifier.
> * **Ignore** for defining areas that _shouldn't_ be used to calculate area proportion results or generate annotations (e.g. background/whitespace).
>
> [
![New classifications]({{ site.baseurl }}/images/v0-2-0-milestone/special-classes-cropped.jpg){: .shadow-image .max-width-40}
]({{ site.baseurl }}/images/v0-2-0-milestone/special-classes.jpg)


> Also, if an annotation is [_locked_](https://github.com/qupath/qupath/wiki/Working-with-objects#editing--locking-objects) then it is not used to train the pixel classifier. This means you can finally have classified annotations that don't thwart your future attempts at training a new classifier.


### Channel viewer
It can be very hard to see exactly what is in your image whenever you have multiple color channels.

An ostensibly simple task like 'manually count the double positive cells' can become _very_ awkward whenever brightness/contrast settings trick the eye.

v.0.1.2 helped a bit by letting you [toggle channels on or off quickly just by pressing the corresponding number key](https://github.com/qupath/qupath/wiki/Changing-colors).

Now, there is also _View &rarr; Mini viewers &rarr; Show channel viewer_ command that lets you see _all channels at once_.

<iframe width="560" height="315" src="https://www.youtube.com/embed/kCt8XIihuus" frameborder="0" allowfullscreen></iframe>{: .shadow-image}

### Annotation improvements

The annotation tools in v0.2.0 are getting better.

First, by popular demand (from @Tkilvaer [here](https://github.com/qupath/qupath/issues/228)) there is a _Polyline tool_. Until I get around to making a better icon, it is a 'V' on the toolbar - so that is also the shortcut.

There are also more options to control the _Wand_ sensitivity and smoothing in the preferences.

The _Point tool_ behaves better that previously, and in the _Preferences_ the new _Use multipoint tool_ option lets you specify if it should create new points on every click or add to existing point collections.

But **my favorite new annotation feature** is the _Ctrl + Shift_ or _Cmd + Shift_ trick. This can be used to automatically clip an annotation so that it doesn't overlap with an existing annotation, _or_ doesn't extend beyond an existing parent annotation.

<iframe width="560" height="315" src="https://www.youtube.com/embed/gkVWvF7rUwA" frameborder="0" allowfullscreen></iframe>{: .shadow-image}

> An increasingly common use for QuPath is to annotate images to train AI algorithms.
>
> _Extensions &rarr; AI &rarr; Export training regions_ is a work in progress to help export annotations as deep learning-friendly labelled images. But for full control, you're still likely better off [scripting](https://petebankhead.github.io/qupath/scripting/2018/03/14/script-export-labelled-images.html).


### Classifying detections

An occasional [question on the forums](https://groups.google.com/forum/#!topic/qupath-users/R4vvUcuHHcM) has been whether it's possible to manually fix misclassified detections.

Like with so many questions, the answer was always 'not really... just with a script'. The reason being that it is more reproducible to create a classifier, and setting classifications manually should be discouraged.

A subsequent shift in values and perspective has led me to believe QuPath ought to leave that decision up to you. So now, _Set class_ works for detections too.

### Selection mode

Taking the above to another level is _Selection mode_ - the _S_ on the toolbar. This turns the normal drawing tools into selection tools, and combined with 'Auto set' can further convert them into classification tools.

<iframe width="560" height="315" src="https://www.youtube.com/embed/G2ZqLE5QDyk" frameborder="0" allowfullscreen></iframe>{: .shadow-image}


### Bio-Formats
Previously, if you wanted [Bio-Formats](https://www.openmicroscopy.org/bio-formats/) support you needed to install it as a separate extension.

Now, Bio-Formats comes with QuPath - no separate installation necessary.

This not only gives you immediate access to the many file formats Bio-Formats supports, but also the ability to write OME-TIFF images - [including pyramidal images](http://blog.openmicroscopy.org/file-formats/community/2018/11/29/ometiffpyramid/).

This option exists under _File &rarr; Export region_.

> Huge thanks to the OME team for the fantastic work they do in making the open source readers and writers needed to make open bioimage analysis possible!

### OMERO

Managing large collections of images is extremely difficult - not least if they are whole slide images.  OMERO is another impressive output from the OME team [OMERO](https://www.openmicroscopy.org/omero/) that offers an open source solution to that problem.

QuPath now has preliminary support for reading images directly from OMERO - acting just like a web viewer, without needing to download the whole slide. But, unlike most web viewers, you get all the annotation and analysis tools of QuPath.

Here's a demo showing an image being opened from  [IDR](https://idr.openmicroscopy.org/about/), before applying the new polyline & pixel classification tools:

<iframe width="560" height="315" src="https://www.youtube.com/embed/IzfYbQhJtkg" frameborder="0" allowfullscreen></iframe>{: .shadow-image}


> OMERO integration is at quite an early stage: it's not possible to send images _back_ to OMERO or handle non-RGB images. There might also be some troubles when logins are required. But it may be useful even now, and shows how to connect QuPath to read remote images.


### image.sc
The recommended place to ask question is now [forum.image.sc](https://forum.image.sc/tags/qupath).

This is a bigger, brighter user forum for multiple bioimage analysis software applications, but you can still find posts tagged 'qupath' specifically if that's all you are interested in.

This means the [QuPath Google Group](https://groups.google.com/forum/#!forum/qupath-users) is retiring; _Help &rarr; View user forum_ now points to [image.sc](https://forum.image.sc/tags/qupath) as well.


### Cell detection

Cell detection is one of the most commonly-used commands in _QuPath_.

It has been kept _mostly_ the same, but a few small changes were necessary and it is important to be aware that the results generated may not be _exactly_ the same as in previous versions (but they should be similar). Specifically, the changes are:
* Measurements are made across all stains that have been set for brightfield images (not just hematoxylin and DAB)
* For brightfield images, the background value is now incorporated into the stain separation (previously it wasn't for cell detection)
* On rare occasions, smoothing cell or nucleus boundaries could result in boundaries being smoothed away into nothing... such cells are now removed
* The 'requested pixel size' is now used directly; previously, it was snapped to a power of 2. This means you have more control over the resolution at which the cell detection is performed.

For these reasons, you shouldn't mix cell detections (and cell classifiers) from old versions of QuPath with the detections here.  They look (and behave) very similarly - but they are not quite identical.


### Projects
Projects have been thoroughly revised.

If used to be that inside the project was a 'data' subdirectory, and a lot of `.qpdata` files - and each file had the same name as an image.

Now, there is still a 'data' subdirectory, but it is full of bizarrely-named sub-sub-directories - one per image.

_Why?_

Firstly, it avoids the requirement that every image in a project must have a unique name. Secondly, it makes it possible to store more useful information about images than whatever can be squeezed into a .qpdata file... which will enable other improvements in the future.

Two things to note for now:
* In the _Preferences_ you can now select _Mask image names in projects_. If your analysis might be biased by seeing the filenames all over the user interface, this could help keep things right.
* You can find the `.qpdata` file by right-clicking on the entry in the user interface

Here's a screenshot showing both of these in action:

![New classifications]({{ site.baseurl }}/images/v0-2-0-milestone/projects.jpg){: .shadow-image .max-width-80}


A side effect is that it's now also a bit easier to read `ImageData` within a script, e.g.

```groovy
def project = getProject()
for (entry in project.getImageList()) {
    def imageData = entry.readImageData()
    print imageData.getHierarchy().getAnnotationObjects()
    imageData.getServer().close() // best to do this...
}
```


### Somewhat technical (but important!) things

### Speed & stability

Many of v0.1.2's performance woes could be traced back to that little 'Hierarchy' tab on the left of the screen, which try to give you a 'tree view' of the hierarchy.

If you had a lot of objects (e.g. many cells), and then QuPath would suddenly hang, there is a strong change that tree view was responsible - especially if you had just been selecting objects.

A few steps have been taken to try to avoid this being troublesome:
* Right-click on the tree to set the _Detection display_. If detections are _Hidden_, then they can't cause nearly as much performance trouble. (They are hidden only in the tree - you can still see them on the image.)
* The tree previously tried to make sure that the objects selected in the image were synchronized on the tree... now it doesn't.  You can still select multiple objects in the tree, but if you select multiple objects in the image only the 'main' selected object will be selected in the tree.

If this makes little sense, feel free to ignore it. Synopsis: _QuPath_ should behave better and faster.

### Java 11
_QuPath_ now uses Java 11 rather than Java 8.

This is a _big_ change, which means that QuPath can more easily keep up to date with the latest Java improvements.


### ImageServers
QuPath reads pixels and metadata from something called an `ImageServer`.

This needed to be _very_ thoroughly revised for several reasons:
* They didn't support channel names
* It wasn't possible to set metadata (e.g. missing pixel sizes)
* All the caching happened elsewhere... making lots of little pixel requests, this could be very slow
* Writing a new `ImageServer` was too hard

The changes address many of these problems.

#### OpenCV
QuPath previously used (or tried to use) the original OpenCV Java bindings, but this was hard to maintain across different platforms and some things just didn't quite work.

Now, QuPath uses [JavaCPP](https://github.com/bytedeco/javacpp-presets/tree/master/opencv), and has been updated to OpenCV 4.0.1 (from 3.1.0). This makes OpenCV _much_ easier to use from commands and scripts.

Some of the new features, like the pixel classifier, depend on this.

#### Java Topology Suite
A new dependency in QuPath is [_Java Topology Suite_ (JTS)](https://github.com/locationtech/jts).

This makes it much easier to do fancy things with shapes, and made it possible to incorporate many improvements to the reliability and performance of the object hierarchy.

Scripters might like to know you can also easily change between any QuPath ROI and a JTS [Geometry](https://locationtech.github.io/jts/javadoc/org/locationtech/jts/geom/Geometry.html):

```groovy
def pathObject = getSelectedObject
def roi = pathObject.getROI()
def geometry = roi.getGeometry()
```

Similarly, you can convert _most_ ROIs (i.e. not point ROIs) into [java.awt.Shape](https://docs.oracle.com/en/java/javase/11/docs/api/java.desktop/java/awt/Shape.html) objects as well:

```groovy
def shape = roi.getShape()
```

#### Object hierarchy & measurements

> _A somewhat involved technical note... not everyone needs to know it_

QuPath stores objects in a hierarchy, which is documented in detail [here](https://github.com/qupath/qupath/wiki/Object-hierarchies).

This has proved pretty successful, but it has some weird idiosyncrasies that can be confusing - _especially when annotations overlap one another_. The rules were:
* If _Annotation A_ is completely contained inside _Annotation B_, then _Annotation A_ is a descendant of _Annotation_B_.
* If the _centroid_ of a detection is inside an annotation, then the detection is a descendant of the annotation
* Summary measurements derived from counting up detections (e.g. the number of positive cells in an annotation) are calculated by looking through the descendants of the annotation.

Generally, that works fine because annotations don't normally overlap - or, if they do, not usually in terribly important ways.

However, it is possible to have detections located inside overlapping annotations; in that case, you can't tell just by looking at the image what is a descendant of what. In that case the measurements can be surprising. For example, it's possible to see this in v0.1.2:

[
![New hierarchy measurements]({{ site.baseurl }}/images/v0-2-0-milestone/hierarchy_old.jpg){: .shadow-image .max-width-80}
]({{ site.baseurl }}/images/v0-2-0-milestone/hierarchy_old.jpg)

The hierarchy remains (at least for now), but its behavior has changed somewhat:
* The 'completely contained' rule has been replaced by the [_covers_ predicate from Java Topology Suite](https://locationtech.github.io/jts/javadoc/org/locationtech/jts/geom/Geometry.html#covers-org.locationtech.jts.geom.Geometry-) for better performance and consistency
* Summary measurements based on detections _check if the centroid location of each detection falls within the annotation - regardless of whether it is a descendant or not_.

Basically, if it looks like a cell is inside the region then it should be counted - no matter what else is going on with the hierarchy. So the same arrangement of objects as above gives these measurements:

[
![New hierarchy measurements]({{ site.baseurl }}/images/v0-2-0-milestone/hierarchy_new.jpg){: .shadow-image .max-width-80}
]({{ site.baseurl }}/images/v0-2-0-milestone/hierarchy_new.jpg)

I think that ultimately this is more intuitive, **but it is an important change**.  Please explore and give feedback if you a) prefer it, b) would rather have the old way, or c) find any bugs.

> There can still be surprises using the 'covers' rule, for example when drawing inside a 'hole' that is within a larger annotation. In general, it is best try things out and check what it does... and also report any bugs.

> **Note for scripters:** If you change the object hierarchy, you **must** remember to fire a hierarchy update before making measurements... otherwise it won't know to update its spatial map of where everything is, which is essential to get the measurements correct.
>
> You should fire update events anyway, but now it is even more important.


#### Constructing objects and ROIs
If you need to create ROIs or PathObjects in scripts, you can (and should) do it now with the helper classes `ROIs`, `PathObjects` and `ImagePlane`:

```groovy
import qupath.lib.regions.ImagePlane
import qupath.lib.roi.ROIs
import qupath.lib.objects.PathObjects

int z = 0
int t = 0
def plane = ImagePlane.getPlane(z, t)
def roi = ROIs.createRectangleROI(0, 0, 10, 10, plane)
def pathObject = PathObjects.createDetectionObject(roi)

print pathObject
```


#### A _user directory_, not an _extensions directory_
Previously, if you dragged a `.jar` file onto QuPath it could be installed in a specific _extensions directory_.

This was necessary to add Bio-Formats, for example.

You don't need to install Bio-Formats separately any more, but the extensions directory lives on... kind of. It is now actually a sub-directory inside a general 'user directory'.

_Why does that matter?_

Because the user directory is more general, it can also store other things. For example, in the _Preferences_ there is a _Create log files_ option, and those logs go in the user directory.

Other uses for the user directory are likely to emerge in the future. For example, it would be nice to be able to store things like default lists of classifications or stain vectors. That isn't possible yet... but it could be one day.

> **Old extensions may not be compatible!**
>
> In particular, **don't install the old Bio-Formats extension** - it's no longer needed, and can only cause trouble.


<!-- ### Javadocs
The javadocs -->


## What's still to come?

There are many more things that need to be done, some more visible than others:
* Tame the pixel classifier, make it scriptable, & add advanced options
* Make it possible to reload pixel classifications
* Recreate the object classifier to behave more like the pixel classifier
* Overhaul the menu structure to remove less useful things & make the important parts easier to find
* Overhaul scripting in general to make it easier to do better things
* Easier exporting of annotation results
* Refactor the code to make it more logical (developers be warned: the API is _not_ stable yet!)
* Cache histograms when loading images in a project (which should make opening images faster)
* Support transformed image servers natively in projects (e.g. rotations, cropping, color transforms)

These may not all make it into v0.2.0.

But, if not, v0.3.0 should not be so far away...


## Will v0.1.2 and v0.2.0 be compatible?
In some ways, but not all.

You should be able to read `.qpdata` files from v0.1.2 in v0.2.0-m1.  

But you _can't_ read v0.2.0-m1 projects in earlier versions.

**You should beware of making any changes to old projects with v0.2.0-m1 as this could make them incompatible with v0.1.2.**

And because of the cell detection changes, you may not get identical results when using different versions.

> **As a general rule, for any project it is best to stick to the same version of the software and carefully check the results yourself.**

And do keep in mind that milestone releases are works-in-progress - so don't rely on things remaining unchanged. On the other hand, you can influence the direction of any changes by giving feedback!
