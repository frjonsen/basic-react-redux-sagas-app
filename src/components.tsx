import * as React from 'react'

export interface Props {
    onClick: () => void;
}

// This is a stateless component, called SFC
export const RequestButton: React.SFC<Props>
    = (props: Props) => <button onClick={props.onClick}>Click me</button>