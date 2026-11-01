<template>
    <LegalPage heading="Privacy" updated="1 November 2026">
        <p>
            This site is a demo. It has no accounts, no sign-up, no analytics
            and no tracking. It sets no cookies and stores nothing in your
            browser's local storage. The Login page is a placeholder and does
            not ask for anything.
        </p>

        <h2>The data you see</h2>
        <p>
            The list of wizkids is sample data that ships with the code. Your
            browser loads it from this site as a JSON file. Nothing you do on
            the site is sent back or saved.
        </p>

        <h2>Who your browser talks to</h2>
        <ul>
            <li>
                <strong>Cloudflare</strong> hosts the site on Cloudflare
                Workers. Like any web host, it receives each request and may
                keep standard request logs, such as your IP address, browser
                user agent and the page you asked for. See the
                <a href="https://www.cloudflare.com/privacypolicy/"
                    >Cloudflare privacy policy</a
                >.
            </li>
            <li>
                <strong>Lorem Picsum</strong> (picsum.photos, which redirects to
                fastly.picsum.photos) serves the wizkid photos. Loading a photo
                sends your IP address and user agent to that service.
            </li>
            <li>
                <strong>GitHub</strong> only if you follow a link to the source
                code or the issue tracker.
            </li>
        </ul>
        <p>
            The fonts (Instrument Sans and Instrument Serif) ship with the site
            itself. The site loads no fonts, maps or scripts from any other
            server.
        </p>

        <h2>Questions</h2>
        <p>
            There is no contact email for this project. If you have a question
            about privacy,
            <a href="https://github.com/sg208/sg-laravel-vue-vite/issues"
                >open an issue on GitHub</a
            >.
        </p>
    </LegalPage>
</template>
