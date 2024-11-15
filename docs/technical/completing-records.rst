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

* **For formatting or usage questions** (e.g., how to enter an unusual name or whether you should include certain information), use the “Help” link on the field in the editing system – or the links on this page – to see suggestions, guidelines, and examples for different kinds of situations
* **If you find an unusual item**, it may be helpful to search in the Digital Collections for similar items to see how they have been described before or check to see if there are project-specific guidelines
* **To get more context about an item**, you may be able to find other records or information online by looking in the library catalog or WorldCat (for formally published books, reports, pamphlets, etc.), by searching finding aids or similar documentation (for archival materials), or by using a search engine (if you want contextual information about an artist, personal collector, etc.)


General Considerations
======================

A couple of notes about entering metadata and records in general:

* There is no way to add mark-up or styling to any of the text in metadata fields (e.g., italics or bold)
* Any existing encoding characters or mark-up should be removed if you are pasting text from elsewhere (e.g., MARC sub-fields from catalog records, some PDF punctuation is translated as encoding strings, etc.)
* Except for non-display notes, all text in all fields will be visible when the record is made public -- any comments or placeholder values in the template or added by editors will display if not removed


*********************************
Completing Records from Templates
*********************************

Most records are uploaded with at least some pre-filled values or placeholders and may also have notes or reminders.  The goal of these values is to save time so that editors don't have to enter the same value frequently (e.g., if all of the items in a collection have the same creator), to suggest options for greater consistency (e.g., subject values from controlled vocabularies that may apply), and to remind editors to check whether information applies to a specific item.  Some things to keep in mind:

-	All placeholders must be replaced by appropriate values or **removed** if they do not apply.  (If you do not know what information should be entered, review the guidelines 	for that field.)  Examples of placeholders:

	-	[title] or {{{add title}}}
	-	{{{name}}}
	-	{{{add named contributors}}}
	-	YYYY-MM or YYYY-SS
	-	Volume #, Number #
	
-	Some values may apply frequently, but not to every item in a collection; for example, we might include a creator name that applies to 90% of the records so 
	that editors do not have to add it every time, but there are still a handful of records where the creator name should be changed or removed.  This also applies
	to suggested subject values that should be removed or changed if they do not apply to the **specific item**.
	
-	For certain collections, there may be additional notes included as placeholders to remind editors about special issues -- these will display publicly if they
	are not removed and do not belong in the completed record, e.g.:
	
	-	{{{look for similar records in the collection that are already completed}}}
	-	{{{add relevant subjects}}}

-	When removing an existing value or placeholder that does not apply, use the "x" button to completely remove the **whole** entry.  If a placeholder includes qualifier
	values (e.g., a creator placeholder that has a type/role pre-chosen), removing only the text will leave an empty entry with a label that still displays publicly and
	these can only be found by looking at every individual record.
	

****************************
Issues with Items or Records
****************************

Here are some general guidelines to make things easier for administrators and other editors who may be looking at items in the edit system:

-	If you believe (or have determined) that an item should remain hidden for any reason, add a note to the main title with a brief explanation.  
	This way, if another editor is viewing hidden records to see why a collection is not fully visible, it will be apparent from the Dashboard why something is not public.
	For example:
	
	-	In the patent collection we know some items have scanning issues or are outside the scope of the collection (i.e., not patented by/assigned to Texas inventors)
		so editors append text to the end of the existing title (usually an identifier) marking what is wrong, e.g.:
		
			-	SKIP (reissue) -- usp017/re011446
			-	Adding-Machine  --- NOT TEXAS
			-	SKIP last page blacked out
			-	SKIP: 01086715 -- Not a Texas Patent.
			-	Baling-Press  --  MISSING FIRST PAGE
			-	1407533 - Incomplete
			
	-	Sometimes there are items in an archival collection that have been scanned for preservation but are found to contain personal information or to 
		have other privacy/usage concerns and need to remain hidden until staff members can resolve any issues, e.g.:
		
			-	[title] * * Home addresses - keep hidden * *
			-	[title] -- contains SSN, leave hidden
			-	[title]	-- KEEP HIDDEN for privacy concerns
			
	-	If an item is a duplicate of another item (i.e., the content is identical and we would likely not want to keep both), it is helpful to include the ARK of
		the other version so that anyone reviewing these records can verify that they are duplicates or decide whether both versions should be kept, e.g.:
		
			-	[title] -- duplicate of ark:/67531/metapth34017
			
-	If an item should be deleted (usually because it is a duplicate), it should be clearly marked in the title -- note that only collection managers or administrators 
	should be making this determination; records marked to be deleted will be suppressed and **no longer viewable in the edit system** (i.e., this cannot be undone)
	
	-	[title] -- DELETE, duplicate of ark:/67531/meta#
	-	DELETE, duplicate
	
-	Generally, records that have been made public should not be re-hidden, but there are exceptions (e.g., identification of duplicates, take-down requests, etc.).  
	In cases where a choice has been made to re-hide a record, a note should be added to provide any additional context and information not included in the title.
