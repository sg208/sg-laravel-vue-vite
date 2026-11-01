<template>
    <LegalPage heading="Accessibility" updated="1 November 2026">
        <p>
            Wizkid Manager 2000 is a small demo, and it should still work for
            everyone. The target is
            <a href="https://www.w3.org/TR/WCAG22/">WCAG 2.2</a> level AA. The
            site has not been audited by an outside party, so treat this page as
            a description of the work done, not a certificate.
        </p>

        <h2>What is in place</h2>
        <ul>
            <li>
                The page language is set to English, and every page has its own
                title and exactly one main heading.
            </li>
            <li>
                A "Skip to main content" link is the first thing the Tab key
                reaches.
            </li>
            <li>
                The layout uses header, navigation, main and footer landmarks,
                so screen reader users can jump between them. The two
                navigation areas are labelled "Main" and "Site information".
            </li>
            <li>
                When you move to another page inside the site, focus moves to
                that page's main heading.
            </li>
            <li>
                On the wizkid list, the loading message and the number of
                wizkids loaded are announced in a polite live region, and a
                failed load is announced as an alert. An empty list says so.
            </li>
            <li>
                Each wizkid's name is a level 2 heading under the page's level 1
                heading. The photos are random sample pictures, not the people,
                so they have empty alt text and screen readers skip them. The
                Update and Delete links name the person they act on.
            </li>
            <li>
                Links are real links, so they work with a keyboard. Focus shows
                as a thick outline in the accent colour.
            </li>
            <li>
                Buttons and navigation links are at least 44 pixels tall.
            </li>
            <li>
                Colours follow your system's light or dark setting. Text and
                controls were checked for WCAG AA contrast in both.
            </li>
            <li>
                The layout reflows down to 320 pixels wide without sideways
                scrolling.
            </li>
            <li>
                The only motion is a short colour change on hover, and it is
                switched off when your system asks for reduced motion.
            </li>
            <li>
                Unit tests check the headings, landmarks, image alt text, link
                names, the live region and the error alert. Every page was also
                checked with the axe tool and walked through with the keyboard,
                in light and dark mode.
            </li>
        </ul>

        <h2>Known problems</h2>
        <ul>
            <li>
                The Add, Update, Delete and Login pages are placeholders with no
                working forms yet.
            </li>
            <li>
                The Update and Delete links on each row all lead to the same
                placeholder page, whichever wizkid you picked.
            </li>
            <li>
                The site has not been tested with a screen reader by people who
                use one every day.
            </li>
        </ul>

        <h2>Report a problem</h2>
        <p>
            If something gets in your way, please
            <a href="https://github.com/sg208/sg-laravel-vue-vite/issues"
                >open an issue on GitHub</a
            >. Say which page you were on, what you were trying to do, and which
            browser or assistive technology you use.
        </p>
    </LegalPage>
</template>
