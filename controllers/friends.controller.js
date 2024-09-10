import friends from '../models/friends.model.js'

function addNewFriend(req, res) {

    if (!req.body.name) {
        return res.status(400).json({ error: 'Name is required' });
    }

    const newFriend = {
        id: friends.length,
        name: req.body.name
    };

    friends.push(newFriend);
   return res.json(newFriend);
}

function getAllFriends (req, res){
   return res.json(friends);
}

function getFriend  (req, res){
    const id = Number(req.params.id);
    const friend = friends[id];

    if (!friend) {
        return res.status(404).json({ error: 'Friend does not exist' });
    }

   return res.json(friend);
}

function deleteFriend(req, res){
    
    const id = Number(req.params.id);
    const friendIndex = friends.findIndex((friend) => friend.id === id); 

    if (friendIndex === -1) {
      return res.status(404).json({ error: 'Friend does not exist' });
    }
  
    friends.splice(friendIndex, 1);
  
    return res.json(friends);
}


export { 
    addNewFriend,
    getAllFriends, 
    getFriend,
    deleteFriend
}