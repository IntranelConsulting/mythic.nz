---
title: Keyboard Shortcuts
description: Keyboard Shortcuts
tags: help
order: 4
---

<style type="text/css">
    table {
        --padding: var(--text-size-base)
    }
    table td + td {
        width: 50%;
        white-space: nowrap;
    }
    table i {
      padding: 0 1em;
    }
</style>

[Go back to Help](/help)

## Keyboard Shortcuts

There are two sets of keyboard shortcuts, or hotkeys, that can be used in Mythic. The first are global for navigating around the overall Storybook itself, while the second set are for working with the text editor while writing.

> In the following tables "mod" means the Command key on MacOS and the Control key on Windows

### Global Storybook

| Action                             | Keyboard Shortcut                                                                        |
| ---------------------------------- | ---------------------------------------------------------------------------------------- |
| Create new page                    | <kbd>mod</kbd> + <kbd>shift</kbd> + <kbd>c</kbd>                                         |
| Save/Publish page                  | <kbd>mod</kbd> + <kbd>shift</kbd> + <kbd>s</kbd> <i>or</i> <kbd>mod</kbd> + <kbd>s</kbd> |
| Toggle edit mode                   | <kbd>mod</kbd> + <kbd>shift</kbd> + <kbd>e</kbd>                                         |
| Toggle the Page Location modal     | <kbd>mod</kbd> + <kbd>shift</kbd> + <kbd>l</kbd>                                         |
| Search pages                       | <kbd>mod</kbd> + <kbd>shift</kbd> + <kbd>f</kbd>                                         |
| Close any modal or leave edit mode | <kbd>Esc</kbd>                                                                           |
| Keyboard shortcuts help modal      | <kbd>mod</kbd> + <kbd>/</kbd>                                                            |

### Storybook Text Editor

Many of these text modifications can also be used by writing [Markdown syntax](https://daringfireball.net/projects/markdown).

| Action                     | Keyboard Shortcut                                                                                          |
| -------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Headings (multiple levels) | <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>(1-6)</kbd>                                                      |
| Bold                       | <kbd>mod</kbd> + <kbd>b</kbd>                                                                              |
| Italic                     | <kbd>mod</kbd> + <kbd>i</kbd>                                                                              |
| Highlight                  | <kbd>mod</kbd> + <kbd>\`</kbd> <span class="hide-windows"><i>or</i> <kbd>ctrl</kbd> + <kbd>\`</kbd></span> |
| Bullet list                | <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>\*</kbd>                                                         |
| Numbered list              | <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>(</kbd>                                                          |
| Link menu                  | <kbd>mod</kbd> + <kbd>k</kbd>                                                                              |
| Quote                      | <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>></kbd>                                                          |
| Notes                      | <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>\\</kbd>                                                         |
| Undo                       | <kbd>mod</kbd> + <kbd>z</kbd>                                                                              |
| Redo                       | <kbd>mod</kbd> + <kbd>shift</kbd> + <kbd>z</kbd> <i>or</i> <kbd>mod</kbd> + <kbd>y</kbd>                   |

<script type="text/javascript">
var isMac = /mac/i.test(navigator.platform) || /macintosh/i.test(navigator.userAgent);
var modKey = isMac ? "⌘" : "ctrl";
if(isMac) {
    document.body.classList.add('mac');
}
var kbd = document.querySelectorAll('kbd');
kbd.forEach(i => {
    i.textContent = i.textContent.replace(/mod/g, modKey);
});
document.querySelectorAll('blockquote')[0].remove();
</script>