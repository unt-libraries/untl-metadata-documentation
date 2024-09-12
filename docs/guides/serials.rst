################
Series & Serials
################

***********
Definitions
***********

The term *serial* describes items published under the same title, generally as separate issues or annual texts. Some examples include:
newspapers, yearbooks, journals, magazines, annual reports, newsletters, conference proceedings, etc.

The term *series* describes items published under different titles that all have the same secondary title, such as a series of individual books that form a trilogy. In archives, *series* may refer to a "record series" or group of items in a collection that have the same format, topical context, or other similarities.


*********************************************
Serials and Series in the Digital Collections
*********************************************

The UNT Libraries' Digital Collections include a large number of serials and series. Although there are many variables, this page lays out specific examples about how we typically handle metadata for these items to maintain consistency.

.. _serials-series:

Series Titles
=============

"Series" in the Digital Collections are designated by Series Titles.  These are often used to collocate groups of items to take advantage of the way that series and serial titles are browseable across collections and as a facet option for search results. Here are some broad categories of series used in the Digital Collections:

+------------------------------------------+-------------------------------------------------------+
|**Series Types**                          |**Examples**                                           |
+==========================================+=======================================================+
|Items related by chronology or created    |  - Fiscal Year 1975                                   |
|in a specific time period that may not    |  - Academic Year 2013                                 |
|be a calendar year.                       |  - 112th Congress                                     |
|                                          |  - 80th Legislature of Texas                          |
+------------------------------------------+-------------------------------------------------------+
|Series titles `authorized by the Library  |  - AEC research and development report                |
|of Congress <https://id.loc.gov/>`_       |  - Biological services program FWS/OBS                |
|(generally used for government documents) |  - Research report (Southwest Region University       |
|                                          |    Transportation Center (U.S.))                      |
+------------------------------------------+-------------------------------------------------------+
|Archival collections and/or archival      |  - Schuhmann Family Photograph Collection             |
|series                                    |  - United Orthodox Synagogues records (MS 712)        |
|                                          |  - Charles B. Moore Family papers, 1832-1917          |
|                                          |  - Austin Papers: Series IV, 1831-1834                |
+------------------------------------------+-------------------------------------------------------+
|Published series                          |  - Publications of the Texas Folklore Society         |
|                                          |  - War and the Southwest series                       |
+------------------------------------------+-------------------------------------------------------+
|General categories of items within a      |  - Flood Insurance Rate Maps                          |
|collection that may improve browsing      |  - The Ship and the Sacred Tree: Textiles from South  |
|                                          |    Sumatra (exhibition title)                         |
|                                          |  - 10th Annual Texas Folklife Festival                |
|                                          |  - [North Texas Politics & Public Officers]           |
+------------------------------------------+-------------------------------------------------------+

For series titles to be most useful, the patterns for similar titles need to be consistent, particularly for chronological titles (e.g., Fiscal Year YYYY) where a single year generally refers to a range of time other than a calendar year.  So, Fiscal Year 1970 would start summer/fall 1969 and end around summer 1970; Academic Year 1932 would start with the fall semester in 1931 and end in summer 1932.



.. _serial-serials:

Serial Records
==============

As a general rule, formatting and values for serial records align with the :doc:`Input Guidelines </input-guidelines-descriptive>`, however, some fields are more consistent across serial records than other kinds of records, or fit in common exceptions. The general characteristics of serial records in the Digital Collections include:

-   A standardized :ref:`Main Title <title-fill>` that fits a patterned template to ensure consistency, sorting, and findability for users
-   Many fields that stay essentially the same across all items in a serial with changes to numbers (e.g., volume/issue/quarter/etc.), dates, and personal names
-   Inclusion of :ref:`Citation <serial-citation>` field information for publications with volume/issue numbers

This section provides an overview of general rules and common concerns specific to serial records in the Digital Collections with example values. It does not repeat in-depth formatting explanations covered by the general Input Guidelines for Descriptive Metadata.


.. _serial-title:

Title
-----

Overview:
^^^^^^^^^
-   All serial records have one Main Title and at least one Serial Title
-   Serial records *may* have additional titles, as appropriate

+-------------------------------------------------------------------------+------------------------------------------------------+
| **Guidelines**                                                          | **Examples**                                         |
+=========================================================================+======================================================+
|*Main Title*                                                                                                                    |
+-------------------------------------------------------------------------+------------------------------------------------------+
|- The main title for a serial is constructed so that it stays consistent |                                                      |
|  even if there are relative changes across issues (e.g., yearbook title |                                                      |
|  pages tend to change every year even though the essential serial title |                                                      |
|  stays the same).                                                       |                                                      |
|- Note that titles may still vary depending on the elements used by the  |                                                      |
|  item.                                                                  |                                                      |
|- Here are some common title patterns:                                   |                                                      |
+-------------------------------------------------------------------------+------------------------------------------------------+
|   a. {title}, Volume #, Number #, {date}                                |- The Battlecry, Volume 1, Number 5, October 5, 1979  |
|                                                                         |- NEW Source, September 1991                          |
|                                                                         |- Scouting, Volume 67, Number 4, September 1979       |
|                                                                         |- The Pickwicker, Volume 20, 1952                     |
|                                                                         |- Rawls Exchange, 2004                                |
|                                                                         |- L.I.P. Bulletin, Volume 5, Spring 2011              |
+-------------------------------------------------------------------------+------------------------------------------------------+
|   b. {title}, Yearbook of {school}, {year}                              |Prickly Pear, Yearbook of Abilene Christian College,  |
|                                                                         |1963                                                  |
+-------------------------------------------------------------------------+------------------------------------------------------+
|   c. Catalog of {school}, {year}, {type}                                |- Catalog of North Texas State University,            |
|                                                                         |  1979-1980, Undergraduate                            |
|                                                                         |                                                      |
|                                                                         |- Catalog of Texas Tech University, 2012-2013,        |
|                                                                         |  Undergraduate and Graduate                          |
|                                                                         |                                                      |
|                                                                         |- Catalog of Abilene Christian University, 1978-1979  |
+-------------------------------------------------------------------------+------------------------------------------------------+
|   d. {organization/program} Annual Report: {date}                       |City Water Board of San Antonio Annual Report: 1970   |
+-------------------------------------------------------------------------+------------------------------------------------------+
|   e. {organization/program} Requests for Legislative Appropriations:    |University of North Texas Requests for Legislative    |
|      {date}                                                             |Appropriations: 2010-2011                             |
+-------------------------------------------------------------------------+------------------------------------------------------+
|   f. {organization/program} Strategic Plan: {date}                      |Texas Veterans Commission Strategic Plan: Fiscal      |
|                                                                         |Years 2013-2017                                       |
+-------------------------------------------------------------------------+------------------------------------------------------+
|   g. Interim Report to the # Texas Legislature: {organization/committee}|Interim Report to the 83rd Texas Legislature: House   |
|                                                                         |Committee on Natural Resources                        |
+-------------------------------------------------------------------------+------------------------------------------------------+
|   h. {organization/program} Quarterly Report: {date}                    |Yankee Core Evaluation Program Quarterly Progress     |
|                                                                         |Report: April-June 1964                               |
+-------------------------------------------------------------------------+------------------------------------------------------+
|   i. Report of the # {conference}, {date}                               |Report of the Twenty-Seventh National Conference on   |
|                                                                         |Weights and Measures, 1937                            |
+-------------------------------------------------------------------------+------------------------------------------------------+
|   j. Proceedings of the # {conference}, {date}                          |Proceedings of the Workshop on Techniques for         |
|                                                                         |Measurement of Thermodynamic Properties, Albany,      |
|                                                                         |Oregon, August 21-23, 1979                            |
+-------------------------------------------------------------------------+------------------------------------------------------+
|   k. Newspaper titles tend to follow slightly different rules, to align |- The Wylie News (Wylie, Tex.), Vol. 48, No. 41, Ed.  |
|      with other guidelines:                                             |  1, Wednesday, March 15, 1995                        |
|                                                                         |- Breckenridge American (Breckenridge, Tex.), Vol.    |
|   {title} ({city, st.}), Vol. #, No. #, Ed. #, {day, date}              |  33, No. 26, Ed. 1 Tuesday, February 10, 1953        |
+-------------------------------------------------------------------------+------------------------------------------------------+
|*Serial Title*                                                                                                                  |
+-------------------------------------------------------------------------+------------------------------------------------------+
|- The serial title is the part of the main title that stays the same for |- Applied Nuclear Physics Division Annual Progress    |
|  every item.                                                            |  Report                                              |
|- It should be capitalized the same as the main title.                   |- Texas Highways                                      |
|                                                                         |- Texas Public Utility Commission Agency Strategic    |
|                                                                         |  Plan                                                |
|                                                                         |- The Shinnery Review                                 |
|                                                                         |- Quarry Accidents in the United States During the    |
|                                                                         |  Calendar Year                                       |
+-------------------------------------------------------------------------+------------------------------------------------------+
|*Added Title*                                                                                                                   |
+-------------------------------------------------------------------------+------------------------------------------------------+
|- Version(s) of the title written on the item that differ from the       |- 135th Annual Report to the Governor & Legislature:  |
|  constructed title                                                      |  For Fiscal Year 2010 ending August 31, 2010         |
|                                                                         |- House Committee on Business & Industry, Texas House |
|                                                                         |  of Representatives interim report, 2008: a report to|
|                                                                         |  the House of Representatives, 81st Texas Legislature|
|                                                                         |- Fourth Quarter 1999 State Sales and Use Tax Analysis|
|                                                                         |  Report                                              |
|                                                                         |- Forty Fifth Annual Report of the Sabine River       |
|                                                                         |  Compact Administration for the Year 1999            |
|                                                                         |- Legislative Appropriations Request for Fiscal Years |
|                                                                         |  2014 and 2015, Submitted to the Governor's Office of|
|                                                                         |  Budget, Planning and Policy and the Legislative     |
|                                                                         |  Budget Board by Fourteenth District Court of Appeals|
|                                                                         |- Yellow Jacket '71                                   |
|                                                                         |- Agency Strategic Plan: For the Fiscal Years 2011-   |
|                                                                         |  2015 Period                                         |
+-------------------------------------------------------------------------+------------------------------------------------------+
|*Alternate Title*                                                                                                               |
+-------------------------------------------------------------------------+------------------------------------------------------+
|- Used if there are extensive abbreviations or written numbers that may  |- Report of the 35th National Conference on Weights   |
|  be searched numerically:                                               |  and Measures 1950                                   |
|                                                                         |- Federal Communications Commission Reports, Second   |
|                                                                         |  Series, Volume 27, January 29, 1971 to March 26,    |
|                                                                         |  1971                                                |
|                                                                         |- League of United Latin American Citizens (LULAC)    |
|                                                                         |  News, Volume 1, Issue Number 3, Wisconsin, October  |
|                                                                         |  1977                                                |
+-------------------------------------------------------------------------+------------------------------------------------------+
|*Parallel Title*                                                                                                                |
+-------------------------------------------------------------------------+------------------------------------------------------+
|- Used for non-English-language items                                    |                                                      |
+-------------------------------------------------------------------------+------------------------------------------------------+
|- For serials in multiple languages (e.g., English-language and Spanish- |- Niños con Necesidades Médicas Especiales: Boletín   |
|  language versions published together in a single issue), the main title|  para familias, Enero de 2013                        |
|  will be in English and the parallel title will be in the other language|- Lista de Proveedores de Cuidado Primario y          |
|                                                                         |  Hospitales, Diciembre de 2008                       |
+-------------------------------------------------------------------------+------------------------------------------------------+
|- For serials in a language other than English, the parallel title is the|Children with Special Health Care Needs: Newsletter   |
|  English-language version (if known)                                    |for Families, January 2013                            |
+-------------------------------------------------------------------------+------------------------------------------------------+
|*Series Title*                                                                                                                  |
+-------------------------------------------------------------------------+------------------------------------------------------+
|- Included when a serial is also part of one or more series              |- Argonne National Laboratory Reports                 |
|                                                                         |- Fiscal Year 1994                                    |
+-------------------------------------------------------------------------+------------------------------------------------------+
|*Sort Title*                                                                                                                    |
+-------------------------------------------------------------------------+------------------------------------------------------+
|- A special, non-display title that forces a numerical or chronological  |                                                      |
|  sort rather than an alphabetical one when "sort by title" is chosen    |                                                      |
+-------------------------------------------------------------------------+------------------------------------------------------+
|- Sort titles can be useful for serials when there is no volume/issue    |- Texas Quarterly Census of Employment and Wages by   |
|  number if you don't want it to sort alphabetically (e.g., April,       |  Industry and County, 2009, Q1                       |
|  August, December; Fall, Spring, Summer; Fortieth, Seventy-Second,      |- Retort, 1959-10                                     |
|  Thirty-Fifth; etc.)                                                    |- Texas General and Special Laws, Legislature 57,     |
|- It can also be used to place an index in a sequence (e.g., the index to|  Session 3                                           |
|  volumes 1-40 between volumes 40 and 41)                                |- FCC Report, S2, V40x, P1                            |
|- Since these titles do not display, shortened or abbreviated forms may  |- Texas Talking Book News, 2012-24                    |
|  be used (but this will affect how they sort when viewed alongside other|- Links Western Area Conference, 25                   |
|  items)                                                                 |                                                      |
|- Note that for items with specific dates (e.g., months or seasons) it   |                                                      |
|  may be less necessary since they will still sort chronologically "by   |                                                      |
|  date" vs. multiple documents with the same publication date            |                                                      |
+-------------------------------------------------------------------------+------------------------------------------------------+
|*Uniform Title*                                                                                                                 |
+-------------------------------------------------------------------------+------------------------------------------------------+
|- A standardized title, such as a consistent title pattern (generally    |- Agency Strategic Plan, for the fiscal years ...     |
|  taken from an OCLC record, when relevant)                              |- Annual financial report for fiscal year ... of the  |
|                                                                         |  Court of Appeals--Eight District.                   |
|                                                                         |- Summary of Enactments ... Legislature: Regular      |
|                                                                         |  Session ... Called Session ...                      |
|                                                                         |- Recreational Fishing Regulations: Effective ...     |
+-------------------------------------------------------------------------+------------------------------------------------------+




Common Issues:
^^^^^^^^^^^^^^

+----------------------------------------------+------------------------------------------------+----------------------------------------------------+
|If the volume/issue (or another) number is    |Use Arabic numbers and include a note           | | *Main Title:* The Hexagon, Volume 98, Number 2,  |
|written in Roman numerals:                    |                                                |   Summer 2007                                      |
|                                              |                                                | | *Display Note:* "Vol. XCVIII, No. 2."            |
+----------------------------------------------+------------------------------------------------+----------------------------------------------------+
|If a title includes abbreviations such as     |Write out full words in the title and include a | | *Main Title:* Cheiftain, Volume 12, Number 3,    |
|"Vol.", "No.", etc:                           |note                                            |   March 1964                                       |
|                                              |                                                | | *Display Note:* "Vol. 12, Number 3."             |
+----------------------------------------------+------------------------------------------------+----------------------------------------------------+
|If the issue covers multiple volume/issue     |Include both/all with a hyphen or slash --      | | Scouting, Volume 70, Number 3, May-June 1982     |
|numbers or months/seasons:                    |generally match item formatting, but choose the |                                                    |
|                                              |most common/logical punctuation to keep titles  | | Hillviews, Volume 42, Number 1, Fall/Winter 2011 |
|                                              |consistent across a particular publication      |                                                    |
+----------------------------------------------+------------------------------------------------+----------------------------------------------------+
|If information on the item is known to be     |Put the correct information in the title using  | | *Main Title:* The Age, Volume [10], Number 10,   |
|incorrect (e.g., if the Roman numerals are not|[square brackets] and include a note as needed  |   October 1989                                     |
|changed from volume to volume, or are written |                                                | | *Display Note:* "Vol. XII, No. 10."              |
|incorrectly):                                 |                                                +----------------------------------------------------+
|                                              |                                                |*Main Title:* Chieftain, Volume [1], Number [2],    |
|                                              |                                                |October 1952                                        |
+----------------------------------------------+------------------------------------------------+----------------------------------------------------+







.. _serial-names:

Creator/Contributor
-------------------

Overview:
^^^^^^^^^

Name formatting and entry should align with :doc:`Creator </fields/creator>` or :doc:`Contributor </fields/contributor>` guidelines, e.g.: 

-   Names of persons should be inverted (Last, First), with a space between initials
-   Hierarchical organizations should have a period after each level of the hierarchy (and at the end)
-   Whenever possible/applicable, an `authorized form <https://id.loc.gov/>`_ of the name should be used, if available (this is particularly true for government agencies and organizations)


Every creator/contributor must include a type and role

+-------------------------------------------------------------------------------+---------------------------------------------+
|**Guidelines**                                                                 |**Examples**                                 |
+===============================================================================+=============================================+
|The primary editor(s)/author(s)/compiler(s) of the issue should be listed as   |*Name:* North Texas State Teacher's College  |
|creator(s)                                                                     |                                             |
|                                                                               |*Type:* Organization                         |
|In *most* cases, the first creator is the organization that publishes or       |                                             |
|sponsors the serial                                                            |*Role:* Author                               |
|                                                                               +---------------------------------------------+
|                                                                               |*Name:* Perryman, H. A.                      |
|                                                                               |                                             |
|                                                                               |*Type:* Person                               |
|                                                                               |                                             |
|                                                                               |*Role:* Editor                               |
|                                                                               |                                             |
|                                                                               |*Info:* Editor-in-Chief                      |
|                                                                               +---------------------------------------------+
|                                                                               |*Name:* Kraft, Michelle                      |
|                                                                               |                                             |
|                                                                               |*Type:* Person                               |
|                                                                               |                                             |
|                                                                               |*Role:* Editor                               |
|                                                                               |                                             |
|                                                                               |*Info:* Co-Editor                            |
+-------------------------------------------------------------------------------+---------------------------------------------+
|Secondary agents should be listed as contributors, e.g.:                       |*Name:* United States. Department of         |
|                                                                               |Agriculture.                                 |
| - section editors                                                             |                                             |
| - funding agencies                                                            |*Type:* Organization                         |
| - photographers                                                               |                                             |
| - contributing authors                                                        |*Role:* Originator                           |
|                                                                               +---------------------------------------------+
|For formal journals, contributing writers are generally listed as contributors |*Name:* Klocko, Barbara A.                   |
|(role: author) with the title(s) of their contributions in the info portion of |                                             |
|the field                                                                      |*Type:* Person                               |
|                                                                               |                                             |
|                                                                               |*Role:* Author                               |
|                                                                               |                                             |
|                                                                               |*Info:* Designing Sustainable Schools: The   |
|                                                                               |Emergent Role of the Superintendent as       |
|                                                                               |Sensemaker                                   |
|                                                                               +---------------------------------------------+
|                                                                               |*Name:* Marshall, Steve                      |
|                                                                               |                                             |
|                                                                               |*Type:* Person                               |
|                                                                               |                                             |
|                                                                               |*Role:* Other                                |
|                                                                               |                                             |
|                                                                               |*Info:* Business Manager                     |
+-------------------------------------------------------------------------------+---------------------------------------------+

 
Common Issues:
^^^^^^^^^^^^^^

+----------------------------------------------+--------------------------------------------------+----------------------------------------------------+
|If a person named in the item has an          |- Do not include the person(s) if there does not  |                                                    |
|ambiguous relationship to the item:           |  seem to be an explicable connection (e.g., the  |                                                    |
|                                              |  executive board of an agency, with no           |                                                    |
|                                              |  explanation that they contributed to the item)  |                                                    |
|                                              +--------------------------------------------------+----------------------------------------------------+
|                                              |- Include the person(s) if there is a reasonable  |- *Name:* United States. Office of Experiment       |
|                                              |  connection, depending on the kind of            |  Stations.                                         |
|                                              |  relationship, e.g.:                             |- *Type:* Organization                              |
|                                              |                                                  |- *Role:* Author                                    |
|                                              |  - The director of an agency who has no apparent |- *Info:* W.O. Atwater, Director                    |
|                                              |    personal contribution to an agency report:    +----------------------------------------------------+
|                                              |    include the name in the info field for the    |- *Name:* Cooper, Sam B., III                       |
|                                              |    agency                                        |- *Type:* Person                                    |
|                                              |  - The director of an agency who has (at least)  |- *Role:* Author or introduction, etc.              |
|                                              |    written an introductory remark/transmittal    |- *Info:* Manager, Purchased Health Services Unit   |
|                                              |    letter/etc.: include them as a contributor    |                                                    |
|                                              |    (role: author or author of introduction, etc.)|                                                    |
+----------------------------------------------+--------------------------------------------------+----------------------------------------------------+
|If the role of persons is vague (e.g.,        |- If a general sense of their contribution can be |                                                    |
|"Contributors"):                              |  determined -- e.g., in a magazine or journal,   |                                                    |
|                                              |  staff are most likely writers/authors -- choose |                                                    |
|                                              |  that role and add the statement to the info     |                                                    |
|                                              |  portion of the field                            |                                                    |
|                                              |                                                  |                                                    |
|                                              |- If the role is completely unclear, choose       |                                                    |
|                                              |  "Other" and add the statement to the info       |                                                    |
|                                              |  portion of the field                            |                                                    |
+----------------------------------------------+--------------------------------------------------+----------------------------------------------------+
|If issues have an extremely large number of   |- If some contributors have explicit roles and    |                                                    |
|contributors (i.e., more than 20), especially |  others do not, only include those with named    |                                                    |
|with unnamed roles:                           |  roles                                           |                                                    |
|                                              |                                                  |                                                    |
|                                              |- If none of the contributors have named roles    |                                                    |
|                                              |  (e.g., "Journal staff"):                        |                                                    |
|                                              |                                                  |                                                    |
|                                              |  [a] do not include any of the names,            |                                                    |
|                                              |  [b] include all of the names, or                |                                                    |
|                                              |  [c] include the first 15-20 contributors only.  |                                                    |
|                                              |                                                  |                                                    |
|                                              | (This may depend on the particular collection.)  |                                                    |
|                                              |                                                  |                                                    |
|                                              |- Try to be consistent across a particular        |                                                    |
|                                              |  publication                                     |                                                    |
+----------------------------------------------+--------------------------------------------------+----------------------------------------------------+


.. _serial-publisher:

Publisher
---------

Overview:
^^^^^^^^^

+-------------------------------------------------------------------------------+---------------------------------------------+
|**Guidelines**                                                                 |**Examples**                                 |
+===============================================================================+=============================================+
|- The publisher is often the same agency listed as the primary creator (or     | | *Name:* United States. Government Printing|
|  parent agency)                                                               |   Office.                                   |
|- Name formatting should align with :doc:`publisher </fields/publisher>`       | | *Location:* Washington D.C.               |
|  guidelines, e.g.:                                                            |                                             |
|                                                                               +---------------------------------------------+
|  - Hierarchical organizations should have a period after each level of the    | | *Name:* Texas Commission on Environmental |
|    hierarchy (and at the end), listed from largest to smallest                |   Quality                                   |
|                                                                               | | *Location:* Austin, Texas                 |
|  - Whenever possible/applicable, an `authorized form <https://id.loc.gov/>`_  |                                             |
|    should be used, if available (particularly for government agencies and     |                                             |
|    organizations)                                                             |                                             |
|                                                                               |                                             |
|- Location names are written out (e.g., city, state ; city, country)           |                                             |
+-------------------------------------------------------------------------------+---------------------------------------------+


Common Issues:
^^^^^^^^^^^^^^

+----------------------------------------------+------------------------------------------------+----------------------------------------------------+
|If the publisher's location is unknown or     |Leave the location portion blank or generalize  |*Name:* Brookhaven National Laboratory              |
|unclear:                                      |(e.g., a state or country only, instead of a    |                                                    |
|                                              |city)                                           |*Location:* United States                           |
+----------------------------------------------+------------------------------------------------+----------------------------------------------------+
|If the publisher's location is known but not  |Include the location in [square brackets]       |*Name:* United States. Patent Office.               |
|printed on the item:                          |                                                |                                                    |
|                                              |                                                |*Location:* [Washington D.C.]                       |
+----------------------------------------------+------------------------------------------------+----------------------------------------------------+


.. _serial-date:

Date
-----

Overview:
^^^^^^^^^

+---------------------------------------------------------------------------------+---------------------------------------------+
|**Guidelines**                                                                   |**Examples**                                 |
+=================================================================================+=============================================+
|- Include the publication date of the item using the format YYYY-MM-DD           |1968-07-24                                   |
|                                                                                 |                                             |
|- Whenever possible, be specific -- i.e., include the month/season -- especially |2012                                         |
|  for items that have multiple issues per year                                   |                                             |
|                                                                                 |1983-04                                      |
|- Serials published seasonally that do not list publication months may have dates|                                             |
|  using the YYYY-SS format (Spring = 21, Summer = 22, Autumn = 23, Winter = 24)  |2001-23                                      |
|                                                                                 |                                             |
|- Prefer the most specific known date (e.g., month vs. season code, if known)    |                                             |
+---------------------------------------------------------------------------------+---------------------------------------------+


Common Issues:
^^^^^^^^^^^^^^

+----------------------------------------------+------------------------------------------------+----------------------------------------------------+
|If the issue is a seasonal publication:       |Some publications will list a specific issue    |1973-04                                             |
|                                              |date on the cover or title page, or will have a |                                                    |
|                                              |statement about publication frequency, often    |1959-23                                             |
|                                              |where staff are listed (e.g., "Published        |                                                    |
|                                              |quarterly, every February, May, August, and     |                                                    |
|                                              |November...") -- in that case, use the          |                                                    |
|                                              |corresponding month, otherwise use the season   |                                                    |
+----------------------------------------------+------------------------------------------------+----------------------------------------------------+
|If the issue covers multiple months, seasons, |For regularly published journals or magazines   |2000-01                                             |
|etc.                                          |(e.g., January/February issue), use the first   |                                                    |
|                                              |month/date                                      |                                                    |
|                                              |                                                |                                                    |
|                                              | |                                              |                                                    |
|                                              |                                                |                                                    |
|                                              |(Generally a bimonthly publication is issued at |                                                    |
|                                              |the start of the listed period, with content/   |                                                    |
|                                              |announcements over that time)                   |                                                    |
|                                              +------------------------------------------------+----------------------------------------------------+
|                                              |For reports that describe activities, or work   |1990-23                                             |
|                                              |completed in a timeframe (e.g., "...for year    |                                                    |
|                                              |ending August 31 1945"), use a reasonable date  |1963-03                                             |
|                                              |just after the report's scope -- e.g., the first|                                                    |
|                                              |month in the next fiscal year, the season after |                                                    |
|                                              |a quarterly report, or the next year for an     |                                                    |
|                                              |annual calendar-year report                     |                                                    |
|                                              |                                                |                                                    |
|                                              | |                                              |                                                    |
|                                              |                                                |                                                    |
|                                              |(Generally these reports are describing work    |                                                    |
|                                              |*completed* so they have to be published *after*|                                                    |
|                                              |the year/month/etc.)                            |                                                    |
+----------------------------------------------+------------------------------------------------+----------------------------------------------------+


.. _serial-language:

Language
--------

Overview:
^^^^^^^^^


+-------------------------------------------------------------------------------+---------------------------------------------+
|**Guidelines**                                                                 |**Examples**                                 |
+===============================================================================+=============================================+
|Include the language(s) of the item, chosen from the list                      |English                                      |
|                                                                               |                                             |
|                                                                               |Spanish                                      |
+-------------------------------------------------------------------------------+---------------------------------------------+



Common Issues:
^^^^^^^^^^^^^^

+----------------------------------------------+------------------------------------------------+----------------------------------------------------+
|If the item is in a non-English language not  |Choose "Other" and add a Display Note           |*Language:* Other                                   |
|on the list:                                  |                                                |                                                    |
|                                              |                                                |*Display Note:* Includes passages in Vietnamese.    |
+----------------------------------------------+                                                +----------------------------------------------------+
|If the item is in a non-English language and  |                                                |*Language:* Other                                   |
|you cannot determine the language:            |                                                |                                                    |
|                                              |                                                |*Display Note:* Language of the text is unknown     |
+----------------------------------------------+------------------------------------------------+----------------------------------------------------+



Description
-----------

Overview:
^^^^^^^^^

+-----------------------------------------------------------------------+----------------------------------------------------+
| **Guidelines**                                                        | **Examples**                                       |
+=======================================================================+====================================================+
|*Content Description*                                                                                                       |
+-----------------------------------------------------------------------+----------------------------------------------------+
|- Generally the content description will be essentially the same across|Agency strategic plan for the Texas Department of   |
|  all records for the publication                                      |Motor Vehicles describing the organization's planned|
|                                                                       |services, activities, and other goals during fiscal |
|- This is a brief, 1-3 sentence description, including some combination|years 2013 through 2017.                            |
|  of:                                                                  +----------------------------------------------------+
|                                                                       |Journal published by the Texas State Historical     |
|  - Kind of item/publication                                           |Association containing articles written by members  |
|  - Frequency of publication                                           |of the Junior Historians about various aspects of   |
|  - Content/goals of the publication and/or agency                     |Texas history.                                      |
|                                                                       +----------------------------------------------------+
|- Additionally, it may be important to include details about the       |Biannual publication "devoted to the rich history of|
|  particular issue, e.g.:                                              |Dallas and North Central Texas" as a way to "examine|
|                                                                       |the many historical legacies--social, ethnic,       |
|  - Issue theme                                                        |cultural, political--which have shaped the modern   |
|  - Page number of an index                                            |city of Dallas and the region around it."  This     |
|  - Specific topics covered                                            |issue focuses on "Law and Disorder."                |
|                                                                       +----------------------------------------------------+
|                                                                       |Yearbook for Hardin-Simmons University in Abilene,  |
|                                                                       |Texas including photos of and information about the |
|                                                                       |university, student body, professors, and           |
|                                                                       |organizations.  Name indexes start on page 314.     |
|                                                                       +----------------------------------------------------+
|                                                                       |Weekly newspaper from Livingston, Texas that        |
|                                                                       |includes local, state, and national news along with |
|                                                                       |advertising.                                        |
|                                                                       +----------------------------------------------------+
|                                                                       |Monthly report outlining tax revenues and           |
|                                                                       |remittances for alcoholic beverages, listed by city,|
|                                                                       |for January 2021.  It also compares the statistics  |
|                                                                       |to the same period for the previous year.           |
+-----------------------------------------------------------------------+----------------------------------------------------+
|*Physical Description*                                                                                                      |
+-----------------------------------------------------------------------+----------------------------------------------------+
|- Follow the :ref:`guidelines for text <description-books>` and include|254 p. : ill., ports. ; 32 cm.                      |
|  any known information                                                |                                                    |
|                                                                       |82 p. ; 23 cm.                                      |
|- The general format template for text items is:                       |                                                    |
|  # p : {ill./col.ill./ports./etc.} ; h cm.                            |12, HC12 p. : ill. ; 27 cm.                         |
|                                                                       |                                                    |
|                                                                       |iv, [141] p.                                        |
|                                                                       |                                                    |
|                                                                       |[357] p. ; 28 cm.                                   |
|                                                                       |                                                    |
|                                                                       |4 p.                                                |
+-----------------------------------------------------------------------+----------------------------------------------------+



Common Issues:
^^^^^^^^^^^^^^

+----------------------------------------------+------------------------------------------------+----------------------------------------------------+
|If the frequency of the publication changes:  |Change the content description to match, or     |                                                    |
|                                              |remove the frequency reference, if it isn't     |                                                    |
|                                              |consistent                                      |                                                    |
+----------------------------------------------+------------------------------------------------+----------------------------------------------------+
|If the pages are not numbered or the          |Include the total number of content pages in    |[44] p. ; 25 cm.                                    |
|pagination changes many times:                |[square brackets] (i.e., pages that *would* have|                                                    |
|                                              |page numbers if they were printed/sequential)   |                                                    |
+----------------------------------------------+------------------------------------------------+----------------------------------------------------+
|If the pages are numbered continuously across |- A page range may be used (e.g., 60-88 p.), but|*Physical Description:* [28] p. : ill. ; 28 cm.     |
|each volume:                                  |  in the interest of parsing information without|                                                    |
|                                              |  duplication, consider:                        |*Citation Page Start:* 60                           |
|                                              |                                                |                                                    |
|                                              |  a. using the total number of content pages in |*Citation Page End:* 88                             |
|                                              |     brackets (so that users know "how long"    +----------------------------------------------------+
|                                              |     the issue is) and                          |*Physical Description:* vii, 180 p.                 |
|                                              |  b. adding the page numbers to the Citation    |                                                    |
|                                              |     field in Page Start and Page End entries   |*Citation Page Start:* 1                            |
|                                              |     (for search engines)                       |                                                    |
|                                              |                                                |*Citation Page End:* 180                            |
|                                              |                                                +----------------------------------------------------+
|                                              |- Always add a display note                     |*Display Note:* Pagination is continuous across     |
|                                              |                                                |volumes.                                            |
+----------------------------------------------+------------------------------------------------+----------------------------------------------------+


.. _serial-subject:

Subject
-------

Overview:
^^^^^^^^^
-   Add terms that would aid users in finding the items
-   Use terms that are generally applicable to the entire publication, but you may also include some terms that are specific to an issue


+-----------------------+-----------------------------------------------------------------------+----------------------------------------------------+
| **Type**              | **Guidelines**                                                        | **Examples**                                       |
+=======================+=======================================================================+====================================================+
|Library of Congress    |- These are not required, but can be included if available (e.g., from |- United States. Bureau of Mines                    |
|Subject Headings (LCSH)|  an OCLC or catalog record)                                           |                                                    |
|                       |                                                                       |- Texas Tech University -- Curricula                |
|                       |- Omit geographic subdivisions (these duplicate coverage) and form     |                                                    |
|                       |  subdivisions (prefer LCGFT)                                          |- Texas. Office of Public Insurance Counsel --      |
|                       |                                                                       |  Appropriations and expenditures                   |
|                       |                                                                       |                                                    |
|                       |                                                                       |- North Texas State University                      |
+-----------------------+-----------------------------------------------------------------------+----------------------------------------------------+
|Library of Congress    |- All serials should have the term "Periodicals"                       |- Periodicals                                       |
|Genre/Form Terms       |                                                                       |                                                    |
|(LCGFT)                |- When relevant/appropriate, use the search modal to add relevant      |- Newsletters                                       |
|                       |  term(s) related to the type of publication                           |                                                    |
|                       |                                                                       |- Course catalogs                                   |
|                       |                                                                       |                                                    |
|                       |                                                                       |- Student yearbooks                                 |
|                       |                                                                       |                                                    |
|                       |                                                                       |- Statistics                                        |
|                       |                                                                       |                                                    |
|                       |                                                                       |- Annual reports                                    |
|                       |                                                                       |                                                    |
|                       |                                                                       |- Conference papers and proceedings                 |
|                       |                                                                       |                                                    |
|                       |                                                                       |- Law reviews                                       |
+-----------------------+-----------------------------------------------------------------------+----------------------------------------------------+
|University of North    |- At least one UNTL-BS term is required for Portal records             |- Government and Law - State Agencies               |
|Texas Libraries Browse |                                                                       |                                                    |
|Subjects (UNTL-BS)     |- Choose term(s) that describe the general concept of the entire       |- Business, Economics and Finance - Medicine -      |
|                       |                                                                       |  Doctors                                           |
|                       |- Use terms appropriately, e.g., "State Agencies" would apply to annual|- Education - Colleges and Universities             |
|                       |  reports or newsletters *about* an agency, but may not apply to       |                                                    |
|                       |  publications *issued by* an agency on other topics; financial reports|- Social Life and Customs - Clubs and Organizations |
|                       |  *about* "Finance" rather than "Money" (physical currency)            |                                                    |
+-----------------------+-----------------------------------------------------------------------+----------------------------------------------------+
|Keywords               |- When relevant, add general keywords that reflect the content of the  |- organizational planning                           |
|                       |  entire publication or specific topics for an individual issue        |                                                    |
|                       |                                                                       |- monthly reports                                   |
|                       |- Keywords should be lowercase and plural, unless they are proper names|                                                    |
|                       |                                                                       |- water conservation                                |
|                       |- Do not duplicate words that are in other subject terms               |                                                    |
|                       |                                                                       |- financial reports                                 |
|                       |                                                                       |                                                    |
|                       |                                                                       |- budgets                                           |
+-----------------------+-----------------------------------------------------------------------+----------------------------------------------------+


Common Issues:
^^^^^^^^^^^^^^

+----------------------------------------------+--------------------------------------------------+----------------------------------------------------+
|If you cannot find an appropriate UNTL-BS term|- Look for a general, top-level term that may be  |Government and Law                                  |
|for a Portal item:                            |  appropriate and then add more specific keywords |                                                    |
|                                              |  (or other available subject headings)           |Social Life and Customs                             |
|                                              |                                                  |                                                    |
|                                              |- If there is truly no relevant subject, contact  |                                                    |
|                                              |  metadata administrators about adding a new term |                                                    |
+----------------------------------------------+--------------------------------------------------+----------------------------------------------------+


.. _serial-coverage:

Coverage
--------

Overview:
^^^^^^^^^

+-----------------------+-------------------------------------------------------------------------+----------------------------------------------------+
| **Type**              | **Guidelines**                                                          | **Examples**                                       |
+=======================+=========================================================================+====================================================+
|Place Name             |- When appropriate, add the place(s) that are described in the content   |- United States                                     |
|                       |                                                                         |                                                    |
|                       |- This *may* the the same as the publication location, but may be more   |- United States - California - Los Angeles County - |
|                       |  general (e.g., state agency reports are published in Austin but *about*|  Los Angeles                                       |
|                       |  activities in the whole state; a document about a state park may be at |- United States - Texas - Jeff Davis County         |
|                       |  a county level; etc.)                                                  |                                                    |
+-----------------------+-------------------------------------------------------------------------+----------------------------------------------------+
|Dates                  |- If the serial describes a set time, include the single coverage date,  |- 1942/1943                                         |
|                       |  or date range                                                          |                                                    |
|                       |                                                                         |- 1963-09-01/1964-08-31                             |
|                       |- Date ranges reflect the time or first/last dates covered by the content|                                                    |
|                       |  (e.g., stories in a journal or magazine; events, announcements,        |- 2020/2021-01                                      |
|                       |  calendars in a newsletter; etc.)                                       |                                                    |
|                       |                                                                         |- 1999-03                                           |
|                       |- Common date ranges for serials:                                        |                                                    |
|                       |                                                                         |- 1956-03-11/1956-06-10                             |
|                       |  - Academic start/end years                                             |                                                    |
|                       |  - Fiscal year start/end months or dates                                |- 1980-07/1980-09                                   |
|                       |  - Quarterly start/end months or dates                                  |                                                    |
|                       |  - Other explicit start/end dates for work completed or data collected  |                                                    |
|                       |    (e.g., grant periods)                                                |                                                    |
+-----------------------+-------------------------------------------------------------------------+----------------------------------------------------+
|Time Period            |- For Portal records, add the relevant time period(s) that correspond to |mod-tim (Into Modern Times 1939-Present)            |
|                       |  the *content* of the item                                              |                                                    |
|                       |                                                                         |                                                    |
|                       |- Time period(s) can be included even if specific dates are not listed/  |                                                    |
|                       |  uncertain                                                              |                                                    |
|                       |                                                                         |                                                    |
|                       |- Time periods are not used in the Digital Library                       |                                                    |
+-----------------------+-------------------------------------------------------------------------+----------------------------------------------------+

Common Issues:
^^^^^^^^^^^^^^
+----------------------------------------------+--------------------------------------------------+----------------------------------------------------+
|If the timeframe is known but ambiguous (e.g.,|- Briefly, look at the item for any statement     |- 1969-01-01/1970-12-13                             |
|fiscal year 1970):                            |  (e.g., in an introduction or copyright page)    |                                                    |
|                                              |  to see if there is an explicit statement or a   |- 1969~/1970                                        |
|                                              |  list of previous publications on a regular cycle|                                                    |
|                                              |                                                  |                                                    |
|                                              |- If you can reasonably determine the timeframe,  |                                                    |
|                                              |  add the dates as a range                        |                                                    |
|                                              |                                                  |                                                    |
|                                              |- If you cannot find clarification (or if there is|                                                    |
|                                              |  reason to think it may have changed), add       |                                                    |
|                                              |  general dates (e.g., years rather than dates)   |                                                    |
|                                              |  and mark one or both of the dates as approximate|                                                    |
|                                              |  as appropriate                                  |                                                    |
|                                              |                                                  |                                                    |
|                                              |- *Note:* Remember that fiscal/academic years     |                                                    |
|                                              |  almost always span two calendar years and they  |                                                    |
|                                              |  are named or identified by when they end (e.g., |                                                    |
|                                              |  Academic/FY 2017 starts in fall 2016 and ends in|                                                    |
|                                              |  spring or summer 2017)                          |                                                    |
+----------------------------------------------+--------------------------------------------------+----------------------------------------------------+


.. _serial-citation:

Citation
--------

Overview:
^^^^^^^^^
-   For some types of serials (especially those that have multiple parts -- e.g., volume, issue, etc.), citation segments can be parsed out
-   Each part should go in a separate entry with an appropriate label

+-----------------------+-----------------------------------------------------------------------+----------------------------------------------------+
| **Type**              | **Guidelines**                                                        | **Examples**                                       |
+=======================+=======================================================================+====================================================+
|Publication Title      |This is the Serial Title for the item                                  |Scouting                                            |
|                       |                                                                       |                                                    |
|                       |                                                                       |Las Sabinas                                         |
|                       |                                                                       |                                                    |
|                       |                                                                       |Southwest Retort                                    |
|                       |                                                                       |                                                    |
|                       |                                                                       |Journal of Applied Rehabilitation Counseling        |
+-----------------------+-----------------------------------------------------------------------+----------------------------------------------------+
|Volume/Issue           |Include the volume and/or issue number(s) as single Arabic numerals    |*Volume:* 40                                        |
|                       |                                                                       |                                                    |
|                       |                                                                       |*Issue:* 2                                          |
+-----------------------+-----------------------------------------------------------------------+----------------------------------------------------+
|Pages                  |- These parts are generally only relevant for items that have          |*Page Start:* 211                                   |
|                       |  continuous pagination (e.g., across a whole volume)                  |                                                    |
|                       |                                                                       |*Page End:* 282                                     |
|                       |- Include the starting and ending page numbers for the issue as single |                                                    |
|                       |  numbers in separate entries                                          |                                                    |
+-----------------------+-----------------------------------------------------------------------+----------------------------------------------------+


Common Issues:
^^^^^^^^^^^^^^

+----------------------------------------------+------------------------------------------------+----------------------------------------------------+
|If the volume/issue/other numbers are known to|Use the correct numbers in the Citation field   |*Main Title:* The Message, Volume [3], Number 24,   |
|be incorrect:                                 |and ensure that the error has been documented in|April 8, 1949                                       |
|                                              |a Display Note                                  |                                                    |
|                                              |                                                |*Volume:* 3                                         |
|                                              |                                                |                                                    |
|                                              |                                                |*Issue:* 24                                         |
|                                              |                                                |                                                    |
|                                              |                                                |*Display Note:* The volume number is misprinted as  |
|                                              |                                                |"Vol. II."                                          |
+----------------------------------------------+------------------------------------------------+----------------------------------------------------+
|If the issue has multiple issue numbers:      |Add separate entries for each issue number      |*Main Title:* The Beekeeper's Item, Volume 5, Number|
|                                              |                                                |11-12, November-December 1921                       |
|                                              |                                                |                                                    |
|                                              |                                                |*Volume:* 5                                         |
|                                              |                                                |                                                    |
|                                              |                                                |*Issue:* 11                                         |
|                                              |                                                |                                                    |
|                                              |                                                |*Issue:* 12                                         |
+----------------------------------------------+------------------------------------------------+----------------------------------------------------+


.. _serial-type:

Resource Type/Format
--------------------

Overview:
^^^^^^^^^
+-------------------------------------------------------------------------------+---------------------------------------------+
|**Guidelines**                                                                 |**Examples**                                 |
+===============================================================================+=============================================+
|Choose the most appropriate resource type                                      |- Journal/Magazine/Newsletter (text_journal) |
|                                                                               |- Report (text_report)                       |
|                                                                               |- Yearbook (text_yearbook)                   |
|                                                                               |- Book (text_book)                           |
+-------------------------------------------------------------------------------+---------------------------------------------+
|The format should match the type                                               |text                                         |
+-------------------------------------------------------------------------------+---------------------------------------------+


Common Issues:
^^^^^^^^^^^^^^
+-------------------------------------------------------------------------------+---------------------------------------------+
|If you are uncertain about the type:                                           |Choose the type that most closely matches,   |
|                                                                               |based on the :ref:`glossary <type-comments>` |
+-------------------------------------------------------------------------------+---------------------------------------------+


.. _serial-identifier:

Identifier
----------


Overview:
^^^^^^^^^
+-------------------------------------------------------------------------------+---------------------------------------------+
|**Guidelines**                                                                 |**Examples**                                 |
+===============================================================================+=============================================+
|Include any known identifiers on the item or from an OCLC/catalog record, e.g.:|*OCLC:* 16855105                             |
|                                                                               |                                             |
|- ISSN                                                                         |*ISSN:* 0038-478X                            |
|- OCLC number                                                                  |                                             |
|- LCCN (validated, in :ref:`normalized format <identifier-comments>`)          |*LCCN:* 12020299                             |
|- Call number                                                                  |                                             |
|- SuDOC or TxDOC number                                                        |*TxDOC:* A900.3 ST82                         |
|- Report number                                                                |                                             |
|                                                                               |                                             |
|Note that most identifiers will be the same for every item record in the same  |                                             |
|serial                                                                         |                                             |
+-------------------------------------------------------------------------------+---------------------------------------------+


Common Issues:
^^^^^^^^^^^^^^
+----------------------------------------------+------------------------------------------------+----------------------------------------------------+
|If you do not have an OCLC record or standard |Identifiers are not required and not all serials|*Report Number:* LF-16                              |
|identifiers:                                  |*have* externally-assigned identifiers (e.g.,   |                                                    |
|                                              |ISSNs or LCCNs).  If there are identifiers on   |                                                    |
|                                              |the title or cover page (e.g., report numbers,  |                                                    |
|                                              |series numbers, etc.), include those with       |                                                    |
|                                              |appropriate labels; otherwise, leave the field  |                                                    |
|                                              |blank                                           |                                                    |
+----------------------------------------------+------------------------------------------------+----------------------------------------------------+
|If you are using an LCCN from an OCLC or      |You will need to verify that it has been        |*LCCN:* 2001201316                                  |
|catalog record:                               |normalized to a :ref:`standardized format       |                                                    |
|                                              |<identifier-comments>` (e.g., no spaces         |                                                    |
|                                              |or punctuation) and that it is still a valid    |*LCCN:* sf93091440                                  |
|                                              |identifier in the `LC catalog                   |                                                    |
|                                              |<https://www.loc.gov/search/?all=true>`_        |                                                    |
+----------------------------------------------+------------------------------------------------+----------------------------------------------------+

.. _serial_resources:

*********
Resources
*********

**Selected Web Links:**

-   `OCLC Worldcat <http://www.worldcat.org/>`_
-   `Worldcat via FirstSearch <https://discover.library.unt.edu/catalog/b2247936>`_ (Accessible to UNT staff/students)

**More Guidelines:**

-   :doc:`Quick-Start Metadata Guide </guides/quick-start-guide>`
-   `Metadata Home <https://library.unt.edu/metadata/>`_
