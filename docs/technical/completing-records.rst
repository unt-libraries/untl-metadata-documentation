###################################################
Completing Metadata & Using the UNTL Editing System
###################################################

************
Introduction
************

This page will discuss some of the general processes about how an editor goes about completing records within the edit system and other suggestions for best practices related to managing metadata records that have been uploaded into the Digital Collections.


For specific information about how individual fields are used or how values are formatted to complete records, please refer to the other guides listed in the left-hand menu.



*******************************************
Considerations Related to Metadata Creation
*******************************************


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

+-----------------------------------------------------------------------------------+----------------------------------------------------+
|**For formatting or usage questions**                                                                                                   |
+-----------------------------------------------------------------------------------+----------------------------------------------------+
|For example:                                                                       |Review the guidelines to see instructions and       |
|                                                                                   |examples, by:                                       |
| - A name formatted differently from most common names                             |                                                    |
| - Whether certain information should be included in a particular field            | - Using the navigation at left                     |
| - An unusual date                                                                 | - Looking at the top of the field in the edit      |
| - Information for an infrequently-used field (like source)                        |   system and clicking on a link:                   |
|                                                                                   |                                                    |
|                                                                                   |   - "Help" to see the "Quick-Start" summary of     |
|                                                                                   |     the field highlights and most frequently-used  |
|                                                                                   |     examples                                       |
|                                                                                   |   - "Guide" to see the full guidelines including   |
|                                                                                   |     detailed suggestions and examples, additional  |
|                                                                                   |     resources, etc.                                |
|                                                                                   |                                                    |
|                                                                                   |.. image:: ../_static/images/help-link.png          |
|                                                                                   |   :alt: Screenshot of help links in field title bar|
+-----------------------------------------------------------------------------------+----------------------------------------------------+
|**If you find an unusual item**                                                                                                         |
+-----------------------------------------------------------------------------------+----------------------------------------------------+
|For example, an item:                                                              | - Check to see if there are project-specific       |
|                                                                                   |   guidelines or examples in the documentation for  |
| - different than others in a particular collection                                |   the fields                                       |
| - that does not have standard template values                                     | - Try searching in the Digital Collections for     |
| - without standardized descriptive guidelines (like correspondence)               |   similar items to see how they have been described|
| - that doesn't fit in a specific resource type category                           |   before                                           |
+-----------------------------------------------------------------------------------+----------------------------------------------------+
|**To get more context about an item**                                                                                                   |
+-----------------------------------------------------------------------------------+----------------------------------------------------+
|                                                                                   | - For published items, try looking in the library  |
|                                                                                   |   catalog or WorldCat/OCLC to see if it has a      |
|                                                                                   |   record                                           |
|                                                                                   | - Consult any accompanying information (inventory  |
|                                                                                   |   sheets, finding aids, collection descriptions)   |
|                                                                                   | - Occasionally, it may be helpful to search for    |
|                                                                                   |   more information online (just be mindful of how  |
|                                                                                   |   long you spend on this, especially for an        |
|                                                                                   |   individual item)                                 |
+-----------------------------------------------------------------------------------+----------------------------------------------------+

General Considerations
======================

A couple of notes about entering metadata and records in general:

* There is no way to add mark-up or styling to any of the text in metadata fields (e.g., italics or bold)
* Any existing encoding characters or mark-up should be removed if you are pasting text from elsewhere (e.g., MARC sub-fields from catalog records, some PDF punctuation is translated as encoding strings, etc.)
* Except for non-display notes, all text in all fields will be visible when the record is made public -- any comments or placeholder values in the template or added by editors will display if not removed


*********************************
Completing Records from Templates
*********************************

Most records are uploaded with at least some pre-filled values or placeholders and may also have notes or reminders.  The goal of these values is to save time so that editors don't have to enter the same value frequently (e.g., if all of the items in a collection have the same creator), to suggest options for greater consistency (e.g., subject values from controlled vocabularies that may apply), and to remind editors to check whether information applies to a specific item.  



Some things to keep in mind:

+-----------------------------------------------------------------------------------+----------------------------------------------------+
|All placeholders must be replaced by appropriate values or **removed** if they do not apply                                             |
+-----------------------------------------------------------------------------------+----------------------------------------------------+
| - If you do not know what information should be entered, review the guidelines for|Examples of placeholders:                           |
|   that field                                                                      |                                                    |
|                                                                                   | - [title] or {{{add title}}}                       |
|                                                                                   | - {{{name}}}                                       |
|                                                                                   | - {{{add named contributors}}}                     |
|                                                                                   | - YYYY-MM or YYYY-SS                               |
|                                                                                   | - Volume #, Number #                               |
+-----------------------------------------------------------------------------------+----------------------------------------------------+
| - In some cases, the type of placeholder may signal what kind of information ought|For example:                                        |
|   to be entered                                                                   |                                                    |
|                                                                                   | | {{{month YYYY}}} > > December 2008               |
|                                                                                   |                                                    |
|                                                                                   | | {x, #} p.  > > vii, 300 p.  (i.e., Roman numerals|
|                                                                                   |   and pagination are likely)                       |
+-----------------------------------------------------------------------------------+----------------------------------------------------+
| - Some values may apply frequently, but not to every item in a collection; for example, we might include a creator name that applies to|
|   90% of the records so that editors do not have to add it every time, but there are still a handful of records where the creator name |
|   should be changed or removed.  This also applies to suggested subject values that should be removed or changed if they do not apply  |
|   to the **specific item**.                                                                                                            |
+-----------------------------------------------------------------------------------+----------------------------------------------------+
| - For certain collections, there may be additional notes included as placeholders |Examples of notes:                                  |
|   to remind editors about special issues                                          |                                                    |
| - These will display publicly if they are not removed                             | | {{{look for similar records in the collection    |
|                                                                                   |   that are already completed}}}                    |
|                                                                                   |                                                    |
|                                                                                   | | {{{add relevant subjects}}}                      |
+-----------------------------------------------------------------------------------+----------------------------------------------------+
| - When removing an existing value or placeholder that does not apply, use the "x" | .. image:: ../_static/images/x-button.png          |
|   button to completely remove the **whole** entry                                 |   :alt: Screenshot of the add/remove buttons.      |
| - If a placeholder includes qualifier values (e.g., a creator placeholder that has|                                                    |
|   a type/role pre-chosen), removing only the text will leave an empty entry with a|                                                    |
|   label that still displays publicly and these can only be found by looking at    |                                                    |
|   every individual record.                                                        |                                                    |
+-----------------------------------------------------------------------------------+----------------------------------------------------+
	

****************************
Issues with Items or Records
****************************

Here are some general guidelines to make things easier for administrators and other editors who may be looking at items in the edit system:

+-----------------------------------------------------------------------------------+----------------------------------------------------+
|If you believe (or have determined) that an item should remain hidden for any reason, add a note to the main title with a brief         |
|explanation.  This way, if another editor is viewing hidden records to see why a collection is not fully visible, it will be apparent   |
|from the Dashboard why something is not public.  For example:                                                                           |
+-----------------------------------------------------------------------------------+----------------------------------------------------+
| - In the patent collection we know some items have scanning issues or are outside | | SKIP (reissue) -- usp017/re011446                |
|   the scope of the collection (i.e., not patented by/assigned to Texas inventors) |                                                    |
|   so editors append text to the end of the existing title (usually an identifier) | | Adding-Machine  --- NOT TEXAS                    |
|   marking what is wrong, e.g.:                                                    |                                                    |
|                                                                                   | | SKIP last page blacked out                       |
|                                                                                   |                                                    |
|                                                                                   | | SKIP: 01086715 -- Not a Texas Patent.            |
|                                                                                   |                                                    |
|                                                                                   | | Baling-Press  --  MISSING FIRST PAGE             |
|                                                                                   |                                                    |
|                                                                                   | | 1407533 - Incomplete                             |
+-----------------------------------------------------------------------------------+----------------------------------------------------+
| - Sometimes there are items in an archival collection that have been scanned for  | | [title] * * Home addresses - keep hidden * *     |
|   preservation but are found to contain personal information or to have other     |                                                    |
|   privacy/usage concerns and need to remain hidden until staff members can resolve| | [title] -- contains SSN, leave hidden            |
|   any issues, e.g.:                                                               |                                                    |
|                                                                                   | | [title]	-- KEEP HIDDEN for privacy concerns      |
+-----------------------------------------------------------------------------------+----------------------------------------------------+
| - If an item is a duplicate of another item (i.e., the content is identical and we|[title] -- duplicate of ark:/67531/metapth34017     |
|   would likely not want to keep both), it is helpful to include the ARK of        |                                                    |
|   the other version so that anyone reviewing these records can verify that they   |                                                    |
|   are duplicates or decide whether both versions should be kept, e.g.:            |                                                    |
+-----------------------------------------------------------------------------------+----------------------------------------------------+
|If an item should be deleted (usually because it is a duplicate), it should be clearly marked in the title                              |
+-----------------------------------------------------------------------------------+----------------------------------------------------+
| - Note that only collection managers or administrators should be making this      | | [title] -- DELETE, duplicate of ark:/67531/meta# |
|   determination; records marked to be deleted will be suppressed and **no longer  |                                                    |
|   viewable in the edit system** (i.e., this cannot be undone)                     | | DELETE, duplicate                                |
+-----------------------------------------------------------------------------------+----------------------------------------------------+
|Generally, records that have been made public should not be re-hidden, but there are exceptions (e.g., identification of duplicates,    |
|take-down requests, etc.).                                                                                                              |
+-----------------------------------------------------------------------------------+----------------------------------------------------+
| - In cases where a choice has been made to re-hide a record, a note should be     |Non-Display Notes:                                  |
|   added to provide any additional context and information not included in the     |                                                    |
|   title.                                                                          | | This version contains consent, keep hidden but do|
|                                                                                   |   not remove.                                      |
|                                                                                   |                                                    |
|                                                                                   | | To remain hidden due to personal contact         |
|                                                                                   |   information -- and possible copyright issues     |
+-----------------------------------------------------------------------------------+----------------------------------------------------+