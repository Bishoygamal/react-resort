import React from 'react'
import Room from './Room';
export default function RoomsList({rooms}) {
    if(rooms.length ===  0){
        return (
            <div className="empty-search">
                <h3>unfortunatlly No Rooms Matched to your criteria </h3>
            </div>
        )
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    rooms.map(item =>{
                        return <Room Key={item.id} room={item} />
                    })
                }
            </div>
        </section>
    )
}
