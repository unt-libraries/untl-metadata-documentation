==========
Edit Count
==========

The "Count" tool in the edit interface provides a listing of the number of entries in a field, i.e., how many records have 0, 1, 2, etc. entries in that field.

*************
General Notes
*************

-	Data values are compared across the system, but can be limited to specific critera 
	(e.g., a resource type or collection) using the filters on the left side of the screen
-	All tools provide information based on a field or field-qualifier combination, e.g.:

	-	A field only (any qualifiers, or non-qualified)
	-	Field values with missing qualifiers (i.e., "No Qualifier Selected")
	-	A field with a specific qualifier 
		(e.g., creators labeled "author" or subjects labeled "UNTL-BS")
	-	Note that creator and contributor have two options: the role 		
		(main qualifier) and the type, listed at the bottom of the list as per-type (personal 
		name) and org-type (organizational name)

*********
Tool Uses
*********
Count is most useful for finding:

-	Unexpected entries in fields, e.g.:

	-	text accidentally pasted in field not used for a particular collection
	-	an usually high number of entries for a field
	
-	Missing values for fields that are expected, e.g.:

	-	only 1 title entry for serial items, or in a collection using series titles
	-	0 UNTL-BS subject entries in Portal records
	-	0 creator entries for published text

-	Missing qualifiers (i.e., a value in a qualified field with "No Qualifier Selected")


****************
Tool Limitations
****************

-	Since counts are are based on the indexing of unique values, identical values will only be 
	counted once.  This is most often an issue for hidden/incomplete records when a placeholder 
	value is in multiple entries but the non-unique value is only counted as a single entry.

