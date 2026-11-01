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
                title and a single main heading.
            </li>
            <li>
                The layout uses header, navigation, main and footer landmarks,
                so screen reader users can jump between them.
            </li>
            <li>
                The "Fetching data" message sits in a polite live region, and a
                failed load is announced as an alert.
            </li>
            <li>
                Every wizkid photo has alt text with the person's name, and the
                Update and Delete links name the person they act on.
            </li>
            <li>
                Links and buttons are real links, so they work with a keyboard
                and show the browser's focus outline.
            </li>
            <li>
                Unit tests check the alt text, the link names, the live region
                and the error alert.
            </li>
        </ul>

        <h2>Known problems</h2>
        <ul>
            <li>
                The wizkid cards do not stack on very narrow screens, so at
                320px wide some content gets squeezed.
            </li>
            <li>
                When the list finishes loading, nothing is announced, and an
                empty list shows no message.
            </li>
            <li>
                Wizkid names are marked as level 3 headings directly under the
                level 1 heading.
            </li>
            <li>
                Moving to another page does not move focus or announce the new
                page, and there is no skip link.
            </li>
            <li>
                The Add, Update, Delete and Login pages are placeholders with no
                working forms yet.
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
