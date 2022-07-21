---
title: Using the Storybook Editor
description: How to use the Storybook Editor
tags: help
order: 1
---

[Go back to Help](/help)

## Using the Storybook Editor

This page will walk you through writing content and using it while running a game in the Storybook editor.

### Getting Started

1. Create a new Storybook from your [Dashboard](https://app.mythic.nz/) then click its title to load it.

<figure>
    {% image "./src/assets/help/storybook-editor/create-dashboard.png", "Screenshot highlighting the create button in the Dashboard", ["599px"], images.sizes.help, "" %}
    <figcaption>Create a new Storybook from your Dashboard.</figcaption>
</figure>

2. When you first arrive in an empty Storybook, begin by creating your first page. Do this with the Create button in the left-hand menu or the link on the initial welcome page.

<figure>
    {% image "./src/assets/help/storybook-editor/create.avif", "Screenshot highlighting page creation links", ["803px"], images.sizes.help, "" %}
    <figcaption>The button and link to create a new page.</figcaption>
</figure>

3. From here, the writing process is the same whether you are making a new document or editing an existing one.

### Writing

In writing mode, the content editor ([detailed below](#content-editor)) starts with cursor focus so you can immediately begin creating.

To create a page, you only need a title; however you can also specify a location. Pages are organised in a nested folder hierarchy. The location defaults to match the folder you were in when you clicked "Create". For example, if you are reading a page located in "World -> Cities and Towns" your new page would start with the same location.

#### Selecting a Page Location

1. Click on the "Location" button in the upper right corner of the editor to select an existing folder or create a new one for your page.

<figure>
    {% image "./src/assets/help/storybook-editor/location.png", "Screenshot showing the location button in the upper right corner of the editor", ["469px"], images.sizes.help, "" %}
    <figcaption>The button to select a location of the page.</figcaption>
</figure>

2. Using the dropdown menu, select an existing folder (or Top Level) and optionally create a new sub-folder folder with the text field.

<figure>
    {% image "./src/assets/help/storybook-editor/page-location.avif", "Screenshot of document page location modal", ["412px"], images.sizes.help, "" %}
    <figcaption>Select where in the folder hierarchy your page lives.</figcaption>
</figure>

Selecting **"This is a cover page"** will set your page as a folder cover page and automatically set the page title for you to match your folder name.

> A folder may include a cover page which is displayed when you select the folder itself. A folder without a cover page will not load to a new page, but only expand to show its children.

### Content Editor

At the top of the content editor is a menu for styling the text and inserting various components such as links, tables, and images. Text is styled according to [Markdown syntax](https://daringfireball.net/projects/markdown) (more syntax documentation can also be found at [Markdown Guide](https://www.markdownguide.org/)).

<figure>
    {% image "./src/assets/help/storybook-editor/menu.avif", "Screenshot of editor menu", ["805px"], images.sizes.help, "" %}
    <figcaption>Use the editor menu to control text and insert elements. Hotkeys and Markdown syntax work as well.</figcaption>
</figure>

> Note that when using Markdown to create headings, the editor only supports the hash syntax (`# Sample Heading`).

#### Images

You can upload images or link to external sources by clicking on the image menu button.

Supported image file types: `.jpg`, `.png`, `.bmp`, `.gif`, `.webp`, `.avif`.

<figure>
    {% image "./src/assets/help/storybook-editor/image.avif", "Screenshot of image modal", ["248px"], images.sizes.help, "" %}
    <figcaption>Upload an image or link to one.</figcaption>
</figure>

In this modal, select an image from your device or insert a URL.

> While not required, it is a good idea to provide a description for the image that will be read by a screen reader, or displayed if the image doesn't load.

The image is inserted at the location of the text cursor. Once placed, you can drag it to a new location in your document. Hover over an image to display its placement menu.

An image can be floated to the left or right so that text flows around it. Clicking on an active left or right flow button will reset the positioning to the default "block" so that it sits on a line by itself.

Currently, you can size images to 25%, 50%, or 100% of the text container, though never more than their maximum width.

#### Links

<figure>
    {% image "./src/assets/help/storybook-editor/link-icon.png", "Screenshot showing the link icon in the editor menu", ["464px"], images.sizes.help, "" %}
    <figcaption>Click the link icon in the menu.</figcaption>
</figure>

You can link to internal pages and external webpages by selecting text and clicking the link icon in the menu. In the displayed modal, search page by title or insert a URL (e.g., `https://example.com/page.html`).

<figure>
    {% image "./src/assets/help/storybook-editor/link.avif", "Screenshot of link modal", ["275px"], images.sizes.help, "" %}   
    <figcaption>Link to an external or internal page.</figcaption>
</figure>

Internal pages will also be automatically linked when in reading mode if the text is an exact match of a page title. No special characters to prompt this are required.

#### Tables

Using the table menu button will generate a 3 x 3 table, including a header row. While the cursor is in the table, you can add or remove rows and columns.

<figure>
    {% image "./src/assets/help/storybook-editor/table.png", "Screenshot showing the table", ["336px"], images.sizes.help, "" %}
    <figcaption>Create a 3 x 3 table.</figcaption>
</figure>

If the table is the last element in the document, use the arrow keys to move the cursor past the table to begin typing outside of it again.

### Reading

The reading view of the Storybook is identical to the editing view, but without the writing tools. You can find pages using the sidebar folder list and search field.

<figure>
    {% image "./src/assets/help/storybook-editor/reading.png", "Screenshot showing the sidebar folder list and search field", ["311px"], images.sizes.help, "" %}
    <figcaption>Find pages using the sidebar folder list and search field.</figcaption>
</figure>

If your page has headings, these will be used to build a table of contents. This makes navigating large documents much easier. The toggle button to show the table of contents is on the left by the navigation pane for large screens and on small screens it is next to the edit button.

> Note that clicking on a section in the table of contents cause a short animation to highlight that heading on your page. If you prefer that not to happen, setting your operating system or browser to "prefer reduced motion" will remove the animation effect and simply underline the heading.

While in reading mode, Mythic automatically adds links to page titles that match the existing pages or storybooks. If you have a link to another storybook page, you can preview it by hovering over the link. This scrollable preview contains the entire page content and you can go to this page by clicking through the link.

<figure>
    {% image "./src/assets/help/storybook-editor/content-preview.png", "Screenshot of content preview", ["649px"], images.sizes.help, "" %}
    <figcaption>Quickly view the content of a linked page by hovering over the link.</figcaption>
</figure>

Any `highlighted text` that solely contains dice roll notation, that is `2d6`, can be clicked to roll it and get a random number. Modifiers can be used to add or subtract from the roll: `3d8 + 4` or `d4-1`. The spaces and number before the letter "d" are optional as shown in the last example.

<figure>
    {% image "./src/assets/help/storybook-editor/dice-roll.png", "Example showing the dice roll of 2d6 + 3", ["608px"], images.sizes.help, "" %}
    <figcaption>The tooltip can be dismissed by clicking elsewhere on the page.</figcaption>
</figure>
