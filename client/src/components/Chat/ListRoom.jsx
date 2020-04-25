import React from 'react'

export default function ListRoom(props) {
    return (
        <div>
            {
                props.roomList.map(user => 
                        <div className="list-item">
                            {user}
                        </div>
                    )
            }
        </div>
    )
}
