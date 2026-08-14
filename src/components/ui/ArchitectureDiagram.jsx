import { m, useTransform } from 'framer-motion'
import {
  FaArrowRight,
  FaBrain,
  FaDatabase,
  FaGears,
  FaLaptopCode,
  FaServer,
  FaWandMagicSparkles,
} from 'react-icons/fa6'

const stageIcons = {
  data: FaDatabase,
  processing: FaGears,
  models: FaBrain,
  explanations: FaWandMagicSparkles,
  api: FaServer,
  delivery: FaLaptopCode,
}

function ArchitectureStage({ stage, index, stageCount, progress, reduceMotion }) {
  const Icon = stageIcons[stage.id] ?? FaGears
  const revealStart = 0.12 + index * (0.58 / Math.max(stageCount - 1, 1))
  const opacity = useTransform(progress, [Math.max(0, revealStart - 0.12), revealStart], [0.58, 1])
  const y = useTransform(progress, [Math.max(0, revealStart - 0.12), revealStart], [12, 0])
  const scale = useTransform(progress, [Math.max(0, revealStart - 0.12), revealStart], [0.985, 1])

  return (
    <m.li
      className="architecture-stage"
      style={reduceMotion ? undefined : { opacity, y, scale }}
      data-motion-stage={index + 1}
    >
      <div className="architecture-stage__node">
        <div className="architecture-stage__icon" aria-hidden="true">
          <Icon />
        </div>
        <p className="architecture-stage__index">
          {String(index + 1).padStart(2, '0')}
        </p>
        <strong>{stage.label}</strong>
        {stage.technology ? <span>{stage.technology}</span> : null}
      </div>

      {index < stageCount - 1 ? (
        <FaArrowRight className="architecture-stage__connector" aria-hidden="true" />
      ) : null}
    </m.li>
  )
}

function ArchitectureDiagram({ stages, progress, reduceMotion }) {
  return (
    <figure className="architecture-panel" aria-labelledby="architecture-title">
      <header className="architecture-panel__header">
        <div>
          <p className="technical-label">System architecture</p>
          <h3 id="architecture-title">From raw signals to useful intelligence</h3>
        </div>
        <span aria-hidden="true">PIPELINE / 01</span>
      </header>

      <ol className="architecture-flow">
        {stages.map((stage, index) => (
          <ArchitectureStage
            key={stage.id}
            stage={stage}
            index={index}
            stageCount={stages.length}
            progress={progress}
            reduceMotion={reduceMotion}
          />
        ))}
      </ol>

      <figcaption>
        A six-stage delivery path connecting product data, scalable processing,
        recommendation intelligence, natural-language explanations, APIs, and persistence.
      </figcaption>
    </figure>
  )
}

export default ArchitectureDiagram
