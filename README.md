# Byron Anderson

I build software systems that help people work together effectively, especially in environments with shared state, concurrent users, and evolving requirements.

My work focuses on the technical challenges behind collaboration:

- Intent preserving audit trails for all users of a system
- Shared state across users and services
- Real-time and near-real-time synchronization
- Conflict resolution and consistency trade-offs
- Designing systems that preserve context and intent
- APIs and tooling that support teams, not just machines

## About

I’m a software developer with a strong interest in systems that sit at the intersection of people and infrastructure. I enjoy problems where technical decisions directly shape how teams communicate, make decisions, and know what to do next.

I’ve worked on products and platforms that support collaborative business processes. I care deeply about correctness and maintainability, especially in systems that multiple people rely on simultaneously.

I can see the interface between humans and systems, not just existing deployment implementation details.

## Projects

### [Thrive Bioscience](https://www.thrivebio.com/) - Cell biology processes platform

- Integrated experimentation strategy into the information architecture of the application
  - enabling biologists to capture image data
    - annotation and overlay of a "region of the plate"
      - Example: in the context of a cancer study
        - ability to annotate a region as particularly of interest, see the same annotation on newer and older images of the same cell plate
        - an opacity slider from "old" image to "new" image, to see the growth or shrinking of a colony of cells
- Deep zoom functionality for high resolution stitched cell plate imagery
  - integrated imperative [openseadragon](https://openseadragon.github.io/) tool into declarative [react](https://react.dev/) application

### [Geometer](https://geometer.io/) - COVID-19 case tracking application

- Swiftly created to support municipalities
- Customized to emphasize the specifics of COVID-19
- Quite close to customized customer relationship management software, but requiring HIPAA compliance

### Kohort - VOIP meeting application

- Meeting VOIP and recordings provided by [Twilio](https://www.twilio.com/)
- Integrated features from real time meeting into recording view
  - Example: seek to timestamp from transcription click
  - Example: play thumbs-up CSS effect over top of the recording view when it was initiated in the real time meeting
- Integrated collaborative text editor
  - Backed by [Operational Transform](https://en.wikipedia.org/wiki/Operational_transformation) for text

### [Pivotal Tracker](https://www.linkedin.com/pulse/farewell-pivotal-tracker-eulogy-unsung-hero-agile-parker-fleming-ih57c/) - Project management software

- Optimistic updates for edits that may fail
- Rebasing edits when needed:
  - Preserving user intent and re-attempting edits on superficial failure
- Discarding edits that no longer semantically apply
  - Example: you changed the name of an issue which was deleted by someone else
  - While presenting an understandable error message to the user

## Philosophy

I aim to build software that makes collaboration legible, where users and developers alike understand what’s happening and why.

## Contact me

I’m especially interested in working on products where collaboration is core.

If you’re building tools for teams, shared workflows, or complex coordination, [I’d love to talk](https://forms.gle/RyNcriWtbBkHFdZn9).
