########
Language
########

.. _language-definition:

**********
Definition
**********

The language(s) of the intellectual content of the resource.

.. _language-sources:

********************************************
Where Can the Language Information be Found?
********************************************

Language is determined by reading/examining the item:

+---------------------------------------+-------------------------------------------------------+
|**Item Types**                         |**Information Sources**                                |
+=======================================+=======================================================+
|For text                               |- title page                                           |
|                                       |- text/content                                         |
+---------------------------------------+-------------------------------------------------------+
|For images                             |- notes on bottom or back of a photograph              |
|                                       |- visible items (people, surroundings, objects, etc.)  |
|                                       |- captions                                             |
+---------------------------------------+-------------------------------------------------------+
|For maps                               |- statement in a caption or legend                     |
|                                       |- notes around the outside of the map                  |
|                                       |- place/physical feature labels                        |
+---------------------------------------+-------------------------------------------------------+
|For music scores                       |- title page or header                                 |
|                                       |- table of contents                                    |
|                                       |- lyrics                                               |
+---------------------------------------+-------------------------------------------------------+
|For videos                             |- label on disc                                        |
|                                       |- container cover                                      |
|                                       |- title screens or content                             |
+---------------------------------------+-------------------------------------------------------+
|For sound files                        |- information on disc/cassette                         |
|                                       |- container information                                |
|                                       |- content of audio (spoken/sung words)                 |
+---------------------------------------+-------------------------------------------------------+
|For computer files                     |- title page/screen                                    |
|                                       |- text of document (content)                           |
+---------------------------------------+-------------------------------------------------------+

.. _language-form:

***************************************
How Language Works in the Metadata Form
***************************************

.. image:: ../_static/images/edit-language.png
   :alt: Screenshot of language element in metadata editing system.

Parts:
    Language -- drop-down menu

Repeatable?
	Yes - to include multiple language, click 'Add' to repeat the field

Required?
	 Yes - also see (:doc:`more information </minimally-viable-records>`) about required fields


.. _language-fill:

*************************************
How Should the Language be Filled in?
*************************************


+---------------------------------------------------------------------------+---------------------------------------+
| **Guideline**                                                             | **Examples**                          |
+===========================================================================+=======================================+
|-  Choose the appropriate language(s) from the `controlled                 |eng - English                          |
|   vocabulary <https://digital2.library.unt.edu/vocabularies/languages/>`_ |                                       |
+---------------------------------------------------------------------------+---------------------------------------+
|-  Include all relevant languages                                          |-  spa - Spanish                       |
|                                                                           |-  ger - German                        |
|   -   (do not include languages that are merely referenced or only appear |                                       |
|       as single words of text in another language)                        |                                       |
+---------------------------------------------------------------------------+---------------------------------------+
|-  For visual images that do not have a textual caption or text within the |nol - No Language                      |
|   image, choose "no language"                                             |                                       |
+---------------------------------------------------------------------------+---------------------------------------+
|-  If there are special circumstances or additional information about the  |-  eng - English                       |
|   language uses of the item, include it in the :doc: `note <note>` field  |-  spa - Spanish                       |
|   of :doc: `description <description>` field, as appropriate              |-  *Note:* Book is printed in two      |
|                                                                           |   sections, the first is Spanish and  |
|                                                                           |   the second is the English           |
|                                                                           |   translation                         |
+---------------------------------------------------------------------------+---------------------------------------+
|-  If the only text on the item consists of persons' names, choose "no     |-  nol - No Language                   |
|   language" and the text can be described in the :ref:`content description|-  *Note:* The name "Bartimaeus" is    |
|   <description-content>` or a :ref:`display note <note-display>`          |   carved into the top of the box.     |
+---------------------------------------------------------------------------+---------------------------------------+
|-  If the language of the item is not on the controlled vocabulary list (or|oth - Other                            |
|   cannot be determined from available resources), choose "other" and      +---------------------------------------+
|   include a :ref:`display note <note-display>` in the record              |*Note:* Language is unknown.           |
|-  Notify the `metadata administrators                                     +---------------------------------------+
|   <https://library.unt.edu/digital-projects-unit/contacts/>`_ if the      |*Note:* Text is in the Kutenai Indian  |
|   language is not on the list                                             |language.                              |
+---------------------------------------------------------------------------+---------------------------------------+


.. _language-examples:

***************
Other Examples:
***************

French map
   *Language:* fre - French

Laws of the Republic of Texas
   *Language:* eng - English

Photograph of Berlin showing marquees and shop windows
   *Language:* ger - German

Adding machine with a label saying, "Made in America"
   *Language:* eng - English

Landscape photograph
   *Language:* nol - No Language

Audio recording of testimony in Czech and German
   *Language:* cze - Czech
   *Language:* ger - German

Video in Hebrew with English subtitles
   - *Language:* heb - Hebrew
   - *Language:* eng - English
   - *Note:* Performed in Hebrew with English subtitles.

Article in Amharic with English translations
   - *Language:* oth - Other
   - *Language:* eng - English
   - *Note:* In Amharic with English translations in parallel columns.

Proceedings and abstracts in English and Spanish
   - *Language:* eng - English
   - *Language:* spa - Spanish
   - *Note:* Papers presented in Spanish or English with abstracts in English.

Recording of a music recital sung in Italian and French
   - *Language:* fre - French
   - *Language:* ita - Italian


.. _language-comments:

********
Comments
********

-   Preferred usage is to utilize a standard schema for language names
    as defined by ISO639-2:
    
    -   Three letter language codes, followed optionally by a two-letter
        country code (taken from the ISO 3166 standard).
    -   To simplify data entry, the system does not currently support
        the addition of a country code to the language code.
        
-	For less common languages that are not documented in the ISO standard,
	codes will come from `Glottolog <https://glottolog.org/>`_
	
	-	Undocumented languages may be added to Glottolog according to their requirements.


.. _language-resources:

*********
Resources
*********


-   UNT Language `Controlled Vocabulary <https://digital2.library.unt.edu/vocabularies/languages/>`_

**More Guidelines:**

-   :doc:`Quick-Start Metadata Guide </guides/quick-start-guide>`
-   `Metadata Home <https://library.unt.edu/metadata/>`_