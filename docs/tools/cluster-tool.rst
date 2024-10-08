============
Cluster Tool
============

The "Cluster" tool in the edit interface takes all of the values that match the criteria and recorganizes them according to two general functions:

1.	Values are run through an algorithm to create a normalized key (e.g., Smith, John A. > a john smith); only keys with multiple unique values are displayed as clusters.
2.	Values are sorted using a length or pattern as the key; clusters include all values but only display 100 per cluster.


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
		
-	Clicking on a value will open a search for all records matching the criteria and unique value

*********
Tool Uses
*********
Cluster is most useful for finding:

-	Using algorithms

	-	Differences in order and punctuation in similar terms 
		(e.g., a personal name entered inverted and not inverted)	
	
-	Using sorting
	
	-	Extreme outliers in length, particularly in text fields
	-	Incorrect formatting for fields that have specific patterns 
		(e.g., dates and physical descriptions)


****************
Tool Limitations
****************

-	When values are sorted according to lengths and patterns, clusters include all values.  
	Due to the size of individual clusters, only 100 values per cluster are listed in the display. 
	Although this can be changed (i.e., random, most/least frequent, first/last alphabetically), 
	for some extremely large clusters, there is no way to see all fo the relevant values.

