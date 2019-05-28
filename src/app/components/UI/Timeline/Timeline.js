import React from 'react'

const Timeline = (props) => {
  const { data } = props


  return (
    <div className="timeline timeline-centered">
      {
        data.map((item, i) => (
          <article className="timeline-entry" key={i}>
            <div className="timeline-entry-inner">
              {item.time ? <time className="timeline-time" dangerouslySetInnerHTML={{ __html: item.time }}></time> : ''}
              <div className={`timeline-icon ${item.iconSize || ''} ${item.iconColor || ''}`}>
                <span className={`ar-icons ${item.icon}`}></span>
              </div>
              {item.label ? <div className="timeline-label" dangerouslySetInnerHTML={{ __html: item.label }}></div> : null}
              {item.title ? <h2 className="timeline-title" dangerouslySetInnerHTML={{ __html: item.title }}></h2> : null}
            </div>
          </article>
        ))
      }
    </div>
  )
}

export default Timeline
