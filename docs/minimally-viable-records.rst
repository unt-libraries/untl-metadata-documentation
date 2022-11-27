########################
Minimally-Viable Records
########################

Metadata in the UNT Libraries’ Digital Collections uses the UNTL format, which is a locally-qualified Dublin Core schema with twenty-one (21) possible fields. 
Within the metadata documentation for the Digital Collections, there is an underlying concept of a minimally-viable record, i.e., the minimum amount of information required for a record to be usable.

A record meets the criteria for a “minimally-viable record” if it has values for eight required fields, representing the lowest common denominator of a “complete” record within the Digital Collections. 
Each of these field values can easily be determined or assigned by looking at an item, or through administrative information (for collection and institution).

Although we encourage metadata creators to enter all known/applicable information in relevant fields, optional fields contain information which may not be available or appropriate for all items.

***************
Required Fields
***************

+------------------------------+-----------------+---------------------------------+----------------------------------------------+---------------------------------------+
| Field                        | Qualifier       | Definition                      | Repeatability                                | Reason                                |
+==============================+=================+=========+=======================+==============================================+=======================================+
| :doc:`Title</fields/title>`  | Main Title      | The name given to the resource. | | Every item must have one (1) main title    | Every digital object should have a    |
|                              |                 |                                 | | Some records may have multiple title types | name encompassing the whole resource. | 
+------------------------------+-----------------+---------------------------------+----------------------------------------------+---------------------------------------+
| Language                     |                 | The language(s) of the          | Repeatable as necessary                      | * Assists in narrowing search results |
|                              |                 | intellectual content of the     |                                              |   and finding appropriate items.      |
|                              |                 | resource.                       |                                              | * There is an option for "No Language"|
|                              |                 |                                 |                                              |   to satisfy the requirement.         |
+------------------------------+-----------------+---------------------------------+----------------------------------------------+---------------------------------------+
| Description                  | Content         | Description of the content      | Not repeatable                               | Describes the item to assist users in |
|                              |                 | attributes of the resource.     |                                              | finding relevant resources.           |
+------------------------------+-----------------+---------------------------------+----------------------------------------------+---------------------------------------+
| Subjects and Keywords        | [any]           | The subjects or topics that     | A minimum of two subjects is required, there | Assists in locating items with similar|
|                              |                 | succinctly describe the content | is currently no defined maximum              | topics, particularly for image-based  |
|                              |                 | of the resource.                |                                              | items.                                |
+------------------------------+-----------------+---------------------------------+----------------------------------------------+---------------------------------------+
|                              | University of   | A locally-defined hierarchical  | At least one UNTL-BS term is required for    | These terms allow the "Browse by      |
|                              | North Texas     | controlled vocabulary for       | all records in The Portal to Texas History   | Subject" functionality.               |
|                              | Browse Subjects | subject description.            |                                              |                                       |
|                              | (UNTL-BS)       |                                 |                                              |                                       |
+------------------------------+-----------------+---------------------------------+----------------------------------------------+---------------------------------------+
| Collection                   |                 | Collection refers to a larger   | Items can be assigned to multiple            | This is a primary way that items are  |
|                              |                 | group of resources with a unique| collections as appropriate                   | grouped, topically, and provides a    |
|                              |                 | collective title to which the   |                                              | collection-level description for      |
|                              |                 | resource being described        |                                              | context.                              |
|                              |                 | belongs.                        |                                              |                                       |
+------------------------------+-----------------+---------------------------------+----------------------------------------------+---------------------------------------+
| Institution                  |                 | A consistent reference to the   | Not repeatable                               | * Represents the partner institution  |
|                              |                 | institution or administrative   |                                              |   that owns the physical collection   |
|                              |                 | unit that owns the digital      |                                              |   and has the ability to confer usage |
|                              |                 | resource for which metadata was |                                              |   permissions or provide copies.      |
|                              |                 | created.                        |                                              | * Internally, the coded partner is    |
|                              |                 |                                 |                                              |   also used for access to edit        |
|                              |                 |                                 |                                              |   metadata records.                   |
+------------------------------+-----------------+---------------------------------+----------------------------------------------+---------------------------------------+
| Resource Type                |                 | The type or category of the     | Not repeatable                               | Important for browsing by material    |
|                              |                 | primary content of the resource.|                                              | types.                                |
+------------------------------+-----------------+---------------------------------+----------------------------------------------+---------------------------------------+
| Format                       |                 | The digital manifestation of    | Not repeatable                               | Used for metadata interoperability.   |
|                              |                 | the resource.                   |                                              |                                       |
+------------------------------+-----------------+---------------------------------+----------------------------------------------+---------------------------------------+

***************
Optional Fields
***************

+------------------------------+---------------------------------------------+----------------------------------------------------------------+
| Field                        | Definition                                  | Usage Notes                                                    |
+==============================+=============================================+================================================================+
| Title (all other types)      | (See the glossary of title types.)          |                                                                |
+------------------------------+---------------------------------------------+----------------------------------------------------------------+
| Creator                      | The person, agency, or organization         | Must include a type (person or organization) and role.         |
|                              | primarily responsible for creating the      |                                                                |
|                              | intellectual content of the resource.       |                                                                |
+------------------------------+---------------------------------------------+----------------------------------------------------------------+
| Contributor                  | The name of the person or organization that | Must include a type (person or organization) and role.         |
|                              | has played an important but secondary role  |                                                                |
|                              | in creating the content of the resource and |                                                                |
|                              | is not specified in the creator element.    |                                                                |
+------------------------------+---------------------------------------------+----------------------------------------------------------------+
| Publisher                    | An entity responsible for making the        |                                                                |
|                              | resource available: the publisher of the    |                                                                |
|                              | original work.                              |                                                                |
+------------------------------+---------------------------------------------+----------------------------------------------------------------+
| Date                         | Dates associated with events in the life    | May have multiple date types, but not multiple entries for the |
|                              | cycle of the resource.                      | same date type.                                                |
+------------------------------+---------------------------------------------+----------------------------------------------------------------+
| Description (Physical)       | Description of the physical attributes of   | Inclusion is highly encouraged.                                |
|                              | the resource.                               |                                                                |
+------------------------------+---------------------------------------------+----------------------------------------------------------------+
| Primary Source               | The primary source field designates         | Not generally used for the UNT Digital Library.                |
|                              | firsthand accounts of historical subjects.  |                                                                |
+------------------------------+---------------------------------------------+----------------------------------------------------------------+
| Source                       | Information about a resource from which     |                                                                |
|                              | the current resource is derived.            |                                                                |
+------------------------------+---------------------------------------------+----------------------------------------------------------------+
| Citation                     | Information about a serial item, a resource |                                                                |
|                              | from which the current resource is derived, |                                                                |
|                              | or peer-reviewed status of items.           |                                                                |
+------------------------------+---------------------------------------------+----------------------------------------------------------------+
| Relation                     | Information about another resource that is  |                                                                |
|                              | related to the current resource.            |                                                                |
+------------------------------+---------------------------------------------+----------------------------------------------------------------+
| Rights Management            | Rights information provides information     | Rights information is not added to most records by default     |
|                              | about rights held in and over the resource; | since a blanket statement displays on every item page in the   | 
|                              | describes the conditions under which the    | Digital Collections.                                           |
|                              | work may be used, distributed, reproduced,  |                                                                |
|                              | etc.; how these conditions may change over  | Rights information can be entered in any (or all) of these     |
|                              | time; and whom to contact regarding the     | four categories:                                               |
|                              | copyright of the work.                      |                                                                |
|                              |                                             | * access: level of access allowed to users                     |
|                              |                                             | * license: Creative Commons license or copyrights assigned to  |
|                              |                                             |   the item                                                     |
|                              |                                             | * holder: entity that holds the rights to the item             |
|                              |                                             | * statement: free-text statement regarding rights or licensing |
+------------------------------+---------------------------------------------+----------------------------------------------------------------+
| Identifier                   | A numeric or alphanumeric string or a URL   |                                                                |
|                              | that identifies the item in a particular    |                                                                |
|                              | context.                                    |                                                                |
+------------------------------+---------------------------------------------+----------------------------------------------------------------+
| Degree Information           | Degree information provides detailed        | Included for items created at UNT (e.g., theses or             |
|                              | information associated with the work as it  | dissertations, and other scholarly materials).                 |
|                              | appears on the item.                        |                                                                |
+------------------------------+---------------------------------------------+----------------------------------------------------------------+
| Note                         | A "catch-all" field for additional          |                                                                |
|                              | information that cannot be entered in       |                                                                |
|                              | other elements.                             |                                                                |
+------------------------------+---------------------------------------------+----------------------------------------------------------------+



