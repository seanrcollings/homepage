import React from "react";

interface FooterProps {
  readonly type: string
  readonly section: string;
}

export default function Footer(props: FooterProps) {
  return (
    <footer id={props.section} className={`profile-${props.type} footer`}>
      <section className="footer-section footer-links">
        <h2 className="footer-section-title">Links</h2>
        <ul>
          <li>
            <a href="https://github.com/seanrcollings">Github</a>
          </li>
          <li>
            <a href="http://pisite.seanrcollings.com">Pi Site</a>
          </li>
          <li>
            <a href="https://moonshiver.herokuapp.com">Moonshiver</a>
          </li>
          <li>
            <a href="http://blog.seanrcollings.com">Blog</a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
