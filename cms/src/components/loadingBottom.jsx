import React from 'react'

export default function LoadingButton() {
    return(
        <div className="spinner-border text-primary" role="status">
            <span className="sr-only">
                Loading...
            </span>
        </div>
    )
}