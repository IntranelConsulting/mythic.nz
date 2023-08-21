---
title: Export Storybooks
description: Export Your Storybooks from Mythic
tags: help
order: 3
---

[Go back to Help](/help)

## Export Your Storybooks from Mythic

We want you to be able to get your writing out of Mythic easily, regardless of why. It's your data. Mythic currently exports to Markdown files, though we would like to support other formats like HTML and PDF in the future.

Find the Storybook you want to export in the Mythic Dashboard, and click the "Settings" button in the bottom right corner to open the settings modal.

<figure>
    {% image "./src/assets/help/export/settings.png", "Open the Settings modal to export your content", ["588px"], images.sizes.help, "" %}
    <figcaption>Click "Settings" to open the settings modal.</figcaption>
</figure>

In the "Export" section you will see two checkboxes—use these to select what you would like to download.

<figure>
     {% image "./src/assets/help/export/export.png", "Export Options in the Settings modal", ["603px"], images.sizes.help, "" %}
    <figcaption>Choose what you would like to include in your export Zip.</figcaption>
</figure>

You can choose to export just your writing, just the images on your pages, or both. Whatever you choose to export will be downloaded as a `.zip` file which you will need to extract or unpack in order to view and use your content.

### Page Metadata

The exported Markdown files include metadata at the top of the document in YAML frontmatter syntax. This includes the full page title (file names have special characters removed) and information used to correctly relate child and parent pages. Here's an example:

`sevlade-forest.md`
```
---
title: Sevlade Forest
mythicId: o810Ude5rEGSGy75PDL57A
mythicParentId: ZxSyb2cwq0426cO7grZWkw
---
# Description

The Sevlade Forest lies to the east of Dawn Lake, north of Greycott. It is large and while safe near the road...
```

While changing the `Title` is fine, editing `mythicId` and `mythicParentId` can cause issues when re-importing.

### Known Issues

- Links between pages in the exported Markdown may not work and could need to be manually updated.
- Images on Mythic are only viewable to your account, so if you decide to not download images with the Storybook, they will not link or display correctly.
