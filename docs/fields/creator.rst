#######
Creator
#######

**********
Definition
**********

A person, agency, or organization primarily responsible for creating the intellectual content of the resource.


*******************************************
Where Can the Creator Information be Found?
*******************************************

In some cases, creators may come from accompanying or supplementary information, but they may also be found on:

+---------------------------------------+-------------------------------------------------------+
|**Item Types**                         |**Information Sources**                                |
+=======================================+=======================================================+
|For text                               |- title page                                           |
|                                       |- cover                                                |
|                                       |- end of document                                      |
|                                       |- copyright statement                                  |
|                                       |- acknowledgments                                      |
+---------------------------------------+-------------------------------------------------------+
|For images                             |- notes on bottom or back of a photograph              |
|                                       |- envelope, slip cover, or case                        |
+---------------------------------------+-------------------------------------------------------+
|For maps                               |- statement in a caption                               |
|                                       |- notes around the outside of the map                  |
+---------------------------------------+-------------------------------------------------------+
|For music scores                       |- title page or header                                 |
|                                       |- top of page                                          |
|                                       |- table of contents                                    |
+---------------------------------------+-------------------------------------------------------+
|For videos                             |- label on disc                                        |
|                                       |- container cover                                      |
|                                       |- title screen(s) or credits                           |
+---------------------------------------+-------------------------------------------------------+
|For sound files                        |- information on disc/cassette                         |
|                                       |- container information                                |
+---------------------------------------+-------------------------------------------------------+
|For computer files                     |- title page/screen                                    |
|                                       |- statement in a header/footer                         |
+---------------------------------------+-------------------------------------------------------+



**************************************
How Creator Works in the Metadata Form
**************************************

.. image:: ../_static/images/edit-creator.png
   :alt: Screenshot of creator element in metadata editing system.

Parts:
    Creator name -- text field
    Creator type -- drop-down menu
    Creator role -- drop-down menu
	Creator information -- text field

Repeatable?
	Yes - to include multiple creators, click 'Add' to repeat all field parts

Required?
	 No ([more information][])


************************************
How Should the Creator be Filled in?
************************************

General Creator/Keyword Rules
=============================

-   If no creator information is readily available, leave the field blank
-   Only include individuals/organizations who were primarily
    responsible for the creation of the item
    
    -   Secondary "creators" (e.g., agents responsible for only a portion of the work) should be entered as [contributors][] instead
        
        -   A name should never be entered as both a creator and a
            contributor; if an agent acts in multiple capacities, see
            the [Role][] section for clarification
        -   For more information about when a person/organization is a
            creator or a contributor, see our [definition page][]
            
    -   An entity **must** have a direct relationship to the item that
        can be explicated in order to be included as a creator (or
        contributor)
        
        -   If there is information about a person/organization that
            cannot be expressed as a role, it may be appropriate to add
            it elsewhere, such as a [Note][] or [Info][] in relation to
            an established creator
            
-   Include as many creators as are readily available

    -   Place them in order of importance
    -   If creators are equally important, list them in the order that they appear
    -   If a document lists individuals as "et al." include names of
        every individual author that is known for the item
    -   If a document has an excessively large number of creators or
        authors (e.g., several hundred researchers) include the parent
        organizations as creators and the individual persons as
        contributors
        
-   For each creator the name, type, and role are **required**
-   If possible, consult an authority file to find the correct form of
    the name, such as:
    
    -   The `UNT Name App <https://digital2.library.unt.edu/>`_
    -   The `Library of Congress Authorities <https://id.loc.gov>`_
    -   A locally-developed utility
    
-   Note that organizational names generally reflect the name of the agency at
    the time the item was created -- e.g., Texas (Republic) vs. Texas, or North
    Texas State University vs. University of North Texas -- however, if possible,
    personal names will generally reflect a single, most current version when
    multiple names (initials, maiden names, etc.) are known to be used by a
    specific person
    
    
Creator Names
-------------

Personal Names
^^^^^^^^^^^^^^

+-----------------------------------------------------------+---------------------------------------+
| **Guideline**                                             | **Examples**                          |
+===========================================================+=======================================+
|-  If known, use the authorized form of the name from the  |Kittrell, Norman G. (Norman Goree),    |
|   `Library of Congress Authorities <https://id.loc.gov/>`_|1849-1927                              |
+-----------------------------------------------------------+---------------------------------------+
|-  If no authorized version is available, enter the most   |                                       |
|   complete version of the name that is known using proper |                                       |
|   formatting:                                             |                                       |
+-----------------------------------------------------------+---------------------------------------+
|   -   Invert names (Last, First, Middle)                  |Hébert, Rachel Bluntzer                |
+-----------------------------------------------------------+---------------------------------------+
|   -   Use initials if the full name(s) are not known      |Reid, Samuel C.                        |
+-----------------------------------------------------------+---------------------------------------+
|   -   Do not change the order of names                    |Davis, J. Mark                         |
+-----------------------------------------------------------+---------------------------------------+
|   -   Use spaces between initials                         |Blackburn, J. K. P.                    |
+-----------------------------------------------------------+---------------------------------------+
|   -   Separate hyphenated first names with a hyphenated   |Hsieh, P.-C.                           |
|       first names with a hyphen instead of a space if only|                                       |
|       initials are known                                  |                                       |
+-----------------------------------------------------------+---------------------------------------+
|   -   Put additional middle names after the first name    |Briscoe, Mary Jane Harris              |
+-----------------------------------------------------------+---------------------------------------+
|   -   Keep hyphenated "last names" and compound surnames  |Donahue-Smith, James A.                |
|       together                                            +---------------------------------------+
|                                                           |Hasanul Basher, A. M.                  |
+-----------------------------------------------------------+---------------------------------------+
|   -   Consider multiple parts (von, de la, etc.) as part  |de la Peña, L. R.                      |
|       of the last name                                    |                                       |
+-----------------------------------------------------------+---------------------------------------+
|-  If it is unclear which part of the name is the surname, |                                       |
|   enter the name as it appears on the item                |                                       |
+-----------------------------------------------------------+---------------------------------------+
|-  Use appropriate abbreviations:                          |                                       |
+-----------------------------------------------------------+---------------------------------------+
|   -   Only include known titles (Dr., Rev., Capt., etc.)  |Morris, Mrs. Harry Joseph              |
|       before the first name if:                           +---------------------------------------+
|                                                           |Ross, Lieutenant                       |
|       -   The title is necessary for clarification of the |                                       |
|           name (e.g., if the given name for a married     |                                       |
|           woman is unknown)                               |                                       |
|       -   The title is the only part of the name known    |                                       |
|           (aside from a surname)                          |                                       |
+-----------------------------------------------------------+---------------------------------------+
|   -   Include suffixes that are a part of the name (Jr.,  |Roberts, Frank H. H., Jr.              |
|       Sr., etc.) at the end of the name after a second    |                                       |
|       comma                                               |                                       |
+-----------------------------------------------------------+---------------------------------------+
|-  Do not include:                                         |*Name:* Parera, Mahendra               |
|                                                           +---------------------------------------+
|   -   nicknames                                           |*Info:* M.B.B.S., Ph.D., M.D.,         |
|   -   abbreviations                                       |MRCPsych, FRANZCP; Albert Road Clinic, |
|   -   titles that do not fit the criteria above           |Melbourne, Australia                   |
|   -   job or educational qualifiers (C.E., D.D.S., Ph.D., +---------------------------------------+
|       etc.)                                               |                                       |
|                                                           +---------------------------------------+
|-  Some common historical personal name abbreviations:     |*Name:* James, Thomas Leroy            |
|                                                           +---------------------------------------+
|   -   Chas. = Charles                                     |*Info:* Thos. L. James                 |
|   -   Geo. = George                                       |                                       |
|   -   Jas. = James                                        |                                       |
|   -   Jno. = John                                         |                                       |
|   -   Thos. = Thomas                                      |                                       |
|   -   Wm. = William                                       |                                       |
|                                                           |                                       |
|-  Alternate versions and omitted information may be added |                                       |
|   to the "info" section                                   |                                       |
+-----------------------------------------------------------+---------------------------------------+
|-  If the same person is responsible for multiple items:   |                                       |
|                                                           |                                       |
|   -   Enter the name as consistently as possible in every |                                       |
|       record                                              |                                       |
|   -   Use the fullest form of the name that is available  |                                       |
+-----------------------------------------------------------+---------------------------------------+
|-  If the name changes and it is *certainly* the same      |*Name:* Gaines, Ann                    |
|   person:                                                 +---------------------------------------+
|                                                           |*Info:* Ann Sanders                    |
|   -   Use the later/most current version                  |                                       |
|   -   Include the former name in the info section if that |                                       |
|       version is used in the text                         |                                       |
|                                                           |                                       |
|-  When in doubt, enter the name as it appears on the item |                                       |
+-----------------------------------------------------------+---------------------------------------+
|-  Only include the names of specific persons (or          |*Name:* Texas. Department of           |
|   organizations)                                          |Transportation.                        |
|-  In cases where the name is not known (e.g., "Staff      +---------------------------------------+
|   Photographer"), either:                                 |*Info:* Staff Photographer             |
|                                                           |                                       |
|   -   Leave the creator field blank                       |                                       |
|   -   Include the name of the parent organization and add |                                       |
|       details in the "info" section                       |                                       |
+-----------------------------------------------------------+---------------------------------------+


Organization Names
^^^^^^^^^^^^^^^^^^

+-----------------------------------------------------------+---------------------------------------+
| **Guideline**                                             | **Examples**                          |
+===========================================================+=======================================+
|-  If known, use the authorized form of the name from the  |Geological Survey (U.S.)               |
|   `Library of Congress Authorities <https://id.loc.gov/>`_|                                       |
|-  Otherwise, use these formatting guidelines:             |                                       |
+-----------------------------------------------------------+---------------------------------------+
|For non-government or single-level bodies:                                                         |
+-----------------------------------------------------------+---------------------------------------+
|-  Use the name as it appears in the item                  |Dallas Heritage Village                |
+-----------------------------------------------------------+---------------------------------------+
|-  Do not invert personal names that are parts of          |R. L. Polk & Co.                       |
|   organizational names                                    |                                       |
+-----------------------------------------------------------+---------------------------------------+
|-  Write out names rather than using acronyms              |Monsoon Asia Integrated Regional Study |
+-----------------------------------------------------------+---------------------------------------+
|For hierarchical agencies or entities:                                                             |
+-----------------------------------------------------------+---------------------------------------+
|-  List agency or body parts in hierarchical order,        |Texas State College for Women. College |
|   starting at the highest level and ending with the most  |of Industrial Arts.                    |
|   specific                                                |                                       |
+-----------------------------------------------------------+---------------------------------------+
|-  Separate the elements of the hierarchy with periods     |Dallas (Tex.). Police Department.      |
+-----------------------------------------------------------+---------------------------------------+
|-  Preface the name of government agencies with the name of|Washington (State). State Building Code|
|   the country or state                                    |Advisory Council. Energy Code          |
|                                                           |Committee.                             |
+-----------------------------------------------------------+---------------------------------------+
|-  If a hierarchy is unclear, record the name as it appears|                                       |
|   on the item                                             |                                       |
+-----------------------------------------------------------+---------------------------------------+
|For United States agencies:                                                                        |
+-----------------------------------------------------------+---------------------------------------+
|-  Spell out "United States" unless there is an authorized |United States. Bureau of Mines.        |
|   version that abbreviates it                             |                                       |
+-----------------------------------------------------------+---------------------------------------+
|-  In the case of a long (well-known) name, it may be      |United States. Central Intelligence    |
|   shortened by eliminating unnecessary parts              |Agency.                                |
|                                                           |                                       |
|   -   For example, the Library of Congress Authorities    |                                       |
|       often omit upper-level intermediary divisions, such |                                       |
|       as the secondary level in "United States. National  |                                       |
|       Security Council. Central Intelligence Agency."     |                                       |
+-----------------------------------------------------------+---------------------------------------+
|For non-U.S. agencies:                                                                             |
+-----------------------------------------------------------+---------------------------------------+
|-  When using an authorized form of the name, it may be    |*Name:* Han'guk Kwahak Kisurwŏn        |
|   appropriate to add notes to the "info" section:         +---------------------------------------+
|                                                           |*Info:* Korea Advanced Institute of    |
|   -   If the name is written in a language other than     |Science and Technology                 |
|       English, add the English translation (if known)     +---------------------------------------+
|   -   If the name is written in English, additional forms |China (Republic : 1949- ). Huan jing   |
|       from the item may be added                          |bao hu shu.                            |
+-----------------------------------------------------------+---------------------------------------+
|-  If there is no authorized form, follow general          |                                       |
|   formatting rules                                        |                                       |
+-----------------------------------------------------------+---------------------------------------+


Creator Type
------------

-   Choose the appropriate creator type:

+-----------------------------------------------------------+---------------------------------------+
| **Guideline**                                             | **Examples**                          |
+===========================================================+=======================================+
|If the creator is an individual                            |Personal                               |
+-----------------------------------------------------------+---------------------------------------+
|If the creator is a company, organization, association,    |Organization                           |
|agency, or other institution                               |                                       |
+-----------------------------------------------------------+---------------------------------------+
|If it is unclear whether the creator name belongs to an    |                                       |
|individual or an organization, use "Personal" and format   |                                       |
|the name appropriately                                     |                                       |
|                                                           |                                       |
|   -   (If it is important to document or clarify this     |                                       |
|       choice, use a Non-Display Note)                     |                                       |
+-----------------------------------------------------------+---------------------------------------+


-   In some rare and very specific cases, other options may apply:

+-----------------------------------------------------------+---------------------------------------+
| **Guideline**                                             | **Examples**                          |
+===========================================================+=======================================+
|If the creator is a conference or other event that produces|Event                                  |
|papers and materials (as an entity rather than named       |                                       |
|individual participants or a hosting organization)         |                                       |
|                                                           |                                       |
|   -   For example: a statement drafted by all members of a|                                       |
|       symposium or conference as part of the activities of|                                       |
|       the meeting                                         |                                       |
|   -   There are other ways to represent an event related  |                                       |
|       to the creation of an item, such as Source, when the|                                       |
|       event *itself* is not the creator                   |                                       |
+-----------------------------------------------------------+---------------------------------------+
|If the creator is a computer program that generates data or|Software                               |
|files independently                                        |                                       |
|                                                           |                                       |
|   -   E.g.: an automatically-generated file created while |                                       |
|       a computer program was running                      |                                       |
+-----------------------------------------------------------+---------------------------------------+



Creator Role
------------

Entering Roles
^^^^^^^^^^^^^^

-   Choose the appropriate creator role from the `controlled vocabulary <https://digital2.library.unt.edu/vocabularies/agent-qualifiers/>`_

+-----------------------------------------------------------+---------------------------------------+
| **Guideline**                                             | **Examples**                          |
+===========================================================+=======================================+
|If the role is not listed:                                                                         |
+-----------------------------------------------------------+---------------------------------------+
|-  Choose "Other"                                          |*Name:* Phillips, Nelson
|-  Include Clarification in the "Info" section             +---------------------------------------+
|                                                           |*Role:* Other                          |
|                                                           +---------------------------------------+
|                                                           |*Info:* Speaker; Associate Justice of  |
|                                                           |the Supreme Court                      |
+-----------------------------------------------------------+---------------------------------------+
|If more than one role applies to the creator:                                                      |
+-----------------------------------------------------------+---------------------------------------+
|-  Choose the primary or most encompassing role (or the one|*Name:* Harden, Leland                 |
|   listed first                                            +---------------------------------------+
|-   Explain the details in the info section                |*Role:* Editor                         |
|                                                           +---------------------------------------+
|                                                           |*Info:* Executive Editor; Sponsor      |
+-----------------------------------------------------------+---------------------------------------+


Assigning Roles
^^^^^^^^^^^^^^^

-   Although the same list of roles is available for both creators and
    contributors, some roles will generally only apply to contributors:
    
    -   Agents who only had responsibility for a part, e.g., author of
        introduction, etc.; witness; consultant; expert
    -   Agents who had an indirect relationship, e.g., funder, sponsor,
        former owner, donor
    -   Additional explanation is on our creator and contributor [definition page][]
    
-   The role should describe the action that the agent took in creating
    the item and it may not align with job titles or credentials, for
    example:

+---------------+-----------------------------------------------------------+-------------------+---------------+---------------------------------------+
|               |Agents                                                     |Role               |Field          |Example                                |
+---------------+-----------------------------------------------------------+-------------------+---------------+---------------------------------------+
|"Director"     |director of a performance (film, play, concert, etc.)      |Director           |Creator        |*Name:* Homer, Paula                   |
|               |                                                           |                   |               +---------------------------------------+
|               |                                                           |                   |               |*Type:* Personal                       |
|               |                                                           |                   |               +---------------------------------------+
|               |                                                           |                   |               |*Role:* Director                       |
|               |                                                           |                   |               +---------------------------------------+
|               |                                                           |                   |               |*Info:* UNT Opera Theater              |
|               +-----------------------------------------------------------+-------------------+---------------+---------------------------------------+
|               |executive director of an agency with no apparent personal  |n/a                |Creator        |*Name:* Texas. Department of           |
|               |contribution to the item                                   |                   |               |Transportation.                        |
|               |                                                           |                   |               +---------------------------------------+
|               |                                                           |                   |               |*Type:* Organization                   |
|               |                                                           |                   |               +---------------------------------------+
|               |                                                           |                   |               |*Role:* Author                         |
|               |                                                           |                   |               +---------------------------------------+
|               |                                                           |                   |               |*Info:* Phil Wilson, Executive Director|
|               +-----------------------------------------------------------+-------------------+---------------+---------------------------------------+
|               |executive director of an agency with a described or        |Author of          |Contributor    |*Name:* Camargo, Gene                  |
|               |understandable role (e.g., author of transmittal letter)   |introduction, etc. |               +---------------------------------------+
|               |                                                           |(or another        |               |*Type:* Personal                       |
|               |                                                           |appropriate role)  |               +---------------------------------------+
|               |                                                           |                   |               |*Role:* Author of introduction, etc.   |
|               |                                                           |                   |               +---------------------------------------+
|               |                                                           |                   |               |*Info:* Director of Building           |
|               |                                                           |                   |               |Inspections                            |
+---------------+-----------------------------------------------------------+-------------------+---------------+---------------------------------------+
|"Performer"    |-  musician in a recital or concert                        |Performer          |Creator        |*Name:* North Texas Wind Symphony      |
|               |-  actor in a play or movie                                |                   |               +---------------------------------------+
|               |                                                           |                   |               |*Type:* Organization                   |
|               |                                                           |                   |               +---------------------------------------+
|               |                                                           |                   |               |*Role:* Performer                      |
|               +-----------------------------------------------------------+-------------------+---------------+---------------------------------------+
|               |a person/organization that "performed" work or research    |Originator,        |Creator        |*Name:* Quigg, Antonietta Salvatrice   |
|               |(aside from, or in addition to, specific person/s who      |Researcher, or     |               +---------------------------------------+
|               |authored a report or created some product of the work)     |another appropriate|               |*Type:* Personal                       |
|               |                                                           |role               |               +---------------------------------------+
|               |                                                           |                   |               |*Role:* Author                         |
|               |                                                           |                   +---------------+---------------------------------------+
|               |                                                           |                   |Contributor    |*Name:* Texas Water Development Board  |
|               |                                                           |                   |               +---------------------------------------+
|               |                                                           |                   |               |*Type:* Organization                   |
|               |                                                           |                   |               +---------------------------------------+
|               |                                                           |                   |               |*Role:* Originator                     |
+---------------+-----------------------------------------------------------+-------------------+---------------+---------------------------------------+
|"Consultant"   |a consulting company or person that authors a report       |Author             |Creator        |*Name:* Kerley, Gerald Irwin           |
|               |                                                           |                   |               +---------------------------------------+
|               |                                                           |                   |               |*Type:* Personal                       |
|               |                                                           |                   |               +---------------------------------------+
|               |                                                           |                   |               |*Role:* Author                         |
|               |                                                           |                   |               +---------------------------------------+
|               |                                                           |                   |               |*Info:* Kerley Technical Consultant,   |
|               |                                                           |                   |               |Appomattox, VA)                        |
|               +-----------------------------------------------------------+-------------------+---------------+---------------------------------------+
|               |-  a consultant who provide information as a contribution  |Consultant         |Contributor    |*Name:* Kanto, Leonard E.              |
|               |   to a report                                             |                   |               +---------------------------------------+
|               |-  a consultant who spoke during recorded/transcribed      |                   |               |*Type:* Personal                       |
|               |   proceedings (could also be an "expert" or "witness"     |                   |               +---------------------------------------+
|               |   depending on the context)                               |                   |               |*Role:* Consultant                     |
|               |                                                           |                   |               +---------------------------------------+
|               |                                                           |                   |               |*Info:* State of Texas Professional    |
|               |                                                           |                   |               |Engineer; Consultant Engineer          |
+---------------+-----------------------------------------------------------+-------------------+---------------+---------------------------------------+



Creator Info
------------
-   Info is not required as part of the creator entry
-   This field is only for information about the creator listed in or
    directly related to the object
-   The info field is not intended for biographies or lengthy descriptions of the agent
-   It is not necessary to do research to find information; this field
    is only used for readily-available notes


+-----------------------------------------------------------+---------------------------------------+
| **Guideline**                                             | **Examples**                          |
+===========================================================+=======================================+
|-  Include information that clarifies the role of the      |Co-Editor                              |
|   creator                                                 |                                       |
+-----------------------------------------------------------+---------------------------------------+
|-  Include other relevant information known about the      |Geo. S. Anderson                       |
|   creator that relates to the object, such as:            +---------------------------------------+
|                                                           |1906-2005                              |
|   -   Additional forms of the creator's name              +---------------------------------------+
|   -   Addresses                                           |Ph.D.; Texas A &amp; M University Real |
|   -   Birth and death dates (not part of an authorized    |Estate Center                          |
|       name)                                               +---------------------------------------+
|   -   Organizational affiliations                         |"By his son, the late Wilson Gregg" (d.|
|   -   Other information associated with the name          |1899)                                  |
+-----------------------------------------------------------+---------------------------------------+
|-  For an agency, the info may include:                    |LLNL                                   |
|                                                           |                                       |
|   -   Persons associated with the organization who did not+---------------------------------------+
|       have another role (e.g., directors)                 |U.S. Department of Agriculture, Office |
|   -   Acronyms, abbreviations, or alternative name forms  |of Experiment Stations; W. O. Atwater, |
|   -   Additional omitted hierarchical components (e.g.,   |Director                               |
|       for some federal agencies)                          |                                       |
+-----------------------------------------------------------+---------------------------------------+
|-  There are no strict formatting requirements for info,   |California Univ., Berkeley, CA (United |
|   but here are some suggestions:                          |States). Dept. of Geology and          |
|                                                           |Geophysics Lawrence Berkeley Lab., CA  |
|   -   List each name, fact, or statement individually and |(United States)                        |
|       separate them with semicolons or periods            +---------------------------------------+
|   -   Use sentence form when relevant, or when taken      |Freegift Vandervoort, of Carrizo       |
|       directly from the item                              |Springs, Texas ; F. Vandervoort        |
|   -   Quotation marks may be used when quoting information+---------------------------------------+
|       directly from the item                              |"Member of the Association of American |
|                                                           |Directory Publishers"                  |
+-----------------------------------------------------------+---------------------------------------+


***************
Other Examples:
***************

Book

    *Name:* Farrar, R. M.
    *Type:* Person
    *Role:* Author

Yearbook

    *Name:* North Texas Laboratory School
    *Type:* Organization
    *Role:* Author
    
    *Name:* Mays, Sharon
    *Type:* Person
    *Role:* Editor
    *Information:* Co-Editor
    
    *Name:* Wyss, Margaret
    *Type:* Person
    *Role:* Editor
    *Information:* Co-Editor

Genealogical newsletter

    *Name:* Texas State Genealogical Society
    *Type:* Organization
    *Role:* Author
    
    *Name:* Pryor, Frances
    *Type:* Person
    *Role:* Editor

Atlas

    *Name:* Geological Survey (U.S.)
    *Type:* Organization
    *Role:* Author
    *Information:* U.S. Department of the Interior, Geological Survey; J. W. Powell, Director
    
    *Name:* Dutton, Clarence E.
    *Type:* Person
    *Role:* Author
    *Information:* Capt. Clarence E. Dutton U.S.A. - Author of "Tertiary History of the Grand Canon District"

Collection of legal papers

    *Name:* Blades, J. R.
    *Type:* Person
    *Role:* Compiler
    *Information:* Clerk, District Court, Henderson County

Painting

    *Name:* Seurat, Georges, 1859-1891
    *Type:* Person
    *Role:* Artist
    *Information:* French

Research report

    *Name:* Moris, Marlene C.
    *Type:* Person
    *Role:* Author
    *Information:* International Centre for Diffraction Data
    
    *Name:* McMurdie, Howard F.
    *Type:* Person
    *Role:* Author
    *Information:* International Centre for Diffraction Data
    
    *Name:* Evans, Eloise H.
    *Type:* Person
    *Role:* Author
    *Information:* International Centre for Diffraction Data
    
    *Name:* Paretzkin, Boris
    *Type:* Person
    *Role:* Author
    *Information:* International Centre for Diffraction Data
    
    *Name:* Parker, Harry S.
    *Type:* Person
    *Role:* Author
    *Information:* International Centre for Diffraction Data
    
    *Name:* Panagiotopoulos, Nicholas C.
    *Type:* Person
    *Role:* Author
    *Information:* International Centre for Diffraction Data
    
    *Name:* Hubbard, Camden R.
    *Type:* Person
    *Role:* Author
    *Information:* National Measurement Laboratory, National Bureau of Standards, Washington D.C.

Map

    *Name:* Hill, Robert Thomas, 1858-1941
    *Type:* Person
    *Role:* Cartographer
    *Information:* "By Robert T. Hill"

Opera score

    *Name:* Smith, Julia, 1905-1989
    *Type:* Person
    *Role:* Composer
    *Information:* Music by Julia Smith

Laws of Texas

    *Name:* Texas (Republic). Secretary of State.
    *Type:* Organization
    *Role:* Compiler

City directory

    *Name:* Morrison & Fourmy Directory Co.
    *Type:* Organization
    *Role:* Compiler
    *Information:* Compilers, Publishers and Proprietors

Committee report

    *Name:* Texas. Legislature. House of Representatives. Committee on Business and Industry.
    *Type:* Organization
    *Role:* Author

Photograph

    *Name:* Dallas (Tex.). Police Department.
    *Type:* Organization
    *Role:* Photographer
    *Information:* Staff photographer


********
Comments
********

-   Name fields are connected to the `UNT Name App <https://digital2.library.unt.edu/name/>`_, which will try to
    match text against local authority files. Editors should always
    choose an authorized form from the list if it is available.
-   The creator field is not constrained by the AACR2 practice of
    limiting creators to three or fewer names. Include as many creators
    as are readily available.
-   If the creator and the publisher are the same, repeat the name in
    the [Publisher][] element.
-   Individuals or organizations with lesser responsibility for creation
    of the intellectual content of the resource should be recorded in
    the [Contributor][] element instead of the creator
    element. Some examples of contributors are collector, donor,
    section editor, etc.
-   The creator roles come primarily from MARC `relator codes <http://www.loc.gov/marc/relators/relators.html>`_; not
    all of the Library of Congress roles are included in the UNT system
    and several local codes have been added to the UNT list.



*********
Resources
*********


-   UNT Creator Role `controlled vocabulary <https://digital2.library.unt.edu/vocabularies/agent-qualifiers/>`_
-   [Creator and Contributor Definitions][definition page] (how to choose which one to use)
-   `UNT Name App <https://digital2.library.unt.edu/name/>`_
-   Library of Congress

    - `Authorities <http://authorities.loc.gov>`_
    - `Linked Data Service <http://id.loc.gov/>`_

-   `OCLC Worldcat <http://www.worldcat.org/>`_
-   `Worldcat via FirstSearch <https://discover.library.unt.edu/catalog/b2247936>`_ (Accessible to UNT staff/students)

**More Guidelines:**

-   [Quick-Start Metadata Guide][]
-   [Input Guidelines for Descriptive Metadata][]
-   `Metadata Home <https://library.unt.edu/metadata/>`_

[more information]: https://library.unt.edu/digital-projects-unit/metadata/minimally-viable-records/
[contributors]: https://library.unt.edu/digital-projects-unit/metadata/fields/contributor/
[Role]: https://library.unt.edu/digital-projects-unit/metadata/fields/creator/#creator-role
[definition page]: https://library.unt.edu/digital-projects-unit/metadata/fields/creator-and-contributor-definitions/
[Note]: https://library.unt.edu/digital-projects-unit/metadata/fields/note/#metadata-display-notes
[Info]: https://library.unt.edu/digital-projects-unit/metadata/fields/creator/#creator-information
[Non-Displaying Note]: https://library.unt.edu/digital-projects-unit/metadata/fields/note/#metadata-non-displaying-note
[Publisher]: https://library.unt.edu/digital-projects-unit/metadata/fields/publisher/
[Quick-Start Metadata Guide]: https://library.unt.edu/digital-projects-unit/metadata/quick-start-guide/
[Input Guidelines for Descriptive Metadata]: https://library.unt.edu/digital-projects-unit/metadata/input-guidelines-descriptive/
[Metadata Home]: https://library.unt.edu/digital-projects-unit/metadata/

