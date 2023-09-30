import React from 'react'
import FriendListItem from './FriendListItem/FriendListItem'

const FriendList = props => (
    <ul class="friend-list">
        {props.friends.map((friend, i) => (
                <React.Fragment key={friend.id}>
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                </React.Fragment>
            )
        )}        
    </ul>
)

export default FriendList;