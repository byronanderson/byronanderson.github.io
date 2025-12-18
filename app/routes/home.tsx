import type { Route } from "./+types/home";
import "./home.css";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Byron Anderson" },
    { name: "description", content: "A software developer's home site." },
  ];
}

export default function Home() {
  return (
    <article className="Home flex items-center justify-center">
      <div className="w-[500px] max-w-[100vw] p-4 pt-16">
        <h1 className="text-center">Byron Anderson</h1>
        <section>
          <p>
            I build software systems that help people work together effectively,
            especially in environments with shared state, concurrent users, and
            evolving requirements.
          </p>
          <p>
            My work focuses on the technical challenges behind collaboration:
          </p>
          <ul>
            <li>Intent preserving audit trails for all users of a system</li>
            <li>Shared state across users and services</li>
            <li>Real-time and near-real-time synchronization</li>
            <li>Conflict resolution and consistency trade-offs</li>
            <li>Designing systems that preserve context and intent</li>
            <li>APIs and tooling that support teams, not just machines</li>
          </ul>
        </section>
        <section>
          <h2>About</h2>
          <p>
            I’m a software developer with a strong interest in systems that sit
            at the intersection of people and infrastructure. I enjoy problems
            where technical decisions directly shape how teams communicate, make
            decisions, and know what to do next.
          </p>
          <p>
            I’ve worked on products and platforms that support collaborative
            business processes. I care deeply about correctness and
            maintainability, especially in systems that multiple people rely on
            simultaneously.
          </p>
          <p>
            I can see the interface between humans and systems, not just
            existing deployment implementation details.
          </p>
        </section>
        <section>
          <h2>Projects of which I am particularly proud</h2>
          <h3>
            <a href="https://www.mechanical-orchard.com/">Mechanical Orchard</a>{" "}
            - Safe software modernization
          </h3>
          <ul>
            <li>
              Platform for modernizing software systems, including:
              <ul>
                <li>measuring "what a legacy system does"</li>
                <li>
                  asserting "the candidate wanted to do the same thing that the
                  legacy system did"
                </li>
                <li>help implementing the replacement candidate</li>
              </ul>
              <li>
                My major contributions:
                <ul>
                  <li>
                    Introduced a much faster local feedback loop for existing
                    system characterization
                  </li>
                  <li>
                    Utilized the Elixir Streaming APIs to tailor assertions
                    quite precisely
                  </li>
                </ul>
              </li>
            </li>
          </ul>
          <h3>
            <a href="https://www.thrivebio.com/">Thrive Bioscience</a> - Cell
            biology processes platform
          </h3>
          <ul>
            <li>
              Enabling biologists to examine image data
              <ul>
                <li>
                  Annotation and overlay of a "region of the cell plate"
                  <ul>
                    <li>
                      For example: in the context of a cancer study
                      <ul>
                        <li>
                          ability to annotate a region as particularly of
                          interest, see the same annotation on newer and older
                          images of the same cell plate
                        </li>
                        <li>
                          an opacity slider with between overlayed "old" and
                          "new" images, to see the growth or shrinking of a
                          colony of cells over time
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Deep zoom functionality for high resolution stitched cell plate
              imagery
              <ul>
                <li>
                  I integrated imperative{" "}
                  <a href="https://openseadragon.github.io/">openseadragon</a>{" "}
                  library into a declarative{" "}
                  <a href="https://react.dev/">react</a> application
                </li>
              </ul>
            </li>
          </ul>
          <h3>
            <a href="https://geometer.io/">Geometer</a> - COVID-19 case tracking
            application
          </h3>
          <ul>
            <li>Swiftly created to support municipalities</li>
            <li>Customized to emphasize the specifics of COVID-19</li>
            <li>
              Quite close to customized customer relationship management
              software, but requiring HIPAA compliance
            </li>
          </ul>
          <h3>Kohort - VOIP meeting application</h3>
          <ul>
            <li>
              Meeting VOIP and recordings provided by{" "}
              <a href="https://www.twilio.com/">Twilio</a>
            </li>
            <li>
              Integrated features from real time meeting into recording view
              <ul>
                <li>Example: seek to timestamp from transcription click</li>
                <li>
                  Example: play thumbs-up CSS effect over top of the recording
                  view when it was initiated in the real time meeting
                </li>
              </ul>
            </li>
            <li>
              Integrated collaborative text editor
              <ul>
                <li>
                  Backed by{" "}
                  <a href="https://en.wikipedia.org/wiki/Operational_transformation">
                    Operational Transform
                  </a>{" "}
                  for text
                </li>
              </ul>
            </li>
          </ul>
          <h3>
            <a href="https://www.linkedin.com/pulse/farewell-pivotal-tracker-eulogy-unsung-hero-agile-parker-fleming-ih57c/">
              Pivotal Tracker
            </a>{" "}
            - Project management software
          </h3>
          <ul>
            <li>Optimistic updates for edits that may fail</li>
            <li>
              Rebasing edits when needed:
              <ul>
                <li>
                  Preserving user intent and re-attempting edits on superficial
                  failure
                </li>
              </ul>
            </li>
            <li>
              Discarding edits that no longer semantically apply
              <ul>
                <li>
                  Example: you changed the name of an issue which was deleted by
                  someone else
                </li>
                <li>
                  While presenting an understandable error message to the user
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <h2>Philosophy</h2>
          <p>
            I aim to build software that makes collaboration legible, where
            users and developers alike understand what’s happening and why.
          </p>
        </section>
        <section>
          <h2>Contact me</h2>
          <p>
            I’m especially interested in working on products where collaboration
            is core.
          </p>
          <p>
            If you’re building tools for teams, shared workflows, or complex
            coordination,{" "}
            <a href="https://forms.gle/RyNcriWtbBkHFdZn9">I’d love to talk</a>.
          </p>
        </section>
      </div>
    </article>
  );
}
