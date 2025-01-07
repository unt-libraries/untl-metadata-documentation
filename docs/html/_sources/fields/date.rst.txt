#####
Date
#####


.. _date-definition:

**********
Definition
**********

Dates associated with events in the life cycle of the resource.


.. _date-sources:

****************************************
Where Can the Date Information be Found?
****************************************

In some cases the date may come from accompanying or supplementary information.

+---------------------------------------+-------------------------------------------------------+
|**Information Sources**                |**Creation date for this kind of item is the date or   |
|                                       |range of dates when:**                                 |
+=======================================+=======================================================+
|*For text*                                                                                     |
+---------------------------------------+-------------------------------------------------------+
|- title page                           |                                                       |
|- copyright page                       |the text was published, printed, or revised            |
|- cover or inside cover page           |                                                       |
+---------------------------------------+-------------------------------------------------------+
|*For maps*                                                                                     |
+---------------------------------------+-------------------------------------------------------+
|- title in a caption or legend         |                                                       |
|- notes around the outside of the map  |the map was printed                                    |
+---------------------------------------+-------------------------------------------------------+
|*For music scores*                                                                             |
+---------------------------------------+-------------------------------------------------------+
|- top/bottom of page                   |                                                       |
|- title page                           |the music was finished (handwritten) or printed        |
|- table of contents                    |                                                       |
+---------------------------------------+-------------------------------------------------------+
|*For videos*                                                                                   |
+---------------------------------------+-------------------------------------------------------+
|- title or credit screen(s)            |                                                       |
|- label on disc                        |the video was recorded or publicly released            |
|- container cover                      |                                                       |
+---------------------------------------+-------------------------------------------------------+
|*For sound files*                                                                              |
+---------------------------------------+-------------------------------------------------------+
|- information on disc/cassette         |                                                       |
|- container information                |the disc/tape was recorded or publicly released        |
+---------------------------------------+-------------------------------------------------------+
|*For computer files*                                                                           |
+---------------------------------------+-------------------------------------------------------+
|- title page/screen                    |                                                       |
|- statement in a header/footer         |the content was finished                               |
+---------------------------------------+-------------------------------------------------------+


.. _date-form:

***********************************
How Date Works in the Metadata Form
***********************************

.. image:: ../_static/images/edit-date.png
   :alt: Screenshot of date element in metadata editing system.

Parts:
	#. Date qualifier -- drop-down menu
	#. Date -- text field

Repeatable?
	Yes - to include different kinds of date information, click 'Add' to repeat all field parts; each individual date type (creation, submission, harvested, etc.) should not be repeated

Required?
	 No - also see :doc:`more information </minimally-viable-records>` about required fields


.. _date-fill:

*********************************
How Should the Date be Filled in?
*********************************

General Date Rules
==================

-   If no date can be found, leave the field blank
-   For each date, be sure to choose the appropriate date type from the `controlled vocabulary <https://digital2.library.unt.edu/vocabularies/date-qualifiers/>`_
-	The :ref:`Special Dates <date-special>` section provides more information about choosing the most relevant format type
-   Always format dates appropriately:

+-----------------------------------------------+-----------------------+---------------------------+
| **Guideline**                                 | **Pattern**           |   **Examples**            |
+===============================================+=======================+===========================+
|*Basic Format: A single year, month, or day*                                                       |
+-----------------------------------------------+-----------------------+---------------------------+
|-  Write dates Year-Month-Day, separating the  |YYYY-MM-DD             |1985-03-27                 |
|   sections with a single hyphen               |                       |                           |
+-----------------------------------------------+-----------------------+---------------------------+
|-  Include partial dates when only the year or | | YYYY                | | 2006                    |
|   only month and year are known               |                       |                           |
|                                               | | YYYY-MM             | | 1865-05                 |
+-----------------------------------------------+-----------------------+---------------------------+

-	Unless specifically noted, other date types can be any level of specificity (year, month, day), but patterns and examples will not reflect all possible combinations

+-----------------------------------------------+-----------------------+---------------------------+
| **Guideline**                                 | **Pattern**           |   **Examples**            |
+===============================================+=======================+===========================+
|*Date Ranges: Inclusive period from a start through an end date*                                   |
+-----------------------------------------------+-----------------------+---------------------------+
|-  Follow the same basic format, but separate  |YYYY-MM-DD/YYYY-MM-DD  |1941-12/1945-08            |
|   start and end dates with a slash mark       |                       |                           |
+-----------------------------------------------+-----------------------+---------------------------+
|-  If part of the date range is unknown, one   | | YYYY-MM-DD/..       | | 1889-05-13/..           |
|   date can be replaced with a double-dot to   |                       |                           |
|   designate an "open" range                   | | ../YYYY-MM-DD       | | ../1914-06              |
+-----------------------------------------------+-----------------------+---------------------------+
|*One of a Set: Specific unknown date during a known time period (e.g, sometime between 1900 and    |
|1905) or among several options (e.g., July 1980 or 1981)*                                          |
+-----------------------------------------------+-----------------------+---------------------------+
|-  Dates are enclosed in [square brackets]     | | [YYYY,YYYY,YYYY]    | | [1909,1919,1929]        |
|-  Separate dates with commas for a list of    |                       |                           |
|   possible dates or a double-dot for a range  | | [YYYY-MM,YYYY-MM]   | | [1980-07,1981-07]       |
|                                               |                       |                           |
|                                               | | [YYYY..YYYY]        | | [1939..1945]            |
+-----------------------------------------------+-----------------------+---------------------------+
|Two periods in the set represents specific     |                       |                           |
|point within all of the years before/after two |                       |                           |
|dates:                                         |                       |                           |
+-----------------------------------------------+-----------------------+---------------------------+
|-   Between 1897 and 1901                      |[YYYY..YYYY]           |[1897..1901]               |
+-----------------------------------------------+-----------------------+---------------------------+
|-   Before or during 1897                      |[..YYYY]               |[..1897]                   |
+-----------------------------------------------+-----------------------+---------------------------+
|-   During or after 1901                       |[YYYY..]               |[1901..]                   |
+-----------------------------------------------+-----------------------+---------------------------+
|Please note: since [square brackets] are used for this notation, they  |                           |
|cannot be used to represent dates added from a source other than the   |                           |
|item (see :ref:`Comments <date-comments>` for more information)        |                           |
+-----------------------------------------------+-----------------------+---------------------------+
|*Multiple Dates: Inclusive, separate dates that are not a single range (e.g., 4th of July 1850 and |
|1851)*                                                                                             |
+-----------------------------------------------+-----------------------+---------------------------+
|-  Dates are enclosed in {curly brackets}      | | {YYYY,YYYY,YYYY}    | | {1970,1980,1990}        |
|-  Separate dates with commas for a list or a  |                       |                           |
|   double-dot for a range (same as one of a    | | {YYYY-MM,YYYY-MM}   | | {1850-07-04,1851-07-04} |
|   set)                                        |                       |                           |
|                                               | | {YYYY..YYYY,YYYY}   | | {1939..1945, 2001}      |
+-----------------------------------------------+-----------------------+---------------------------+
|*Uncertain Dates: Partially-known or approximate dates*                                            |
+-----------------------------------------------+-----------------------+---------------------------+
|-  For a single, uncertain date, add a question|YYYY-MM-DD?            |1958-09?                   |
|   mark at the end                             |                       |                           |
+-----------------------------------------------+-----------------------+---------------------------+
|-  If a date is approximate (e.g., "circa"     |YYYY-MM-DD~            |1879-03-29~                |
|   dates), add a tilde at the end              |                       |                           |
+-----------------------------------------------+-----------------------+---------------------------+
|-  Any unknown digit can be replaced with "X"  | | YYYX                | | 189X                    |
|-  A decade can be represented as YYYX         |                       |                           |
|-  Dates with unknown digits cannot also be    | | YYYY-MX-DD          | | 1924-1X-17              |
|   approximate                                 |                       |                           |
+-----------------------------------------------+-----------------------+---------------------------+
|*Seasons: For seasonal dates (such as quarterly publications)*                                     |
+-----------------------------------------------+-----------------------+---------------------------+
|-  In place of a month, use the season code:   |YYYY-SS                |                           |
|                                               |                       |                           |
|  - 21 -- Spring                               |                       | | 1926-21                 |
|  - 22 -- Summer                               |                       |                           |
|  - 23 -- Autumn                               |                       | | 1991-23                 |
|  - 24 -- Winter                               |                       |                           |
+-----------------------------------------------+-----------------------+---------------------------+
|*Dates with Timestamps: Dates with time precision (requires a specific day)*                       |
+-----------------------------------------------+-----------------------+---------------------------+
|-  Separate the date and time with "T"         |YYYY-MM-DDThh:mm:ss    |2008-05-02T15:07:51        |
+-----------------------------------------------+-----------------------+---------------------------+
|*B. C. Dates: Prehistoric dates (will be year only)*                                               |
+-----------------------------------------------+-----------------------+---------------------------+
|-  Add a hyphen at the front of the date       | | -YYYY               | | -0601                   |
|-  Years must have at least 4 digits           |                       |                           |
|                                               | | -YYYYY              | | -50000                  |
+-----------------------------------------------+-----------------------+---------------------------+
   
\*For more information about implementation of the date standard, see
the :ref:`Comments<date-comments>` below.


.. _date-special:

Complex Dates
=============

If you have dates that are approximate, uncertain, or complicated in
other ways, it can be difficult to choose the most appropriate
formatting. This chart is framed for "creation" dates, but applies to
any kind of date, to help explain which format is best to express a date.
(For example, :ref:`coverage dates <coverage-date>` would be reflect 
"If the item is about" rather than "If the item was created.")


+---------------------------------------+-------------------------------+-------------------+---------------------------+---------------------------+
| **If the item was created:**          | **Such as:**                  |**Use:**           | **Example:**              | **This means:**           |
+=======================================+===============================+===================+===========================+===========================+
|During a known time of year            |A serial issue from fall 2004  |Seasonal date      |2004-23                    |Autumn 2004                |
|                                       |(no listed publication month)  |                   |                           |                           |
+---------------------------------------+-------------------------------+-------------------+---------------------------+---------------------------+
|During a known decade                  |A hat from the 1920s           |Unknown digit      |192X                       |1920s                      |
+---------------------------------------+-------------------------------+-------------------+---------------------------+---------------------------+
|At an approximate date	                |A manuscript written circa 1846|Approximate date   |1846~                      |Approximately 1846         |
+---------------------------------------+-------------------------------+-------------------+---------------------------+---------------------------+
|At a specific but uncertain date       |A photograph believed to have  |Uncertain date     |1963?                      |Possibly 1963?             |
|                                       |been taken in 1963 based on    |                   |                           |                           |
|                                       |context                        |                   |                           |                           |
+---------------------------------------+-------------------------------+-------------------+---------------------------+---------------------------+
|During an approximate uncertain date   |A map believed to have	been    |Uncertain/         |1910%                      |Approximately 1910?        |
|                                       |drawn circa 1910               |approximate date   |                           |                           |
+---------------------------------------+-------------------------------+-------------------+---------------------------+---------------------------+
|Over a period of time                  |A scrapbook compiled 1980-1985	|Date range         |1980/1985                  |1980 to 1985               |
|                                       |                               |(interval)         |                           |                           |
+---------------------------------------+-------------------------------+-------------------+---------------------------+---------------------------+
|During an approximate decade           |A photograph taken circa 1940s	|Date range         |1940~/1949~                |Approximately 1940 to      |
|                                       |                               |(interval)         |                           |approximately 1949         |
+---------------------------------------+-------------------------------+-------------------+---------------------------+---------------------------+
|During any approximate date range      |A letter written circa 1887-   |Date range         |1887~/1889~                |Approximately 1887 to      |
|                                       |1890                           |(interval)         |                           |approximately 1889         |
+---------------------------------------+-------------------------------+-------------------+---------------------------+---------------------------+
|At a particular time within a known    |A map drawn sometime between   |One of a set       |[1900..1920]               |Between 1900 and 1920      |
|range                                  |1900 and 1920                  |                   |                           |                           |
+---------------------------------------+-------------------------------+-------------------+---------------------------+---------------------------+
|                                       |A photograph taken at an event	|One of a set       |[1974-09-12..1974-09-15]   |Between September 12, 1974 |
|                                       |held September 12-15, 1974     |                   |                           |and September 15, 1974     |
+---------------------------------------+-------------------------------+-------------------+---------------------------+---------------------------+
|At a specific time during a number of  |A photograph in December,      |One of a set       |[1954-12,1958-12]          |December 1954 or December  |
|dates                                  |either 1954 or 1958            |                   |                           |1958                       |
+---------------------------------------+-------------------------------+-------------------+---------------------------+---------------------------+
|At multiple known dates or range(s)    |A page with two newspaper      |Multiple dates     |{1902,1920-11-12}          |1902 and November 12, 1920 |
|                                       |clippings from 1902 and        |                   |                           |                           |
|                                       |November 12, 1920              |                   |                           |                           |
+---------------------------------------+-------------------------------+-------------------+---------------------------+---------------------------+
|                                       |A scrapbook compiled during a  |Multiple dates     |{1927-08..1928-05,1928-09} |August 1927 to May 1928 and|
|                                       |student's senior year 1927-1928|                   |                           |September 1928             |
|                                       |with notes from the start of   |                   |                           |                           |
|                                       |the next fall                  |                   |                           |                           |
+---------------------------------------+-------------------------------+-------------------+---------------------------+---------------------------+


Determining Creation Dates
==========================

-   Whenever possible, enter an original resource creation date
-   Be sure to select "Creation" as the date type from the drop-down menu
-   If the creation date is unknown, leave the field blank
-   When the resource being described is a collection, a date range can be used to describe the creation date range of all the resources


+-----------------------------------------------+-------------------------------------------------------------+
|Creation date refers to the date of the exact item described in the record, even if it is a derivation:      |
+-----------------------------------------------+-------------------------------------------------------------+
|If the item is a reprint or revision of an     |* Use the date of the reprint/revisions                      |
|original text:                                 |* Include a note about the original text and printing date   |
|                                               |                                                             |
+-----------------------------------------------+-------------------------------------------------------------+
|If the item is a copy negative:                |* Use the date that the *copy negative* was created          |
|                                               |* The date of the original photographs may be used in        |
|                                               |  :ref:`coverage <coverage-date>`                            |
|                                               |                                                             |
+-----------------------------------------------+-------------------------------------------------------------+
|A note about postcards and greeting cards:                                                                   |
+-----------------------------------------------+-------------------------------------------------------------+
|If there is no letter or message written on    |* The item is treated as a photograph or piece of artwork    |
|the card:                                      |* Use the date that the photograph or image was made         |
|                                               |                                                             |
+-----------------------------------------------+-------------------------------------------------------------+
|If the card has a letter or message written    |* The item is treated as a piece of correspondence           |
|on/in it:                                      |* Use the date that the card was written/postmarked.         |
|                                               |* If it is important, the date of the picture can be included|
|                                               |  as part of the :ref:`coverage <coverage-date>`             |
|                                               |                                                             |
+-----------------------------------------------+-------------------------------------------------------------+


Non-Creation Dates
==================

-   Use other types of dates only when they are relevant:

    -   **Date Harvested** - Date that a web-resource was captured for archival purposes
    -   **Submission Date** - Date that the item was submitted for approval by an organization, institution, or agency
    -   **Acceptance Date** - Date that the item was approved by an organization, institution, or agency


-   Submission and acceptance dates are primarily used for patents, but may be used for other items when appropriate

    -   For patents, the acceptance/approval date and creation date are the same. This may not be true for all items.
    
-   In certain cases, items cannot be made publicly available due to publisher requirements, privacy issues, or other strictures. The **Embargo Until Date** represents the first date that an item will become accessible to the public or a pre-specified user group. It is used in conjuction with an Embargo note.  See also :ref:`Rights Access <rights-access>`


.. _date-examples:

**************
Other Examples
**************

[Letter from Zavala to Santa Anna, March 7, 1829]
	*Original Resource Creation Date:* 1829-03-07

Painting: A Scene from "The Beggar's Opera"
	*Original Resource Creation Date:* [1728..1729]

Digital photograph: [Bull riding at the Cowtown Coliseum]
	*Original Resource Creation Date:* 2003-12-27T09:16:40

Court case: Documents pertaining to B. C. Wallace as the receiver of the estate and guardian of Campbell minors, cause no. 532, 1896-1904
	 *Original Resource Creation Date:* 1896-11-13/1904-12-08

Farmer's bulletin: Diseases of sheep and goats.
	*Original Resource Creation Date:* 1943-09

University catalog: Catalog of Hardin-Simmons University, 1989-1990 Undergraduate Bulletin
	*Original Resource Creation Date:* 1989

Photograph: Crazy Theatre With Car
	*Original Resource Creation Date:* 1914~

Postcard: [Hamilton Hotel, Laredo, Texas]
	*Original Resource Creation Date:* 1910-01-23

Archived website: U.S.-Canada Power System Outage Task Force
	-    *Original Resource Creation Date:* 2004
	-    *Date Harvested:* 2009-07-01

Patent: Improvement in Medical Compounds or Bitters for Treating Chills and Fever.
	-    *Original Resource Creation Date:* 1873-05-20
	-    *Submission Date:* 1873-04-05
	-    *Acceptance Date:* 1873-05-20


.. _date-comments:

********
Comments
********

-   To express the time period(s), date, or date range associated with the intellectual content of the resource, use the :doc:`Coverage </fields/coverage>` element.

    -   For example, a book published in 1976 that is about Texas history from first statehood to 1964 would have an original resource creation date of 1976, but a coverage date range of 1846 - 1964.


-   Recommended best practice for encoding the date value is defined in the ISO-approved extension, available at from the Library of Congress: `Extended Date/Time Format <http://www.loc.gov/standards/datetime/edtf.html>`

    - As of November 2020, the UNTL edit system validates against the approved standard rather than the draft specifications  
    - Currently all levels (0 through 2) are supported by UNT Libraries metadata guidelines
	
        -   As of April 2013, the use of [brackets] to represent dates from a source other than the item is *no longer permitted* in order to support Level 2 functionality
        -   This notation has been common practice in traditional library cataloging (using AACR2)
        -   To document the fact that a creation/publication date has been added by a metadata creator, a [Display Note][] can be added with text such as "Publication date is not printed on the {item type}."

    -   Local standards for uncertain dates differ slightly from level-1 EDTF extensions:
	
        -   It is valid for the two right-most digits to be "unknown" (e.g., YYXX) however, it is preferred that the date represent at least a decade-level date in order to be helpful for users.
        -   This rule also applies to month and day, but it is preferred to revert to the known date level with the assumption that additional granularity/specificity is unknown, e.g.:

            -   Represent a year with an unknown month (YYYY-XX) as a year only: YYYY
            -   Represent a year and month with an unknown day (YYYY-MM-XX) as a year and month only: YYYY-MM
                            
        -   Additionally, the extension allows for ranges to be "unknown" by leaving one side of the range blank vs. "open" using a ".." in place of one date.  Generally, local standards prefer the  "open" option to denote an explicit choice vs. accidental "/" punctuation.


.. _date-resources:

*********
Resources
*********

-   UNT Date Qualifier `Controlled Vocabulary`_
-   Library of Congress `Extended Date/Time Format <http://www.loc.gov/standards/datetime/edtf.html>`_
-   UNT Extended Date/Time Format `Validation Service <https://digital2.library.unt.edu/edtf/>`_

