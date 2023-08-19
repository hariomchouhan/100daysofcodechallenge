import React from 'react'

const NameComponent = (props) => {
  return (
    <div>
      Hi, I am Name Component. & Name is {props.name} {props.surname}
    </div>
  )
}

export default NameComponent

const withSurname = (Component) => {
    return ( (props) => (
        <div>
            <Component {...props} />
        </div>
    )

    )
}

export const FullNameComponent = withSurname(NameComponent)