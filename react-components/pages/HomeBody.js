import React from 'react';

export default function HomeBody() {
    return(
        <section className="HomeBody">
            <article className="welcome">
                <h1>Welcome</h1>
                <h2>This site is your go-to for open source component code</h2>
                <p className="welcome-subtext text-start">tweak it</p>
                <p className="welcome-subtext text-center">style it</p>
                <p className="welcome-subtext text-end">make it yours</p>
            </article>
            <article className="callToAction">
                <h2>Ready to find the right code for you?</h2>
                <button className="px-3 d-block mx-auto my-3">See Standard Code</button>
                <button className="px-3 d-block mx-auto my-3">See Code with Bootstrap</button>
            </article>
        </section>
    )
}