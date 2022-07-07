const UserList = ({users})=>{
    return <ul className="list-group">
        {users.map((user)=> (
             <li class="list-group-item d-flex justify-content-between align-items-center">
                {user.name}
                <input type="checkbox" checked={user.completed} />
            </li>
        ))}
    </ul>;
}

export default UserList;