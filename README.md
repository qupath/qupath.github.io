<!-- ![]({{ site.baseurl }}/images/qupath-banner.jpg){: .center-image .max-width-100 } -->

<!-- ## QuPath -->

**_QuPath_ is an open, powerful, flexible, extensible software platform for bioimage analysis.**

----

## January 2022: QuPath v0.3.2 now available!

This is a *minor* update that aims to be fully compatible with v0.3.0 and v0.3.1 -- but contains some important bug fixes and performance improvements.

**Download QuPath v0.3.2 [here](https://github.com/qupath/qupath/releases/tag/v0.3.2)!**

## December 2021: QuPath v0.3.1 now available!

This is a *minor* update that aims to be fully compatible with v0.3.0 -- but contains some important bug fixes and performance improvements.

**Download QuPath v0.3.1 [here](https://github.com/qupath/qupath/releases/tag/v0.3.1)!**

## September 2021: New QuPath API docs

To coincide with the release of [v0.3.0](https://github.com/qupath/qupath/releases/tag/v0.3.0), QuPath's API docs are finally online at [http://qupath.github.io/javadoc/docs](http://qupath.github.io/javadoc/docs).

These give an overview of all the public methods in the main QuPath code, and may be useful for anyone writing custom scripts or extensions.

## September 2021: QuPath v0.3.0 now available!

### Release highlights
* **New 'Create density map' command** to visualize hotspots & generate annotations based on object densities
* **_Many_ code fixes** & **major performance improvements** - especially for pixel classification
* **Revised code structure**, with non-core features now separated out as optional **extensions**
* **Rotate images** in the viewer 360&deg;
* **Easier OpenCV scripting** with many new methods in `OpenCVTools`
* **New build scripts**, now with **continuous integration** via GitHub Actions
* **Groundwork for new features** coming soon...

**Download QuPath v0.3.0 [here](https://github.com/qupath/qupath/releases/tag/v0.3.0)!**

![QuPath screenshots]({{ site.baseurl }}/images/qupath_v0.2.0_larger.jpg){: .center-image }

**Please remember to cite the QuPath paper if you use it in your work!**

Bankhead, P. et al. **QuPath: Open source software for digital pathology image analysis**. _Scientific Reports_ (2017). [https://doi.org/10.1038/s41598-017-17204-5](https://doi.org/10.1038/s41598-017-17204-5)
{: .side-note .center-image}

## March 2021: We need your help!

It's grant application time again -- which means planning for the future and trying to convince funding bodies that [QuPath](http://qupath.github.io) is important.

**Please help us by completing our [QuPath User Survey](https://edinburgh.onlinesurveys.ac.uk/qupath-user-survey-2021)!**

By participating, you not only help us to establish QuPath's continued existence, but also to shape our priorities. This isn't just about adding new software features and improving the existing ones: we'd really appreciate your views on training opportunities, support models, research collaborations, and community events as we aim to make the software as useful as possible for researchers worldwide.

**Thanks!**


## September 2020: New updates released

QuPath v0.2.3 is [available here](https://github.com/qupath/qupath/releases/latest).

This is a *minor release* focused on fixing bugs; see [the changelog](https://github.com/qupath/qupath/blob/master/CHANGELOG.md) for details.

## June 2020: QuPath v0.2.0 now available!

**The first Edinburgh release of QuPath is [available here](https://github.com/qupath/qupath/releases/latest)**.

More than three years since v0.1.2 and *a lot* has changed. <br/>
Highlights include:
* Entirely new pixel classifier ([link](https://qupath.readthedocs.io/en/latest/docs/tutorials/pixel_classification.html))
* Rewritten object classifiers ([link](https://qupath.readthedocs.io/en/latest/docs/tutorials/cell_classification.html))
* New methods of thresholding images ([link](https://qupath.readthedocs.io/en/latest/docs/tutorials/thresholding.html))
* New & improved tools to create & adjust annotations ([link](https://qupath.readthedocs.io/en/latest/docs/starting/annotating.html))
* Much more support for multiplexed images ([link](https://qupath.readthedocs.io/en/latest/docs/tutorials/multiplex_analysis.html))
* Updated object hierarchy ([link](https://qupath.readthedocs.io/en/latest/docs/concepts/object_hierarchy.html))
* Bigger, better, smarter projects ([link](https://qupath.readthedocs.io/en/latest/docs/tutorials/projects.html))
* Export images & annotations, including pyramidal OME-TIFFs ([link](https://qupath.readthedocs.io/en/latest/docs/advanced/exporting_images.html))
* *Many* bug fixes, performance improvements... and a lot more ([link](https://github.com/qupath/qupath/blob/master/CHANGELOG.md))

Find the full documentation at [https://qupath.readthedocs.io](https://qupath.readthedocs.io)

> **Important!** It is not recommended to mix different version of QuPath for analysis. If you started a project in v0.1.2, it is probably best to continue with that version - or start again with v0.2.0.


----

## Other news

### April 2020: QuPath webinar at NEUBIAS Academy
The QuPath webinar at [NEUBIAS Academy](https://neubiasacademy.org/) is now [on YouTube](https://youtu.be/4An5n6Y_rRI).

### April 2020: *From Samples to Knowledge* workshop online
Videos from the recent QuPath workshop held at the La Jolla Institute for Immunology are now on [YouTube](https://www.youtube.com/playlist?list=PLlGXRBscPbCD89fRULm4peopF57qugciN)

----

_QuPath_ is developed at the <a href="https://www.ed.ac.uk/pathology">University of Edinburgh</a>.

The software was originally created at the <a href="http://www.qub.ac.uk/research-centres/CentreforCancerResearchCellBiology/">Centre for Cancer Research & Cell Biology</a> at <a href="http://www.qub.ac.uk">Queen's University Belfast</a>, as part of research projects funded by <a href="http://www.investni.com">Invest Northern Ireland</a> and <a href="http://www.cancerresearchuk.org">Cancer Research UK</a>.
