###############################
UNTL Metadata Quick Start Guide
###############################

************
Introduction
************

If you’re new to metadata or to the UNT Libraries (UNTL) system, this document gives a brief overview of the guidelines for records in the UNT Libraries’ Digital Collections.
This introduction covers only the most basic information about formatting while the full guidelines give in-depth instructions and examples to cover any names, places, etc. that do not fit the general rules. To see the full guidelines, click :doc:`here </input-guidelines-descriptive>`. Additionally, links within the overview connect to more specific portions of the guidelines.


Overview
========

The primary goal when we create metadata in the Digital Collections is to help users find items that they will find interesting or useful. 
We do this by:

* Describing an item as accurately as possible (e.g., not describing a clipping as a whole newspaper, or using a title that only applies to part of the content)
* Including any information that is relevant to explain what the item is
* Limiting duplication of information, unless it serves a purpose
* Following formatting and usage guidelines so that information matches across items


Questions or Issues
===================

If you are working on metadata and discover that you have questions or come across a different kind of item than you have described before, you have a few options to find more information:

* **For formatting or usage questions** (e.g., how to enter an unusual name or whether you should include certain information), use the “Help” link on the field in the editing system – or the links on this page – to see suggestions, guidelines, and examples for different kinds of situations
* **If you find an unusual item**, it may be helpful to search in the Digital Collections for similar items to see how they have been described before or check to see if there are project-specific guidelines
* **To get more context about an item**, you may be able to find other records or information online by looking in the library catalog or WorldCat (for formally published books, reports, pamphlets, etc.), by searching finding aids or similar documentation (for archival materials), or by using a search engine (if you want contextual information about an artist, personal collector, etc.)

====

.. _quick-title:

*****
Title
*****

What Do You Need to Know About Title?
=====================================

.. note:: 
   
   This field is **required**.

* The title is what people usually see first, identifying the item
* Every item must have a "Main Title"
* The "Main Title" qualifier cannot be repeated: only 1 title entry can be labeled "Main Title"
* It may help to look at the glossary (in the :ref:`Comments <title-comments>` section) if you want to know more about other types of titles

Formatting Information
======================

* Write out the title as it appears on the item or in accompanying information
* If the item does not have a title, create a short, descriptive title in square brackets
* It is preferred that titles are more descriptive than just a proper name
* To make titles unique, we sometimes add numbers to when there is not another way to distinguish content (e.g., near-identical photos)


Examples:
=========

+------------------------+-----------------------------------------------------+
| **Book**               | Reminiscences of the Terry Rangers                  |
+------------------------+-----------------------------------------------------+
| **Photograph**         | [Portrait of Bernice P. Lewis]                      |
+------------------------+-----------------------------------------------------+
| **Newspaper clipping** | [Clipping: State Group Supports Memorial]           |
+------------------------+-----------------------------------------------------+
| **Traced copy of map** | Map of Horton & Williams Subdivision of Lot 5,      |
|                        | Block 23 of Harris Addition to the City of Abilene, |
|                        | Texas [#3]                                          |
+------------------------+-----------------------------------------------------+

Additional Information
======================

* If you want to see the full guidelines for titles, see the :doc:`Title </fields/title>` page
* For more information about where to find the title on an object, see :ref:`Where Can the Title Information be Found? <title-sources>`
* For additional guidelines regarding basic titles, see :ref:`General Title Rules <title-fill>`
* For information about other kinds of titles and whether or not they should be used for an item, see :ref:`Special Titles <title-special>`
* To see additional examples, see :ref:`Other Examples <title-examples>`
* For a glossary of title types, see the :ref:`Comments <title-comments>` section
* For a list of useful links for titles, see the :ref:`Resources <title-resources>` section

====


.. _quick-creator:

*******
Creator
*******

What Do You Need to Know About Creator?
=======================================

.. note:: 

   This field is **optional** -- if the creator is unknown, leave it blank.

* The creator field describes "who made this item"
* There is no limit on the number of creators (but they should have an equal level of responsibility)
* Each creator can only be listed once and may not also be a contributor
* Creators have two required labels: type & role
* Roles should explain "what the creator did" to make the item
* Each role term is defined in the `controlled vocabulary <https://digital2.library.unt.edu/vocabularies/agent-qualifiers/>`__ -- before assigning a new kind of role, it may help to review this

Formatting Information
======================

* Only specific individuals or organizations should be included as creators
* Include as many creators as you need to, in order of importance (or the order that they appear in on the item)
* Personal names should be inverted (Last, First Middle)

  * Suffixes (Jr., Sr., etc.) can be added at the end but titles (Dr., Rev., Mr., etc.) should be left off 
    unless it is required to accurately represent the person

* Organization names should be written out as they appear
* Hierarchical organizations and government agencies should be written from the highest level to the lowest
* Choose a type (person or organization) and a role from the drop-down menus for each creator
* Optionally, you can include alternate names or information about the creator that is directly related to the item in the “Information” text field

Examples:
=========

+--------------------------------------+---------------------------------------+
| **Personal name**                    | Blackburn, J. K. P.                   |
+--------------------------------------+---------------------------------------+
| **Personal name requiring a title**  | Morris, Mrs. Harry Joseph             |
+--------------------------------------+---------------------------------------+
| **Personal name with a suffix**      | Roberts, Frank H. H., Jr.             |
+--------------------------------------+---------------------------------------+
| **Organization name**                | R. L. Polk & Co.                      |
+--------------------------------------+---------------------------------------+
| **Government agency**                | Texas. Adjutant General's Office.     |
+--------------------------------------+---------------------------------------+

Additional Information
======================

* If you want to see the full guidelines for creators, see the :doc:`Creator </fields/creator>` page
* For more information about where to find creator(s) on an object, see :ref:`Where Can the Creator Information be Found? <creator-sources>`
* For additional guidelines regarding creator names, roles, and information, see :ref:`How Should the Creator be Filled in? <creator-fill>`
* To see additional examples, see :ref:`Other Examples <creator-examples>`
* For a list of useful links for creators, see the :ref:`Resources <creator-resources>` section
* For more information about when to use the Creator or Contributor field, see our :doc:`definition page </creator-contributor-definitions>`

====


.. _quick-contributor:

***********
Contributor
***********

What Do You Need to Know About Contributor?
===========================================

.. note::

   This field is **optional** -- if there are no contributors or the contributors are unknown, leave it blank.
  
* Contributors assist with creating part of the item, or have a tangential relationship to the item (e.g., donor of archival materials)
* There is no limit on the number of contributors
* Each contributor can only be listed once and may not also be a creator
* Contributors have two required labels: type & role
* Roles should explain "how the contributor helped" to make the item or the contributor's relationship to it
* Each role term is defined in the `controlled vocabulary <https://digital2.library.unt.edu/vocabularies/agent-qualifiers/>`__ -- before assigning a new kind of role, it may help to review this

Formatting Information
======================

* Only specific individuals or organizations should be included as contributors
* Include as many contributors as you need to, in order of importance (or the order that they appear in on the item)
* Personal names should be inverted (Last, First Middle)

  * Suffixes (Jr., Sr., etc.) can be added at the end but titles (Dr., Rev., Mr., etc.)
    should be left off unless it is required to accurately represent the person
  
* Organization names should be written out as they appear
* Hierarchical organizations and government agencies should be written from the highest level to the lowest
* Choose a type (person or organization) and a role from the drop-down menus for each contributor
* Optionally, you can include alternate names or information about the contributor that is directly related to the item in the “Information” text field


Examples:
=========

+--------------------------------------+----------------------------------------------------------------+
| **Personal name**                    | Sonneck, Oscar George Theodore                                 |
+--------------------------------------+----------------------------------------------------------------+
| **Personal name requiring a title**  | Bower, Mrs. Orren J.                                           |
+--------------------------------------+----------------------------------------------------------------+
| **Personal name with a suffix**      | Boyles, C. S., Jr.                                             |
+--------------------------------------+----------------------------------------------------------------+
| **Organization name**                | Bendix Field Engineering Corporation                           |
+--------------------------------------+----------------------------------------------------------------+
| **Government agency**                | United States. Navy. Training Division. Bureau of Aeronautics. |
+--------------------------------------+----------------------------------------------------------------+


Additional Information
======================

* If you want to see the full guidelines for contributors, see the :doc:`Contributor </fields/contributor>` page
* For more information about where to find contributor(s) on an object, see :ref:`Where Can the Contributor Information be Found? <contributor-sources>`
* For additional guidelines regarding contributor names, roles, and information, see :ref:`How Should the Contributor be Filled in? <contributor-fill>`
* To see additional examples, see :ref:`Other Examples <contributor-examples>`
* For a list of useful links for contributors, see the :ref:`Resources <contributor-resources>` section
* For more information about when to use the Creator or Contributor field, see our :doc:`definition page </creator-contributor-definitions>`


####


.. _quick-publisher:

*********
Publisher
*********

What Do You Need to Know About Publisher?
=========================================

.. note:: 

   This field is **optional** -- if there is no publisher or the publisher is unknown, leave it blank.
   
* The publisher field reflects "who formally published the item," generally for public sale or use
* Some items could have multiple publishers, but consider whether additional publishers fit better as contributors
* Creators who are also publishers can be included in both fields

Formatting Information
======================

* Individual names should not be inverted (First Middle Last)
* Organization names should be written out as they appear
* Hierarchical organizations and government agencies should be written from the highest level to the lowest

Examples:
=========

+--------------------------+-------------------------------------------+
| **Personal name**        | Roberta Wright Rylander                   |
+--------------------------+-------------------------------------------+
| **Organization**         | Lewis Publishing Company                  |
+--------------------------+-------------------------------------------+
| **Government agency**    | United States. Department of Agriculture. |
+--------------------------+-------------------------------------------+

* If known, include the location where the item was published (e.g., Austin, Texas)
* Optionally, you can include alternate names or information about the publisher that is directly related to the item in the “Information” text field

Additional Information
======================

* If you want to see the full guidelines for publishers, see the :doc:`Publisher </fields/publisher>` page
* For more information about where to find publisher(s) on an object, see :ref:`Where Can the Publisher Information be Found? <publisher-sources>`
* For additional guidelines regarding publisher names, locations, and information, see :ref:`How Should the Publisher be Filled in? <publisher-fill>`
* To see additional examples, see :ref:`Other Examples <publisher-examples>`
* For a list of useful links for publishers, see the :ref:`Resources <publisher-resources>` section

####


.. _quick-date:

****
Date
****

What Do You Need to Know About Date?
====================================

.. note:: 

   This field is **optional** -- if the creation date is unknown, leave it blank.

* A creation date explains "when the original item was made"
* The "Creation" qualifier cannot be repeated: only 1 date entry can be labeled "Creation"
* Some items have multiple types of dates, but other date types should not occur without a creation date

Formatting Information
======================

* Dates use the form YYYY-MM-DD including a year and any additional parts that are known (i.e., YYYY or YYYY-MM or YYYY-MM-DD)
* A date range can be created by separating dates with a slash: YYYY-MM-DD/YYYY-MM-DD
* If the date is uncertain a question mark can be added to the end: YYYY-MM-DD?
* Use an “X” to stand in for unknown digit(s): YYYX-MM
* For “circa” dates, add a tilde at the end: YYYY-MM-DD~
* To represent a single date within a series of dates or date range, use “one of a set”:
  * Series of non-consecutive dates: [YYYY-MM-DD,YYYY,YYYY-MM]
  * Consecutive date range: [YYYY..YYYY]
  * After a known date: [YYYY-MM..]
  
Examples:
=========

+-----------------------------------+--------------------------+
| **Basic date**                    | 1879-03-29               |
+-----------------------------------+--------------------------+
| **Date range**                    | 1941-12/1945-08          |
+-----------------------------------+--------------------------+
| **Date with only a decade known** | 189X                     |
+-----------------------------------+--------------------------+
| **Approximate date**              | 1865-05~                 |
+-----------------------------------+--------------------------+
| **One of a set**                  | [1975-08-07..1975-08-10] |
+-----------------------------------+--------------------------+
| **"Before" a known date**         | [..1909]                 |
+-----------------------------------+--------------------------+

Additional Information
======================

* If you want to see the full guidelines for dates, see the :doc:`Date </fields/date>` page
* For more information about where to find creation date(s) on an object, see :ref:`Where Can the Date Information be Found? <date-sources>`
* For formatting instruction for all types of dates, see :ref:`General Date Rules <date-fill>`
* For additional guidelines regarding creation dates (including special instructions for postcards and items that are derivations), see Creation Dates
* For examples of when various kinds of dates would apply, see :ref:`Special Dates <date-special>`
* To see additional examples, see :ref:`Other Examples <date-examples>`
* For a list of useful links for dates, see the :ref:`Resources <date-resources>` section

####

.. _quick-language:

********
Language
********

What Do You Need to Know About Language?
========================================

.. note::

   This field is **required**.

* Language(s) reflect words that are not names, anywhere in the content of the item
* The language field can be used to filter results when people are searching for materials

Formatting Information
======================

* Choose the relevant language from the drop-down menu
* If there is no language content, choose “No Language”
* If the item is in multiple languages include all that are relevant

Examples:
=========

+----------------------------------------+--------------------------+
| **A book written in English**          | eng - English            |
+----------------------------------------+--------------------------+
| **A photograph with no written text or | nol - No Language        |
| visible words in the image**           |                          |
+----------------------------------------+--------------------------+
| **An opera in French and Italian**     | | fre - French           |
|                                        | | ita - Italian          |
+----------------------------------------+--------------------------+

Additional Information
======================

* If you want to see the full guidelines for languages, see the :doc:`Language </fields/language>` page
* For more information about where to find language(s) on an object, see :ref:`Where Can the Language Information be Found? <language-sources>`
* For additional guidelines regarding languages, see :ref:`How Should the Language be Filled in? <language-fill>`
* To see additional examples, see :ref:`Other Examples <language-examples>`
* For a list of useful links for languages, see the :ref:`Resources <language-resources>` section

####

.. _quick-description-content:

********************************
Description: Content Description
********************************

What Do You Need to Know About Content Description?
===================================================

.. note:: 
   
   This field is **required**.

* The content description displays in search results and provides information for users about "what the item is"
* The "Content Description" qualifier cannot be repeated: only 1 description entry can be labeled "Content Description"
* Descriptions should describe the known content as objectively as possible
* Contextual information should be used sparingly, but may be put in a note instead

Formatting Information
======================

* Describe what the item is about using proper grammar and punctuation
* Start the description with a statement of the item type (e.g., “Photograph of…”)
* Be descriptive about the object but only include details helpful for users
* For names that are often abbreviated (organizations, schools, military installations, etc.), be sure to have the full name somewhere in the record


+--------------------------------------+------------------------------------------------------------------+
| **Photograph from Cowtown Coliseum** | Photograph of a cowboy riding a brown bull in an arena. A rodeo  |
|                                      | clown is standing in the right side of the image; behind him,    |
|                                      | people are watching from the other side of a red fence.          |
+--------------------------------------+------------------------------------------------------------------+
| **Postcard with text**               | Postcard of the Custom House building in Nuevo Laredo, Mexico.   |
|                                      | The back of the postcard includes a thank you note addressed to  |
|                                      | Capt. Elmer C. Croom from L. R. de la Peña.                      |
+--------------------------------------+------------------------------------------------------------------+
| **Personal name with a suffix**      | Quarterly publication containing genealogical information about  |
|                                      | families in East Texas including fifth generation charts, family |
|                                      | histories, and lists of records (births, deaths, etc.).          |
+--------------------------------------+------------------------------------------------------------------+

Additional Information
======================

* If you want to see the full guidelines for content description, see :ref:`this section <description-content>` of the :doc:`Description </fields/description>` page
* For more information about where to find content information on an object, see :ref:`Where Can the Content Description Information be Found? <description-csources>`
* For additional guidelines regarding content descriptions (including information for specific kinds of items), see :ref:`How Should the Content Description be Filled in? <description-cfill>`
* To see additional examples, see :ref:`Other Examples <description-cexamples>`


.. _quick-description-physical:

*********************************
Description: Physical Description
*********************************

What Do You Need to Know About Physical Description?
====================================================

.. note::
   
   This field is VERY strongly recommended.
   
* Physical descriptions tell users "how long is the content?" (e.g., number of pages or minutes of runtime) or "how big is the item, physically?"

Formatting Information
======================

* Whenever possible, include a physical description using the format: **extent : physical details ; dimensions**

Note: leave out ‘physical details’ if they do not apply or are not readily available

* Specify units for dimensions (cm., in., etc.) and always round up to the next full centimeter (the only exceptions are “standard sized” photographs, A/V recordings, and born-digital materials)
* Physical descriptions are based on item type:

+------------------------------+------------------------------------+-----------------------------+----------------------------------+
| Extent                       | Phyiscal Details                   | Dimensions                  | Example(s)                       |
+==============================+====================================+=============================+==================================+
| *Books and printed text:*                                                                                                          |
+------------------------------+------------------------------------+-----------------------------+----------------------------------+
| number of pages (# p.)       | illustrated? (ill.)                |   height in cm.             | | 30 p. ; 28 cm.                 |
|                              |                                    |                             | | iv, 320 p. : ill. ; 23 cm.     |
+------------------------------+------------------------------------+-----------------------------+----------------------------------+
| *Photographs and 'graphic' items:*                                                                                                 |
+------------------------------+------------------------------------+-----------------------------+----------------------------------+
| number and kind of items     | | negative/positive?               | | height x width in cm.     | | 1 postcard : col. ;            |
|                              | | color? (col. or b&w)             | | 'standard size'           |   9 x 13 cm.                     |
|                              | | born-digital? (digital)          | | dimensions*               | | 1 photograph : negative,       |
|                              |                                    |                             |   b&w ; 4 x 5 in.                |
+------------------------------+------------------------------------+-----------------------------+----------------------------------+
| *Maps:*                                                                                                                            |
+------------------------------+------------------------------------+-----------------------------+----------------------------------+
| number and kind of item      | | special kind (like 'blueprint')? | height x width in cm.       | | 1 map : blueprint ; 41 x 29 cm.|
|                              | | color? (col., hand col.)         |                             | | 1 map : col. ; 26 x 20 cm.     |
+------------------------------+------------------------------------+-----------------------------+----------------------------------+
| *Manuscripts (handwritten items):*                                                                                                 |
+------------------------------+------------------------------------+-----------------------------+----------------------------------+
| number of pages (# p.)       | illustrated? (ill.)                | height in cm.               | 25 p. : col. ill. ; 36 cm.       |
+------------------------------+------------------------------------+-----------------------------+----------------------------------+
| *Music (printed):*                                                                                                                 |
+------------------------------+------------------------------------+-----------------------------+----------------------------------+
| number of scores/parts and   | illustrated?                       | height in cm.               | 1 cello part (5 p.) ; 36 cm.     |
| page numbers                 |                                    |                             |                                  |
+------------------------------+------------------------------------+-----------------------------+----------------------------------+
| *Sound recordings:*                                                                                                                |
+------------------------------+------------------------------------+-----------------------------+----------------------------------+
| number and kind of items     | | digital or analog?               | | diameter of disc in in.   | 1 sound disc (80 min.) :         |
| with playing time            | | playing speed?                   | | gauge of film in mm.      | digital ; 4 3/4 in.              |
+------------------------------+------------------------------------+-----------------------------+----------------------------------+
| *Motion pictures and videorecordings:*                                                                                             |
+------------------------------+------------------------------------+-----------------------------+----------------------------------+
| number and kind of items     | | sound (sd.) or silent (si.)?     | gauge of film (mm. or in.)  | | 1 video disc (1 hr., 45 min.)  |
| with playing time            | | color (col.) or black and white  | or diameter of discs (in.)  |   : sd., col. ; 8 in.            |
|                              |   (b&w)?                           |                             | | 2 film reels (ca. 55 min. each)|
|                              |                                    |                             |   : si., b&w ; standard 8 mm.    |
+------------------------------+------------------------------------+-----------------------------+----------------------------------+
| *Three-dimensional objects:*                                                                                                       |
+------------------------------+------------------------------------+-----------------------------+----------------------------------+
| number and kind of items     | | material (when known)            | height x width x depth      | | 1 saucer : porcelain, col. ;   |
|                              | | color?                           | in cm.                      |   18 cm. in diam.                |
|                              |                                    |                             | | 1 niddy noddy : wood ;         |
|                              |                                    |                             |   29 x 46 cm                     |
+------------------------------+------------------------------------+-----------------------------+----------------------------------+

\* Note: for photographs that are ‘standard sizes’ (as defined by UNTL guidelines) dimensions can use measurements other than cm.

Additional Information
======================

* If you want to see the full guidelines for content description, see :ref:`this section <description-physical>` of the :doc:`Description </fields/description>` page
* For more information about where to find physical information on an object, see :ref:`Where Can the Physical Description Information be Found? <description-psources>`
* For additional guidelines regarding text materials, see :ref:`Books, pamphlets, and printed sheets <description-books>`
* For additional guidelines regarding graphic materials, see :ref:`Photographs and other “graphic” materials <description-photos>`
* For additional guidelines regarding maps (including atlases), see :ref:`Maps and other cartographic materials <description-maps>`
* For additional guidelines regarding manuscripts, see :ref:`Manuscripts (maps, musical scores, and other documents that are handwritten) <description-manuscripts>`
* For additional guidelines regarding sheet music, see :ref:`Music <description-music>`
* For additional guidelines regarding audio recordings, see :ref:`Sound recordings <description-sound>`
* For additional guidelines regarding video recordings, see :ref:`Motion pictures and videorecordings <description-video>`
* For additional guidelines regarding physical objects, see :ref:`Three-dimensional objects <description-3d>`
* For additional guidelines about multiple kinds of items that belong together in the same record (a book with an insert, for example), see :ref:`Accompanying material <description-accompany>`
* To see additional examples, see :ref:`Other Examples <description-pexamples>`

####


.. _quick-subject:

*********************
Subjects and Keywords
*********************

What Do You Need to Know About Subject?
=======================================

.. note:: 

   This field is **required**.
   
* Subjects assist users to search for items by topic or find "more items like this one"
* Different kinds of subjects can be included, but controlled terms must be labeled and follow formatting rules
* University of North Texas Libraries Browse Subject (UNTL-BS) terms can be used by public users in The Portal to Texas History to `"browse" by topics <https://texashistory.unt.edu/explore/subjects/>`_

Formatting Information
======================

* There is no limit on the number of subjects/keywords, but they should be useful for finding the item
* Keywords should be lowercase and plural (except for proper names)
* Records for The Portal to Texas History must have at least one subject string from the UNT Libraries Browse Structure (UNTL-BS)
* People visible in photographs can be included as named persons (names are inverted and may include titles, suffixes, and nicknames)
* When readily available, prefer standardized terms from vocabularies

+----------------------------+--------------------------------------+
| **Keywords**               | | horseback riding                   |
|                            | | postcards                          |
+----------------------------+--------------------------------------+
| **UNTL-Browse Subject**    | Business, Economics and Finance -    |
|                            | Transportation - Railroads - Trains  |
+----------------------------+--------------------------------------+
| **Named person**           | Steever, Col. Edgar Z.               |
+----------------------------+--------------------------------------+
| **Named animal**           | Doc Persnickety                      |
+----------------------------+--------------------------------------+
| **Library of Congress      | Wild west shows                      |
| Subject Heading**          |                                      |
+----------------------------+--------------------------------------+
| **Library of Congress      | Portraits                            |
| Genre/Form Terms**         |                                      |
+----------------------------+--------------------------------------+

Additional Information
======================

* If you want to see the full guidelines for subjects, see the :doc:`Subject </fields/subject>` page
* For more information about where to find subject(s) on an object, see :ref:`Where Can the Subject Information be Found? <subject-sources>`
* For additional guidelines regarding all subjects and keywords (including instructions by subject type), see :ref:`How Should the Subject be Filled in? <subject-fill>`
* To see additional examples, see :ref:`Other Examples <subject-examples>`
* For a list of useful links for subjects, see the :ref:`Resources <subject-resources>` section

####


.. _quick-psource:

**************
Primary Source
**************

What Do You Need to Know About Primary Source?
==============================================

.. note::

   This field is **optional** - if you are unsure whether something is a primary source, choose "N/A" (not applicable).
   
* Primary sources are first-hand accounts of historical subjects
* Marking an item as a "primary source" sets a flag that displays to the public, but it does not affect searching or filtering

Formatting Information
======================

* Mark “Yes” using the form radio button if the item is a primary source
* Mark “No” using the form radio button if the item is not a primary source

Examples:
=========

+----------------------------+--------------------------------------+
| **Primary sources**        | | maps                               |
|                            | | photographs                        |
|                            | | letters                            |
+----------------------------+--------------------------------------+
| **Not primary sources**    | yearbooks                            |
+----------------------------+--------------------------------------+

Additional Information
======================

* If you want to see the full guidelines for primary sources, see the :doc:`Primary Source </fields/primary-source>` page
* For additional guidelines regarding primary sources, see :ref:`How Should Primary Source be Filled in? <psource-fill>`
* To see additional examples, see :ref:`Other Examples <psource-examples>`

####


.. _quick-coverage:

********
Coverage
********

What Do You Need to Know About Coverage?
========================================

.. note::

   This field is **optional** -- if the coverage information is unknown, leave it blank.
   
* Coverage information describes the place(s) and time(s) in the content: "when/where it is about"
* For some items (like original photos) creation and coverage information may be the same, but for most other items these may be different
* Locations, dates, and time periods can be used by public users to "browse" or filter search results
* Place names reflect current locations (but an older name may be a "Historic Place Name")
* Locations more specific than "city" should be keywords rather than place names
* For items that have an extremely precise known location, a place point (e.g., the spot where a photo was taken) or place box (e.g, the coordinate boundaries of a map) can be added along with a place name
* The "Coverage Date" qualifier cannot be repeated: only 1 coverage entry can be labeled "Coverage Date"
* The "Start Date" and "End Date" qualifiers are being phased out -- use "Coverage Date" instead
* Time periods align with coverage dates, but are only used in The Portal to Texas History

Formatting Information
======================

* Coverage places should be entered using hierarchical formatting from the largest to the smallest level (i.e., United States - [State] - [County] County - [City])
* Use the hierarchy found in the GeoNames unless it falls into our list of exceptions
* Coverage dates can be entered, if known, as a single date or date range using the same formatting as creation dates
* Records in The Portal to Texas History can also include relevant time periods chosen from our list of “eras”
  * When choosing eras, always use the most generic time period that includes the year(s) unless a specific topic is relevant
* To add geocoordinates, choose the correct qualifier and then use the map interface in the edit system

Examples:
=========

+-----------------------------+-------------------------------------------------------------+
| **Coverage place in Texas** | United States - Texas - Denton County - Denton              |
+-----------------------------+-------------------------------------------------------------+
| **Coverage place outside    | Germany - Lower Saxony - Region Hannover District - Hanover |
| of Texas**                  |                                                             |
+-----------------------------+-------------------------------------------------------------+
| **Coverage place that is an | United States - New York - New York City                    |
| exception to the rules**    |                                                             |
+-----------------------------+-------------------------------------------------------------+
| **Single coverage date**    | 1862-05~                                                    |
+-----------------------------+-------------------------------------------------------------+
| **Coverage date range**     | 1905/1922                                                   |
+-----------------------------+-------------------------------------------------------------+
| **Coverage time period**    | rep-tex - The Republic of Texas                             |
+-----------------------------+-------------------------------------------------------------+

Additional Information
======================

* If you want to see the full guidelines for coverage, see the :doc:`Coverage </fields/coverage>` page
* For more information about where to find coverage information on an object, see:ref:` Where Can the Coverage Information be Found? <coverage-sources>`
* For additional guidelines regarding coverage places, dates, and eras (including a list of exceptions to the place name rules), see :ref:`How Should the Coverage be Filled in? <coverage-fill>`
* To see additional examples, see :ref:`Other Examples <coverage-examples>`
* For a list of useful links for coverage, see the :ref:`Resources <coverage-resources>` section


####


.. _quick-source:

******
Source
******

What Do You Need to Know About Source?
======================================

.. note::

  This field is **optional** -- if there is no source or the source is unknown, leave it blank.

* Source can be used to cite the "source material" (when an item comes from a larger work) or an originating event (e.g, a conference or exhibit that produced the item)
* This is not a commonly-used field

Formatting Information
======================

* Include the major information about the source object including: title, author, publication/creation date, identifier (if applicable)
* Separate information with commas or appropriate punctuation
* If relevant, choose the kind of source from the drop-down menu

Examples
========

+--------------------------------+---------------------------------------------------------------+
| **Map from a book of plats**   | Source (book): [O. K. Hobbs Plat Book], [Abilene (Tex.)]      |
|                                | City Engineering Department, 1930                             |
+--------------------------------+---------------------------------------------------------------+
| **Clipping from a newspaper**  | Source (newspaper): Dallas Morning News, March 3, 1999. p. 26A|
+--------------------------------+---------------------------------------------------------------+

Additional Information
======================

* If you want to see the full guidelines for source, see the :doc:`Source </fields/source>` page
* For more information about where to find source information on an object, see :ref:`Where Can the Source Information be Found? <source-sources>`
* For additional guidelines regarding source, see :ref:`How Should the Source be Filled in? <source-fill>`
* To see additional examples, see :ref:`Other Examples <source-examples>`
* For a list of useful links for source, see the :ref:`Resources <source-resources>` section
* For more information about citing textual source items, see the :doc:`Citation </fields/citation>` page

####


.. _quick-relation:

********
Relation
********

What Do You Need to Know About Relation?
========================================

.. note:

  This field is **optional** - if there is no relation or the relation is unknown, leave it blank.
  
* Relation is used to link together two or more items in the Digital Collections when they are versions of the same content, such as formats (e.g., a negative and a print made from it) or different languages (e.g., a letter in German and a translation in English)
* Related items display in the public record so that users can see how they are connected
* Most of the time relationships should be reciprocal so that one item "has version" and the other "is version of"

Formatting Information
======================

* Generally, an object will have relation(s) that point to every related object (a map that has 4 additional copies would have 4 relation fields, each pointing to a different copy)
* Include the title, identifier (optional), and ARK of the related item

Examples
========

+----------------------------------------+---------------------------------------------------------------------------------------+
| **Index to a series of volumes**       | (References): Experiment Station Record Volume 1,                                     | 
|                                        | `ark:/67531/metadc5053 <https://digital.library.unt.edu/ark:/67531/metadc5053/>`_     |
+----------------------------------------+---------------------------------------------------------------------------------------+
| **Volume that has a separate index**   | (Is referenced by): U.S. Experiment Station Record General Index to Volumes 1-12,     |
|                                        | `ark:/67531/metadc5060 <https://digital.library.unt.edu/ark:/67531/metadc5060/>`_     | 
+----------------------------------------+---------------------------------------------------------------------------------------+
| **Map blueprint that has a             | (Has format): Map of North Park Addition to Abilene, Texas [#2], OKHPB_0470,          |
| non-blueprint copy**                   | `ark:/67531/metapth77939 <https://texashistory.unt.edu/ark:/67531/metapth77939/>`_    |
+----------------------------------------+---------------------------------------------------------------------------------------+
| **Map that is a copy of a blueprint**  | (Is format of): Map of North Park Addition to Abilene, Texas [#1], OKHPB_0468,        |
|                                        | `ark:/67531/metapth77936 <https://texashistory.unt.edu/ark:/67531/metapth77936/>`_    | 
+----------------------------------------+---------------------------------------------------------------------------------------+
| **Report from a soil survey**          | (Has part): Soil map, Texas, Wilson County,                                           |
|                                        | `ark:/67531/metapth19658 <https://texashistory.unt.edu/ark:/67531/metapth19658/>`_    | 
+----------------------------------------+---------------------------------------------------------------------------------------+
| **Map that accompanies a soil survey** | (Is part of): Soil survey of Wilson County, Texas,                                    |
|                                        | `ark:/67531/metapth19820 <https://texashistory.unt.edu/ark:/67531/metapth19820/>`_    |
+----------------------------------------+---------------------------------------------------------------------------------------+

Additional Information
======================

* If you want to see the full guidelines for relation, see the :doc:`Relation </fields/relation>` page
* For more information about where to find relation information on an object, see :ref:`Where Can the Relation Information be Found? <relation-sources>`
* For additional guidelines regarding relation (including additional kinds of relationships), see :ref:`How Should the Relation be Filled in? <relation-fill>`
* To see additional examples, see :ref:`Other Examples <relation-examples>`
* For a list of useful links for relation, see the :ref:`Resources <relation-resources>` section

####


.. _quick-institution-collection:

**************************
Institution and Collection
**************************

What Do You Need to Know About Institution and Collection?
==========================================================

.. note::

   These fields are **required**.

* Institution and collection should generally be edited only by administrators
* Some items will have more than one collection but each item can have only one institution
* These fields collocate large groups of items based on the partner that owns the materials or various topics
* Users can view descriptive pages that provide more information based on these fields, or use them to filter search results

Formatting Information
======================

* If it is appropriate to change this information, be sure to choose the correct institution and collection(s) from the drop-down menus based on the information you are given about the project

Examples
========

+-------------------+-----------------------------------------------+
| **Institution**   | ACRM - Amon Carter Museum                     |
+-------------------+-----------------------------------------------+
| **Collection**    | HSUY - Hardin-Simmons University Yearbooks    |
+-------------------+-----------------------------------------------+

Additional Information
======================

* If you want to see the full guidelines for institution, see the :doc:`Institution </fields/institution>` page
* To see additional institution examples, see :ref:`Other Examples <institution-examples>`
* If you want to see the full guidelines for collection, see the :doc:`Collection </fields/collection>` page
* To see additional collection examples, see :ref:`Other Examples <collection-examples>`

####


.. _quick-type-format:

************************
Resource Type and Format
************************

What Do You Need to Know About Resource Type and Format?
========================================================

.. note::

   These fields are **required**.

* Resource type helps users "browse" or filter results by kinds of materials, such as images versus text
* Format makes records more shareable when our metadata is searched externally

Formatting Information
======================

* Choose the most specific resource type that is relevant from the UNT Libraries list, based on the glossary (in the Comments section)
* For "format”, choose the corresponding, more generic form of the resource type from the format list

Examples
========

+-------------------+-----------------------------------------------+
| **Photograph**    | | *Resource type*: image_photo - Photograph   |
|                   | | *Format*: image                             |
+-------------------+-----------------------------------------------+
| **Map**           | | *Resource type*: image_map - Map            |
|                   | | *Format*: image                             |
+-------------------+-----------------------------------------------+
| **Letter**        | | *Resource type*: text_letter                |
|                   | | *Format*: text                              |
+-------------------+-----------------------------------------------+

Additional Information
======================

* If you want to see the full guidelines for resource types, see the :doc:`Resource Type </fields/type>` page
* To see additional resource type examples, see :ref:`Other Examples <type-examples>`
* To see the full list of resource types, see the :ref:`Comments <type-comments>` section
* If you want to see the full guidelines for formats, see the :doc:`Format </fields/format>` page
* To see additional format examples, see :ref:`Other Examples <format-examples>`
* To see the full list of formats, see the :ref:`Comments <format-comments>` section

####


.. _quick-identifier:

**********
Identifier
**********

What Do You Need to Know About Identifier?
==========================================

.. note::

   This field is **optional** - if there is no identifier or if the identifier is unknown, leave it blank.
   
* These are numbers, URLs, or alphanumeric codes that have been assigned to an item
* Identifiers may serve various purposes such as
  * identifying a specific item (e.g., a report number or ISBN)
  * pointing to more context (e.g., a catalog record)
  * connecting digital and physical items (e.g., call numbers or accession numbers)
  
Formatting Information
======================

* Include as many identifiers as are relevant (they may be written on the item or come from a catalog record)
* Some identifiers are assigned by the institution that owns the objects (accession or local control number); some may be found in related records (call numbers, OCLC accession numbers, Library of Congress Control Number, etc.); and some can be found on the item (report numbers, ISBN, etc.)
* For accession numbers assigned by the holding institution, the institution code may be added to the front (e.g., OKHPB_0185)

Examples
========

+----------------------------------------+----------------+
| **Call number**                        | M1500.G68 A4   |
+----------------------------------------+----------------+
| **OCLC number**                        | 50684665       |
+----------------------------------------+----------------+
| **Library of Congress Control Number** | sn86088968     |
+----------------------------------------+----------------+
| **Local control number**               | ELPL_B650      |
+----------------------------------------+----------------+

Additional Information
======================

* If you want to see the full guidelines for identifiers, see the :doc:`Identifier </fields/identifier>` page
* For more information about where to find identifiers on an object, see :ref:`Where Can the Identifier Information be Found? <identifier-sources>`
* For additional guidelines regarding identifiers, see :ref:`How Should the Identifier be Filled in? <identifier-fill>`
* To see additional examples, see :ref:`Other Examples <identifier-examples>`
* To see a glossary of identifier types, see the :ref:`Comments <identifier-comments>` section
* For a list of useful links for identifiers, see the :ref:`Resources <identifier-resources>` section

####


.. _quick-note:

****
Note
****

What Do You Need to Know About Note?
====================================

.. note::

   This field is **optional** -- if there are no notes, leave it blank.
   
* Notes can be used to document any additional information about the item for users (Display Note) or administrators (Non-Display Note)
* Display notes are searchable and visible to the public but non-display notes are not

Formatting Information
======================

* This is a free-text field, so information should be formatted in any way that is clear for users
* Put information taken directly from the item in quotation marks, and include a citation (e.g., page number) if appropriate

Examples
========

+----------------------------------------+------------------------------------------+
| **Display note containing information  |                                          |
| from a title page**                    | "Issued May 11, 1918."                   |
+----------------------------------------+------------------------------------------+
| **Display note for pagination issues** | Missing pages 15 and 16.                 |
+----------------------------------------+------------------------------------------+
| **Non-display note about internal      | Shortened title was chosen for official  |
| metadata decisions**                   | title to facilitate discovery.           |
+----------------------------------------+------------------------------------------+


Additional Information
======================

* If you want to see the full guidelines for notes, see the :doc:`Note </fields/note>` page
* For additional guidelines regarding notes, see :ref:`How Should the Note be Filled in? <note-fill>`
* To see additional examples, see :ref:`Other Examples <note-examples>`

####


.. _quick-degree:

******************
Degree Information
******************

What Do You Need to Know About Degree?
======================================

.. note::

   This field is **optional** — these fields should be used for products of the UNT community, only
   
* Projects that use the Degree field include: UNT Electronic Theses and Dissertations (ETDs), materials in the UNT Scholarly Works collection, and other items created by the UNT community
* Some information can be used to filter search results if users are looking for research in a particular academic field

Formatting Information
======================

* If you are working on items created at UNT, read the full guidelines for this field on the :doc:`Degree Information </fields/degree>` page.

####


.. _quick-resources:

*********
Resources
*********

-   `Metadata Home <https://library.unt.edu/metadata/>`_
-   :doc:`Explanation of Required Fields </minimally-viable-records>`