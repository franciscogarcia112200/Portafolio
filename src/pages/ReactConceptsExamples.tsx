//ReactConceptsExamples.tsx
import ProjectStructure from '../components/ProjectStructure'
import ComponentsExample from '../components/ComponentsExample'
import PropsExample from '../components/PropsExample'
import PropTypesExample from '../components/PropTypesExample'
import EventsExample from '../components/EventsExample'
import HooksExample from '../components/HooksExample'
import RouterExample from '../components/RouterExample'
//import HooksDeepDive from '../components/react-concepts/HooksDeepDive'

export default function ReactConcepts() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', lineHeight: 1.6 }}>
      <h1>Conceptos de React</h1>
      <p>Esta página explica los conceptos clave de React usando ejemplos reales.</p>
      <hr />
      <ProjectStructure />
      <ComponentsExample />
      <PropsExample />
      <PropTypesExample />
      <EventsExample />
      <HooksExample />
      <RouterExample />
      {/* <HooksDeepDive /> */}
    </div>
  )
}