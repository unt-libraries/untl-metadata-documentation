######
Format
######


.. _format-definition:

**********
Definition
**********

The digital manifestation of the resource


.. _format-sources:

******************************************
Where Can the Format Information be Found?
******************************************

Format is determined by examining the item


.. _format-form:

**************************************
How Format Works in the Metadata Form
**************************************

.. image:: ../_static/images/edit-format.png
   :alt: Screenshot of format element in metadata editing system.

Parts:
	Format -- drop-down menu

Repeatable?
    No

Required?
	 Yes - also see (:doc:`more information </minimally-viable-records>`) about required field

	 
.. _format-fill:

***********************************
How Should the Format be Filled in?
***********************************

-   Select the correct format from the `controlled vocabulary <https://digital2.library.unt.edu/vocabularies/-formats/>`_ 

+-----------------------------------------------------------------------+---------------------------------------+
| **Guideline**                                                         | **Examples**                          |
+=======================================================================+=======================================+
|The format should match the broad :doc:`resource type                  |                                       |
|</fields/resource-type>` for the item:                                 |                                       |
+-----------------------------------------------------------------------+---------------------------------------+
|    -      Books, yearbooks, letters, newspapers, theses and           |text - Text                            |
|           dissertations and other text                                |                                       |
+-----------------------------------------------------------------------+---------------------------------------+
|     -     Artwork, posters, maps, photographs, scores, etc.           |image - Image                          |
+-----------------------------------------------------------------------+---------------------------------------+
|     -     For "physical object" use the format "image"                |image - Image                          |
+-----------------------------------------------------------------------+---------------------------------------+
|     -     If none of the format types fits, choose "other"            |other - Other                          |
+-----------------------------------------------------------------------+---------------------------------------+


.. _format-examples:

***************
Other Examples:
***************

Yearbook
   *Format:* text - Text

Architectural drawing
   *Format:* image - Image

Transferware plate
   *Format:* image - Image

Musical recording
   *Format:* audio - Audio

U.S. Department of Agriculture bulletin
   *Format:* text - Text

Postcard
   *Format:* image - Image


.. _format-comments:

********
Comments
******** 


-   For physical (as opposed to digital) nature, including size and
    duration of the original resource, use the :ref:`Physical Description <description-physical>` element.
-   For categorizing the primary content of the resource (to aid in
    searching) use the :doc:`Resource Type </fields/resource-type>` element.
-   Format is important because choice of appropriate preservation
    strategies depends on knowing the structural type of the digital
    manifestation


.. _format-glossary:

Glossary of Formats
===================


+---------------------------+-----------------------+----------------------------------------------+
|Format                     |Code                   |Use for:                                      |
+===========================+=======================+==============================================+
|Audio                      |audio                  |Sound files                                   |
+---------------------------+-----------------------+----------------------------------------------+
|Image                      |image                  |Two-dimensional, graphic representations      |
+---------------------------+-----------------------+----------------------------------------------+
|Text                       |text                   |Written or printed documents                  |
+---------------------------+-----------------------+----------------------------------------------+
|Video                      |video                  |Moving images                                 |
+---------------------------+-----------------------+----------------------------------------------+
|Website                    |website                |Collection of webpages                        |
+---------------------------+-----------------------+----------------------------------------------+
|Other                      |other                  |An other items                                |
+---------------------------+-----------------------+----------------------------------------------+


.. _format-resources:

*********
Resources
*********

-   UNT Format `Controlled Vocabulary`_


More Guidelines:

-   :doc:`Quick-Start Metadata Guide </guides/quick-start-guide>`
-   `Metadata Home <https://library.unt.edu/metadata/>`_