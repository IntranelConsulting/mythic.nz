---
title: Import Content
description: Import Your Existing Content to Mythic
tags: help
order: 2
---

[Go back to Help](/help)

## Import Your Existing Content to Mythic

When creating or editing a Storybook from the Dashboard you have the option of importing content into your Mythic Storybook as pages.

Using the file browser (shown below), select the documents you want to import and upload them. Currently we support plain text documents as either `.txt` or `.md` files. These can be contained in a `.zip` file. Markdown syntax in either format is kept and rendered in the editor.

<figure>
    {% image "./src/assets/help/import/import.jpg", "Screenshot showing the import file selector", ["392px"], images.sizes.help, "" %}
    <figcaption>The file selector for importing content.</figcaption>
</figure>

You can upload multiple documents at once and mix-and-match formats. See the [examples](#examples) below.

Once you've imported your files, you'll want to go through your pages in the Storybook editor to make sure that all the internal links are set up correctly. If your content contains locally referenced images, you will need to upload those separately per page.

In the future we plan to support more file types.

### Naming and Location of Pages

Pages can be titled based on specified metadata or their filename. Mythic recognises YAML frontmatter data at the top of files. If the key `title` exists, it will use that. If it does not exist, the filename (minus the file extension) will be used instead. Don't worry about clashes—duplicate titles will be saved with an incrementing number after their name.

Here's an example of using frontmatter:

`sevlade-forest.md`
```
---
title: Sevlade Forest
---
# Description

The Sevlade Forest lies to the east of Dawn Lake, north of Greycott. It is large and while safe near the road...
```

If you upload a `.zip` file containing a folder structure of files, Mythic will automatically create the correct hierarchy of pages. If you have a file with a page title that matches a folder, that page will be used as the parent of the files in the folder. Otherwise, Mythic will create a blank parent page based on the folder name.

When you upload text documents that are not in a `.zip` file they will be imported to the top level of your Storybook.

When creating a ZIP file, decide if you want the files to populate the top level of your Storybook or to be placed under a parent page.

For top level, create your ZIP by selecting all the files you want to import and putting them in to a ZIP.

<figure>
     {% image "./src/assets/help/import/top-level.png", "Screenshot of documents being placed in a ZIP file for a top-level position", ["326px"], images.sizes.help, "" %}
    <figcaption>All the documents are located in a ZIP.</figcaption>
</figure>

To place the imported content under a parent page, place the _folder_ containing your documents into a ZIP. That folder will become the parent page.

<figure>
     {% image "./src/assets/help/import/sub-folder.png", "Screenshot of documents being placed in a ZIP file for a sub-folder position", ["303px"], images.sizes.help, "" %}
    <figcaption>All the documents are in the folder loacated in a ZIP.</figcaption>
</figure>

> Note: On MacOS, you may find pages duplicated if you create the ZIP archive with all the subfolders expanded. It seems that the revealed file is added to the archive _and_ the folder which then adds the contained files. You may need to collapse the subfolders.

> Note: If you are importing a Storybook that was exported from Mythic, you may notice a two frontmatter keys called `mythicId` and `mythicParentId`. These are used to match pages with their parents and should not be edited. You should also not *add* these keys to files you are importing that were not exported from Mythic. Instead, create folder structures to inform Mythic about your page hierarchy.

### Examples

Both of the following examples were imported into an existing Storybook that contained the pages "Ice Fortress" and "Rimeflame Mountains". If the import contained documents of the same title, the incoming pages would be suffixed with a numeral, e.g., "Ice Fortress 1".

<figure>
    {% image "./src/assets/help/import/import-zip-folder.png", "Create a ZIP with a containing folder", ["327px"], images.sizes.help, "" %}
</figure>

Creating a ZIP from a containing folder ("Storm of Ice") results in your content being populated into a subfolder of the same name.

<figure>
    {% image "./src/assets/help/import/import-app-folder.png", "Results from the import to a containing folder", ["213px"], images.sizes.help, "" %}
</figure>

---

<figure>
    {% image "./src/assets/help/import/import-zip.png", "Create a ZIP for top level content", ["317px"], images.sizes.help, "" %}
</figure>

When populating the content into the top level of the Storybook, select all the files and folders together. You may need to collapse the folders.

<figure>
    {% image "./src/assets/help/import/import-app.png", "Results from the import into the top level", ["215px"], images.sizes.help, "" %}
</figure>

### Known Issues

- Images from a Mythic export do not re-import.