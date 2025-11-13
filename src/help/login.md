---
title: Log In and Account Issues
description: Get help with log in and account issues on Mythic
tags: help
order: 5
---

[Go back to Help](/help)

## Log In and Account Issues

> This help page is about the authentication issue Mythic experienced in November 2025.

Mythic changed authentication providers (how you log into the app) which may have caused some errors for you. See the sections below for solutions. If you still need assistance, please [contact us](/contact/) and we'll be happy to help.

### I Can't Log In

If you are getting an incorrect password error message while signing in, you will need to reset your password. When we switched providers, passwords were not migrated. We're sorry for the hassle. 😔

### I Logged In, but Can't See My Storybooks

If you've successfully updated your password, but have no storybooks, it is likely that there was a problem pointing your migrated authentication account to your Mythic storybooks. The content isn't lost. Please [contact us](/contact/) and we can manually connect your account and storybooks. You'll need to include the email address you use to log in, and the name of at least some storybooks and/or page titles so that we can match them up correctly.

---

### What Happened?

Mythic uses a third-party provider called [Okta](https://www.okta.com) to handle account creation and log in. On the 7th of November (New Zealand time) our account with them was deactivated. The account type we were using was a development tier that we had set up during early access. Those account types were being decommissioned. Unfortunately, Okta decided to announce this change via their dev blog and a banner in the admin portal only, not through email channels. Since the system was working for Mythic, it's rare we need to use the admin portal. This meant we had no idea of this change and only found out when authentication to the Mythic app broke.

After a bit of frantic scrambling, we eventually got in touch with people at Okta who were sympathetic to the situation and were able to re-activate our account temporarily. However, Okta was still progressing with the final company-wide decommissioning scheduled for the 14th of November (unsure of timezone), which left a few days to migrate to a different system.

Due to the short timeframe, we decided to move to [Auth0](https://auth0.com). It is designed for standard web app user authentication more than Okta. Auth0 was acquired by Okta so while we've switched to a more appropriate product, data is still with the same company.

> Side note, Mythic originally used Okta simply due to internal team knowledge and experience. That made it a simpler choice to implement at the time.

We were able to export user IDs and email addresses from Okta so we could match accounts to our own user database. That information was then imported to the new Auth0 account. Unfortunately, passwords could not be migrated, which means every account needed to do a password reset. We've done our best to make this situation as clear and simple as possible.

### Will this Happen Again?

We really hope we are not in this situation again! The Auth0 account we are on is more suited for Mythic's requirements and is not a development product. However, long term we would like to explore managing user accounts locally within the Mythic app. This would give us full control, though it does come with its own challenges to consider. If we do decide to go this route, our expectation is we would be able to export hashed passwords (a one-way encryption, meaning we could not see the plain-text password itself). This would mean that users would not need to reset passwords.
