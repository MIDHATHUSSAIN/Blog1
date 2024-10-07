function ADMINTABLEFORAUTHOR({ Authors }) {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Bio</th>
            </tr>
          </thead>
          <tbody>
            {Authors.map((p) => (
              <tr className="bg-base-200">
                <th>1</th>
                <td>{p.name}</td>
                <td>{p.email}</td>
                <td>{p.experience}</td>
                <td>{p.bio}</td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ADMINTABLEFORAUTHOR;
